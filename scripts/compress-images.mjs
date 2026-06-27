import sharp from "sharp";
import { readdirSync, statSync, existsSync } from "fs";
import { join, parse } from "path";

const GALLERY_DIR = "public/images/gallery";
const SERVICES_DIR = "public/images/services";

const QUALITY = 80;
const MAX_WIDTH = 1920;

async function optimize(filePath) {
  const { name, ext } = parse(filePath);
  const outPath = join(parse(filePath).dir, `${name}.webp`);

  if (existsSync(outPath)) return { skipped: true, file: filePath };

  const info = await sharp(filePath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);

  const original = statSync(filePath).size;
  const saved = ((1 - info.size / original) * 100).toFixed(1);
  return {
    file: filePath,
    before: (original / 1024 / 1024).toFixed(2) + " MB",
    after: (info.size / 1024 / 1024).toFixed(2) + " MB",
    saved: saved + "%",
  };
}

async function processDirectory(dir) {
  if (!existsSync(dir)) {
    console.log(`Directory not found: ${dir}`);
    return [];
  }
  const files = readdirSync(dir).filter(
    (f) => /\.(jpe?g|png)$/i.test(f) && !f.startsWith(".")
  );
  const results = [];
  for (const file of files) {
    const result = await optimize(join(dir, file));
    if (!result.skipped) results.push(result);
  }
  return results;
}

const galleryResults = await processDirectory(GALLERY_DIR);
const servicesResults = await processDirectory(SERVICES_DIR);

console.log("\n=== Gallery Images ===");
for (const r of galleryResults) {
  console.log(`${r.file}  ${r.before} → ${r.after}  (saved ${r.saved})`);
}
console.log(`\n=== Services Images ===`);
for (const r of servicesResults) {
  console.log(`${r.file}  ${r.before} → ${r.after}  (saved ${r.saved})`);
}

const totalBefore = [...galleryResults, ...servicesResults].reduce(
  (s, r) => s + parseFloat(r.before),
  0
);
const totalAfter = [...galleryResults, ...servicesResults].reduce(
  (s, r) => s + parseFloat(r.after),
  0
);
console.log(
  `\nTotal: ${totalBefore.toFixed(2)} MB → ${totalAfter.toFixed(2)} MB (saved ${(
    (1 - totalAfter / totalBefore) *
    100
  ).toFixed(1)}%)`
);

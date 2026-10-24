import { buildOpenGraph } from "../../seo-config";

export const metadata = {
  title: "Laser Treatment in Nashik | Laser Hair Removal & Skin",
  description:
    "Advanced laser treatment in Nashik at Derma Suite — laser hair removal, pigmentation removal, laser acne scar treatment & skin rejuvenation by Dr. Aditi Patil.",
  keywords: [
    "laser treatment in Nashik",
    "laser hair removal Nashik",
    "laser pigmentation treatment Nashik",
    "laser acne scar treatment Nashik",
    "best laser clinic Nashik",
  ],
  alternates: { canonical: "/services/laser-treatment" },
  openGraph: buildOpenGraph({
    title: "Laser Treatment in Nashik | Laser Hair Removal & Skin",
    description:
      "Advanced laser treatment in Nashik at Derma Suite — laser hair removal, pigmentation, acne scar treatment & skin rejuvenation.",
    path: "/services/laser-treatment",
  }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
import { buildOpenGraph } from "../../seo-config";

export const metadata = {
  title: "Dermatosurgery in Nashik | Minor Skin Surgery Specialist",
  description:
    "Minor skin surgery in Nashik at Derma Suite — mole & wart removal, cyst removal, nail surgery, keloid & scar revision, vitiligo grafting by Dr. Aditi Patil.",
  keywords: [
    "dermatosurgery Nashik",
    "mole removal Nashik",
    "nail surgery Nashik",
    "skin biopsy Nashik",
    "vitiligo treatment Nashik",
    "skin surgery specialist Nashik",
  ],
  alternates: { canonical: "/services/surgical-dermatology" },
  openGraph: buildOpenGraph({
    title: "Dermatosurgery in Nashik | Minor Skin Surgery Specialist",
    description:
      "Minor skin surgery in Nashik at Derma Suite — mole & wart removal, nail surgery, keloid & scar revision, vitiligo grafting.",
    path: "/services/surgical-dermatology",
  }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
import { buildOpenGraph } from "../../seo-config";

export const metadata = {
  title: "Medical Dermatology in Nashik | Skin Specialist Treatment",
  description:
    "Medical dermatology treatment in Nashik by Dr. Aditi Patil. Best skin specialist for acne, eczema, psoriasis, fungal infections, hair loss & vitiligo at Derma Suite.",
  keywords: [
    "skin specialist in Nashik",
    "best dermatologist in Nashik",
    "acne treatment Nashik",
    "eczema treatment Nashik",
    "psoriasis treatment Nashik",
    "skin doctor Nashik",
  ],
  alternates: { canonical: "/services/medical-dermatology" },
  openGraph: buildOpenGraph({
    title: "Medical Dermatology in Nashik | Skin Specialist Treatment",
    description:
      "Medical dermatology treatment in Nashik by Dr. Aditi Patil — acne, eczema, psoriasis, fungal infections, hair loss & vitiligo.",
    path: "/services/medical-dermatology",
  }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
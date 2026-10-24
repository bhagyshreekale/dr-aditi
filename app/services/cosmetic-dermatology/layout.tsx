import { buildOpenGraph } from "../../seo-config";

export const metadata = {
  title: "Cosmetic Dermatology in Nashik | Botox, Fillers & Peels",
  description:
    "Best cosmetic dermatology treatment in Nashik at Derma Suite. Botox, dermal fillers, chemical peels, skin rejuvenation & anti-aging by Dr. Aditi Patil, top skin specialist.",
  keywords: [
    "cosmetic dermatologist in Nashik",
    "botox in Nashik",
    "dermal fillers Nashik",
    "cosmetic treatment Nashik",
    "anti aging treatment Nashik",
    "best cosmetic dermatologist Nashik",
  ],
  alternates: { canonical: "/services/cosmetic-dermatology" },
  openGraph: buildOpenGraph({
    title: "Cosmetic Dermatology in Nashik | Botox, Fillers & Peels",
    description:
      "Best cosmetic dermatology treatment in Nashik at Derma Suite — Botox, dermal fillers, chemical peels, skin rejuvenation by Dr. Aditi Patil.",
    path: "/services/cosmetic-dermatology",
  }),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
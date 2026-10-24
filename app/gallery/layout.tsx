import { buildOpenGraph } from "../seo-config";

export const metadata = {
  title: "Gallery | Derma Suite Skin Clinic Nashik",
  description:
    "See clinic photos, treatments in action and patient results at Derma Suite — best dermatology clinic in Nashik by Dr. Aditi Patil, skin specialist.",
  keywords: [
    "Derma Suite gallery",
    "dermatology clinic photos Nashik",
    "skin clinic Nashik before after",
  ],
  alternates: { canonical: "/gallery" },
  openGraph: buildOpenGraph({
    title: "Gallery | Derma Suite Skin Clinic Nashik",
    description:
      "See clinic photos, treatments in action and patient results at Derma Suite, Nashik.",
    path: "/gallery",
  }),
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
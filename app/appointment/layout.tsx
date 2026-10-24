import { buildOpenGraph } from "../seo-config";

export const metadata = {
  title: "Book Appointment | Dermatologist Nashik",
  description:
    "Book an appointment with Dr. Aditi Patil, best dermatologist in Nashik. Online appointment, consultation and skin & hair treatment booking at Derma Suite Clinic. Call +91 8799505624.",
  keywords: [
    "book dermatologist appointment Nashik",
    "best dermatologist in Nashik appointment",
    "skin doctor consultation Nashik",
    "Derma Suite appointment",
  ],
  alternates: { canonical: "/appointment" },
  openGraph: buildOpenGraph({
    title: "Book Appointment | Dermatologist Nashik",
    description:
      "Book an appointment with Dr. Aditi Patil, best dermatologist in Nashik. Call +91 8799505624.",
    path: "/appointment",
  }),
};

export default function AppointmentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
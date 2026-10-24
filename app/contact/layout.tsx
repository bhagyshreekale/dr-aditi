import { buildOpenGraph } from "../seo-config";

export const metadata = {
  title: "Contact | Best Dermatology Clinic Nashik",
  description:
    "Contact Derma Suite, best skin clinic in Nashik at Old Gangapur Naka. Dr. Aditi Patil dermatologist — call +91 8799505624, email draditipatil@outlook.com, or visit our Nashik clinic today.",
  keywords: [
    "contact dermatologist Nashik",
    "best skin clinic near me Nashik",
    "Derma Suite clinic address",
    "dermatologist Old Gangapur Naka",
  ],
  alternates: { canonical: "/contact" },
  openGraph: buildOpenGraph({
    title: "Contact | Best Dermatology Clinic Nashik",
    description:
      "Contact Derma Suite, best skin clinic in Nashik at Old Gangapur Naka. Call +91 8799505624.",
    path: "/contact",
  }),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What skin conditions does Dr. Aditi Patil treat in Nashik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dr. Aditi Patil, the best dermatologist in Nashik, treats acne, eczema, psoriasis, rosacea, fungal infections, pigmentation disorders, hair loss (alopecia), urticaria, and skin allergies at Derma Suite clinic.",
      },
    },
    {
      "@type": "Question",
      name: "How do I book a dermatologist appointment in Nashik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can book an appointment with Dr. Aditi Patil by calling +91 8799505624, using the online booking portal on dermasuite.in, or visiting the Derma Suite clinic at Old Gangapur Naka, Nashik in person.",
      },
    },
    {
      "@type": "Question",
      name: "What cosmetic dermatology treatments are available in Nashik?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derma Suite in Nashik offers Botox, dermal fillers, chemical peels, microneedling, PRP therapy for hair and skin, laser treatments for pigmentation and hair removal, and personalised medical-grade skin care regimens.",
      },
    },
    {
      "@type": "Question",
      name: "Where is the Derma Suite dermatology clinic located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Derma Suite Advanced Dermatology & Cosmetology Clinic is located at Office No. 4, Dharmaraj Plaza, Old Gangapur Naka, Beside Adgonkar Gold, Nashik – 422005, Maharashtra.",
      },
    },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
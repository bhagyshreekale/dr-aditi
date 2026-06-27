"use client";

import { useState } from "react";

const faqs = [
  {
    category: "General",
    categoryClass: "bg-red-100 text-red-600",
    question: "What skin conditions does Dr. Aditi Patil treat?",
    answer:
      "Dr. Patil treats acne, eczema, psoriasis, rosacea, fungal infections, pigmentation disorders, hair loss (alopecia), urticaria, and skin allergies. She also manages complex chronic skin conditions and provides second opinions for difficult cases.",
  },
  {
    category: "Appointments",
    categoryClass: "bg-blue-100 text-blue-600",
    question: "How do I book an appointment?",
    answer:
      "You can schedule a consultation by calling the clinic, using our online booking portal, or visiting in person. We recommend booking 2–3 days in advance. For urgent concerns, same-day or next-day slots may be available — please call us directly.",
  },
  {
    category: "Appointments",
    categoryClass: "bg-blue-100 text-blue-600",
    question: "What should I expect during my first visit?",
    answer:
      "Your initial consultation typically lasts 20–30 minutes. Dr. Patil will review your medical history, examine the affected skin, and may recommend tests such as patch tests or dermoscopy. Please bring a list of current medications and avoid applying heavy creams to the area of concern.",
  },
  {
    category: "Cosmetic",
    categoryClass: "bg-green-100 text-green-600",
    question: "Does the clinic offer cosmetic dermatology treatments?",
    answer:
      "Yes. Dr. Patil offers Botox, dermal fillers, chemical peels, microneedling, PRP therapy for hair and skin, laser treatments for pigmentation and hair removal, and personalised medical-grade skin care regimens. A consultation is required before any cosmetic procedure.",
  },
  {
    category: "Skin Care",
    categoryClass: "bg-amber-100 text-amber-600",
    question: "How do I manage acne-prone skin at home?",
    answer:
      "Use a gentle, non-comedogenic cleanser twice daily and avoid scrubbing or picking at breakouts. Choose oil-free moisturisers and sunscreens. Ingredients like niacinamide, salicylic acid, and benzoyl peroxide can help — but for persistent or cystic acne, a prescription plan from Dr. Patil is strongly recommended.",
  },
  {
    category: "Skin Care",
    categoryClass: "bg-amber-100 text-amber-600",
    question: "Is sunscreen really necessary on cloudy or indoor days?",
    answer:
      "Absolutely. Up to 80% of UV rays penetrate clouds, and UVA rays pass through glass windows. Dr. Patil recommends a broad-spectrum SPF 30 or higher every morning, year-round, regardless of weather or whether you plan to be indoors.",
  },
  {
    category: "Billing",
    categoryClass: "bg-gray-100 text-gray-600",
    question: "Does the clinic accept insurance?",
    answer:
      "We work with most major health insurance providers. Please carry your insurance card and a referral letter if required. Cosmetic procedures are generally not covered by insurance. Contact our front desk for a full list of accepted insurers.",
  },
  {
    category: "Safety",
    categoryClass: "bg-cyan-100 text-cyan-600",
    question: "When should a mole or skin lesion be checked by a doctor?",
    answer:
      "Use the ABCDE rule — watch for Asymmetry, irregular Border, multiple Colours, Diameter larger than 6 mm, and Evolution (changes over time). If a mole bleeds, itches, or changes appearance, consult Dr. Patil promptly. Annual full-body skin checks are recommended for everyone.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative overflow-hidden bg-rose-50 py-16 md:py-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-100 opacity-50 md:h-96 md:w-96" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-100 opacity-40 md:h-80 md:w-80" />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-12 text-center md:mb-16">
          <span className="mb-4 mt-4 inline-block rounded-full border border-rose-200 bg-white px-4 py-1 text-[10.5px] font-medium uppercase tracking-widest text-rose-400">
            Frequently Asked Questions
          </span>
          <h2
            className="mb-3 text-4xl font-normal leading-tight text-gray-900 md:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ask <em className="italic text-rose-400">Dr. Aditi Patil</em>
          </h2>
          <div className="mx-auto my-4 h-px w-10 bg-rose-200" />
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-500 md:text-base">
            Consultant Dermatologist &amp; Skin Care Specialist — answers to the
            questions we hear most often.
          </p>
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="divide-y divide-rose-100 border-b border-t border-rose-100">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`transition-colors duration-200 ${
                  isOpen ? "bg-white" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-start gap-3 border-0 bg-transparent px-0 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300 md:items-center md:py-5"
                >
                  {/* Category badge */}
                  <span
                    className={`hidden shrink-0 rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:inline-block ${item.categoryClass}`}
                  >
                    {item.category}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-sm font-medium leading-snug transition-colors duration-150 md:text-base ${
                      isOpen
                        ? "text-rose-500"
                        : "text-gray-800 group-hover:text-rose-400"
                    }`}
                  >
                    {item.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-base font-semibold transition ${
                      isOpen
                        ? "border-rose-300 bg-rose-50 text-rose-400"
                        : "border-gray-200 bg-gray-50 text-gray-400"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0" }}
                  aria-hidden={!isOpen}
                >
                  {/* Mobile badge */}
                  <span
                    className={`mb-2 inline-block rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide sm:hidden ${item.categoryClass}`}
                  >
                    {item.category}
                  </span>
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-gray-500 md:pr-12 md:text-[15px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── CTA ── */}
        {/* <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-rose-100 bg-white p-6 sm:flex-row sm:items-center sm:justify-between md:mt-14 md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-rose-200 bg-rose-50 text-xs font-semibold tracking-wider text-rose-400">
              AP
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">
                Still have questions?
              </p>
              <p className="mt-0.5 text-xs text-gray-400">
                Our team responds within one business day.
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <a
              href="tel:+911234567890"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-rose-400 px-5 py-2.5 text-sm font-medium text-white no-underline transition-colors duration-150 hover:bg-rose-500"
            >
              <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
              </svg>
              Call the clinic
            </a>
            <a
              href="mailto:info@draditipatil.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-rose-200 px-5 py-2.5 text-sm font-medium text-rose-500 transition-all duration-200 hover:bg-rose-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email Us
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

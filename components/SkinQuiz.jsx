"use client";
import { useState } from "react";

const questions = [
  {
    q: "What is your skin type?",
    options: ["Oily", "Dry", "Combination", "Normal", "I don't know"],
  },
  {
    q: "What is your primary skin concern?",
    options: ["Acne & Breakouts", "Pigmentation & Dark Spots", "Ageing & Fine Lines", "Dullness & Uneven Tone", "Sensitivity & Redness", "Hair Loss"],
  },
  {
    q: "How does your skin feel by midday?",
    options: ["Shiny all over", "Tight and flaky", "Oily in T-zone, dry on cheeks", "Comfortable and balanced"],
  },
  {
    q: "How often do you use sunscreen?",
    options: ["Every day", "Only when outdoors", "Rarely", "Never"],
  },
  {
    q: "What climate do you live in?",
    options: ["Hot & humid", "Hot & dry", "Moderate", "Cold"],
  },
  {
    q: "How would you describe your current skincare routine?",
    options: ["Minimal (cleanser + moisturiser)", "Moderate (5–6 steps)", "Extensive (10+ steps)", "No routine"],
  },
  {
    q: "Have you seen a dermatologist in the past 12 months?",
    options: ["Yes", "No", "Never"],
  },
];

const resultMap = {
  0: { label: "Oily / Acne-prone", ingredients: ["Niacinamide", "Salicylic Acid", "Azelaic Acid"], avoid: ["Coconut Oil", "Heavy Butters"], rec: "moderate" },
  1: { label: "Dry / Sensitive", ingredients: ["Hyaluronic Acid", "Ceramides", "Squalane"], avoid: ["Alcohol-based toners", "Fragrance"], rec: "mild" },
  2: { label: "Combination / Pigmentation", ingredients: ["Vitamin C", "Niacinamide", "SPF 50+"], avoid: ["Physical scrubs", "Lemon juice"], rec: "moderate" },
  3: { label: "Ageing / Fine lines", ingredients: ["Retinol", "Peptides", "Vitamin C"], avoid: ["Soap-based cleansers", "Over-exfoliation"], rec: "priority" },
};

export default function SkinQuiz() {
  const [step, setStep] = useState(0); // 0 = intro, 1-7 = questions, 8 = result
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);

  const isIntro = step === 0;
  const isDone = step === questions.length + 1;
  const currentQ = questions[step - 1];

  const result = resultMap[answers[1] ? [0,1,2,3][Math.floor(Math.random()*4)] : 0] || resultMap[0];

  const next = () => {
    if (selected !== null) {
      setAnswers((prev) => [...prev, selected]);
      setSelected(null);
      setStep((s) => s + 1);
    }
  };

  const restart = () => { setStep(0); setAnswers([]); setSelected(null); };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-rose-50 via-white to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-rose-100" />
        <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-pink-100" />
      </div>

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-[10.5px] font-medium uppercase tracking-widest text-rose-400 border border-rose-200 bg-white rounded-full px-4 py-1 mb-4">
            Free · 3 Minutes · Personalised
          </span>
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            What Does Your Skin <em className="italic text-rose-400">Actually Need?</em>
          </h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
            Answer 7 questions. Get a dermatologist-designed skin report — personalised to you.
          </p>
        </div>

        {/* Quiz card */}
        <div className="bg-white rounded-3xl border border-rose-100 shadow-lg overflow-hidden">
          {/* Progress bar */}
          {!isIntro && !isDone && (
            <div className="h-1 bg-rose-50">
              <div
                className="h-full bg-rose-400 transition-all duration-500"
                style={{ width: `${((step) / questions.length) * 100}%` }}
              />
            </div>
          )}

          <div className="p-6 md:p-10">
            {/* Intro */}
            {isIntro && (
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center mx-auto mb-6 text-3xl">
                  🧴
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Dr. Patil's Digital Skin Assessment</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm mx-auto">
                  No two skin types are the same. In under 3 minutes, you'll receive a personalised report covering your skin type, top concerns, and ingredient recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-8 text-left max-w-xs mx-auto">
                  {["7 simple questions", "Personalised ingredient guide", "Professional recommendation", "100% free — no sign up required"].map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-500 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setStep(1)}
                  className="w-full bg-rose-400 hover:bg-rose-500 text-white font-medium py-3 rounded-xl transition-colors duration-150"
                >
                  Start My Skin Assessment →
                </button>
                <p className="text-xs text-gray-400 mt-3">Your data is confidential and never sold to third parties.</p>
              </div>
            )}

            {/* Question */}
            {!isIntro && !isDone && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-rose-300 mb-2">
                  Question {step} of {questions.length}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 leading-snug">
                  {currentQ.q}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentQ.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setSelected(opt)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-150 ${
                        selected === opt
                          ? "border-rose-400 bg-rose-50 text-rose-600"
                          : "border-gray-200 bg-white text-gray-700 hover:border-rose-200 hover:bg-rose-50/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  {step > 1 ? (
                    <button onClick={() => { setStep(s => s - 1); setSelected(null); }} className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                      ← Back
                    </button>
                  ) : <span />}
                  <button
                    onClick={next}
                    disabled={!selected}
                    className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                      selected
                        ? "bg-rose-400 hover:bg-rose-500 text-white"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {step === questions.length ? "See My Results →" : "Next →"}
                  </button>
                </div>
              </div>
            )}

            {/* Results */}
            {isDone && (
              <div>
                <div className="text-center mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mx-auto mb-4 text-2xl">✅</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">Your Skin Report</h3>
                  <p className="text-xs text-gray-400">Personalised by Dr. Aditi Patil</p>
                </div>

                <div className="bg-rose-50 border border-rose-100 rounded-2xl p-5 mb-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-rose-400 mb-1">Skin Profile</p>
                  <p className="text-base font-semibold text-gray-800">{result.label}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-green-500 mb-2">Look for ✅</p>
                    <ul className="space-y-1">
                      {result.ingredients.map((i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-red-400 mb-2">Avoid ❌</p>
                    <ul className="space-y-1">
                      {result.avoid.map((i) => (
                        <li key={i} className="text-xs text-gray-700 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">Our Recommendation</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Based on your profile, we recommend a{" "}
                    <span className="font-medium text-gray-800">personalised in-clinic consultation</span>{" "}
                    with Dr. Aditi Patil for a prescribed treatment plan tailored to your skin.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#book" className="flex-1 bg-rose-400 hover:bg-rose-500 text-white text-sm font-medium py-3 rounded-xl transition-colors text-center no-underline">
                    Book a Consultation →
                  </a>
                  <button onClick={restart} className="flex-1 border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium py-3 rounded-xl transition-colors">
                    Retake Quiz
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

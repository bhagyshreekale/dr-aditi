"use client";
import { useEffect, useState } from "react";
const testimonials = [
  {
    quote:
      "Dr. Aditi is extremely caring and professional. My treatment was explained clearly.",
    name: "Priya Sharma",
    role: "Patient",
    image: "/images/testimonials/profile.png",
  },
  {
    quote:
      "Very positive experience. Dr. Aditi listens patiently and gives the best guidance.",
    name: "Rahul Patil",
    role: "Patient",
    image: "/images/testimonials/profile.png",
  },
  {
    quote: "I felt comfortable and confident throughout my treatment.",
    name: "Sneha Kulkarni",
    role: "Patient",
    image: "/images/testimonials/profile.png",
  },
];
export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* LEFT */}
        <div className="testimonial-left">
          <h2>What our patients say</h2>
          <p>Trusted care by Dr. Aditi with a patient-first approach.</p>

          <div className="progress">
            {testimonials.map((_, index) => (
              <span key={index} className={current === index ? "active" : ""} />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
    <div key={current} className="testimonial-card slide">

  {/* PROFILE IMAGE */}
  <img
    src={testimonials[current].image}
    alt={testimonials[current].name}
    className="testimonial-avatar"
  />

  {/* QUOTE */}
  <p className="testimonial-quote">
    “{testimonials[current].quote}”
  </p>

  {/* NAME */}
  <h4 className="testimonial-name">
    {testimonials[current].name}
  </h4>

  <span className="testimonial-role">
    {testimonials[current].role}
  </span>

</div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Container, Button } from "react-bootstrap";
import { useState } from "react";

const features = [
  {
    title: "State-of-the-Art Equipment",
    desc: "Advanced dermatology clinic with modern equipment and a dedicated operation theatre for procedures like hair transplant and dermatosurgery.",
  },
  {
    title: "For Women, By Women",
    desc: "A comfortable and safe environment designed especially for women, with personalized dermatology and aesthetic care.",
  },
  {
    title: "Certified Specialist",
    desc: "Treatment provided by a certified dermatologist with Fellowship in Lasers, Aesthetic Dermatology, and Dermatosurgery.",
  },
  {
    title: "Modern Cosmetic Dermatology",
    desc: "Equipped with the latest technology and modern devices for advanced cosmetic dermatology treatments.",
  },
];

export default function WhyChooseCollapse() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev === features.length - 1 ? 0 : prev + 1));

  const prev = () =>
    setActive((prev) => (prev === 0 ? features.length - 1 : prev - 1));

  return (
    <section className="collapse-section">
      <Container>
        {/* HEADER */}
          <span className="philosophy-label">WHY TO CHOOSE</span>
        <div className="header">
          
          <h2>
            We’re good. <span>Here’s why.</span>
          </h2>

          <div className="nav">
            <Button className="bg-secondary" onClick={prev}>
              ‹
            </Button>
            <Button className="bg-secondary" onClick={next}>
              ›
            </Button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="slider">
          {[0, 1].map((offset) => {
            const index = (active + offset) % features.length;
            const isActive = offset === 1;

            return (
              <div key={index} className={`slide ${isActive ? "active" : ""}`}>
                <h3>{features[index].title}</h3>
                <p>{features[index].desc}</p>
              </div>
            );
          })}
        </div>
      </Container>

      {/* STYLES */}
  <style jsx>{`
  .collapse-section {
    padding: 90px 0;
    background: #fff;
    font-family: var(--font-inter);
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
  }

  .header h2 {
    font-size: 3rem;
    font-weight: 400;
    font-family: var(--font-playfair);
    letter-spacing: -0.5px;
  }

  .header span {
    color: #9a9a9a;
    font-weight: 500;
    font-family: var(--font-playfair);
  }

  .nav {
    display: flex;
    gap: 12px;
  }

  .nav button {
    background: #e2725b;
    border: none;
    width: 52px;
    height: 52px;
    font-size: 22px;
    font-weight: 500;
    font-family: var(--font-inter);
  }

  .slider {
    display: flex;
    gap: 20px;
    overflow: hidden;
  }

  .slide {
    flex: 0 0 35%;
    padding: 40px;
    border-radius: 18px;
    background: #f5f5f5;
    transition: all 0.5s ease;
  }

  .slide h3 {
    font-size: 1.6rem;
    font-weight: 500;
    font-family: var(--font-playfair);
    letter-spacing: -0.3px;
    margin-bottom: 14px;
  }

  .slide p {
    color: #666;
    line-height: 1.7;
    font-size: 15px;
    font-weight: 400;
    font-family: var(--font-inter);
  }

  .slide.active {
    flex: 0 0 60%;
    background: #e2725b;
    color: #fff;
  }

  .slide.active h3 {
    font-weight: 500;
  }

  .slide.active p {
    color: #f3f3f3;
  }

  @media (max-width: 768px) {
    .slider {
      flex-direction: column;
    }

    .slide,
    .slide.active {
      flex: 1;
    }

    .header h2 {
      font-size: 2.2rem;
    }
  }
`}</style>
    </section>
  );
}

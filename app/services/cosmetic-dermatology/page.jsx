"use client";

import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function CosmeticDermatology() {
  const themeColor = "#747474"; // 🌸 MAIN WEBSITE COLOR

  const services = [
    {
      title: "Botox & Dermal Fillers",
      img: "/images/services/Botox-derma.webp",
      desc: "Non-surgical injectable treatments that relax dynamic wrinkles and restore facial volume for a smoother, youthful look.",
      highlights: [
        "15–30 min procedure",
        "No downtime",
        "Results in 3–5 days",
        "Lasts 4–6 months",
      ],
      points: [
        "Softens forehead lines, frown lines & crow’s feet",
        "Enhances lips, cheeks & jawline contour",
        "Reduces under-eye hollowness",
        "Prevents new wrinkle formation",
      ],
    },
    {
      title: "Chemical Peels",
    img: "/images/services/chemical-peel.webp",
      desc: "Dermatologist-grade exfoliation that removes dead skin layers, treats pigmentation and improves acne scars.",
      highlights: [
        "Brighter skin tone",
        "Controls acne",
        "Minimal downtime",
        "Safe for most skin types",
      ],
      points: [
        "Improves tanning & melasma",
        "Refines pores & texture",
        "Stimulates collagen production",
        "Boosts skincare absorption",
      ],
    },
    {
      title: "Skin Rejuvenation",
    img: "/images/services/skin-rejuvenation.webp",
      desc: "Advanced treatments like PRP, medi-facials and laser toning to hydrate, repair and renew damaged skin.",
      highlights: [
        "Deep hydration",
        "Collagen boost",
        "Instant glow",
        "Reduces dullness",
      ],
      points: [
        "Improves elasticity & firmness",
        "Restores natural radiance",
        "Reduces fine lines",
        "Improves skin texture",
      ],
    },
    {
      title: "Anti-aging Solutions",
      img: "/images/services/anti.webp",
      desc: "Customized anti-aging protocols combining injectables, peels and skin boosters for long-term youthful skin.",
      highlights: [
        "Skin tightening",
        "Wrinkle reduction",
        "Prevents aging signs",
        "Long-term results",
      ],
      points: [
        "Stimulates natural collagen",
        "Improves skin firmness",
        "Lifts sagging areas",
        "Maintains skin quality over time",
      ],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="service-hero text-center">
        <Container>
          <h1 className="hero-title">Cosmetic Dermatology</h1>
          <p className="hero-text">
            Advanced aesthetic dermatology treatments designed to enhance your
            natural beauty with safe, clinically proven procedures and visible
            long-lasting results.
          </p>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-5">
        <Container>
          {services.map((service, index) => (
            <Row
              key={index}
              className={`align-items-center mb-5 ${
                index % 2 !== 0 ? "flex-md-row-reverse" : ""
              }`}
            >
              <Col md={6}>
                <Image
                  src={service.img}
                  alt={service.title}
                  width={500}
                  height={350}
                  className="img-fluid rounded-4 shadow-sm"
                />
              </Col>

              <Col md={6}>
                <h3 className="fw-bold">{service.title}</h3>
                <p className="text-muted">{service.desc}</p>

                <div className="mb-3">
                  {service.highlights.map((item, i) => (
                    <Badge key={i} className="me-2 mb-2 bg-secondary highlight-badge">
                      {item}
                    </Badge>
                  ))}
                </div>

                <ul className="service-list">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p className="result-text">
                  <strong>Results:</strong> Visible improvement with progressive
                  collagen stimulation and natural-looking enhancement.
                </p>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* AFTERCARE */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">Post-Treatment Care</h2>
          <Row className="g-4 text-center">
            {[
              "Avoid sun exposure for 48 hours",
              "Use dermatologist-recommended sunscreen",
              "Follow prescribed skincare routine",
              "Stay hydrated for better healing",
            ].map((item, i) => (
              <Col md={3} key={i}>
                <Card className="border-0 shadow-sm p-3 aftercare-card">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <Container>
          <h2>Enhance Your Natural Beauty</h2>
          <p>
            Book your personalized cosmetic consultation today and achieve
            healthy, glowing, youthful skin.
          </p>
          <Link href="/appointment">
            <Button className="cta-btn">Book Appointment</Button>
          </Link>
        </Container>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .service-hero {
          padding: 90px 0 70px;
          background: linear-gradient(to right, #fff, ${themeColor}20);
        }

        .hero-title {
          font-size: 2.7rem;
          font-weight: 700;
          color: ${themeColor};
        }

        .hero-text {
          max-width: 650px;
          margin: 15px auto 0;
          color: #555;
        }

        .highlight-badge {
          background: ${themeColor}; !important
          padding: 8px 14px;
          font-weight: 500;
          border-radius: 20px;
        }

        .service-list {
          padding-left: 18px;
          color: #555;
        }

        .result-text {
          margin-top: 10px;
          color: #444;
        }

        .aftercare-card {
          border-radius: 12px;
          font-weight: 500;
        }

        .cta-section {
          padding: 70px 0;
          background: linear-gradient(to right, ${themeColor}, #f7b5d0);
          color: white;
        }

        .cta-btn {
          margin-top: 20px;
          background: white;
          color: ${themeColor};
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </main>
  );
}
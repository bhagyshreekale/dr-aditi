"use client";

import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function LaserTreatment() {
  const themeColor = "#9c9c9c";

  const treatments = [
    {
      title: "Laser Hair Removal",
      img: "/images/laser-hair.jpg",
      desc: "Long-term hair reduction using advanced diode laser technology for smooth, hair-free skin.",
      highlights: [
        "Permanent hair reduction",
        "Safe for all skin types",
        "No ingrown hair",
        "Quick sessions",
      ],
      points: [
        "Suitable for face & body",
        "Targets hair follicles safely",
        "Minimal discomfort",
        "Visible reduction in 4–6 sessions",
      ],
    },
    {
      title: "Laser Pigmentation Removal",
      img: "/images/laser-pigmentation.jpg",
      desc: "Targets melanin deposits to treat sun spots, melasma and uneven skin tone.",
      highlights: [
        "Even skin tone",
        "Reduces dark spots",
        "Improves clarity",
        "Non-invasive",
      ],
      points: [
        "Breaks down excess pigment",
        "Boosts skin brightness",
        "Safe & precise technology",
        "Gradual natural results",
      ],
    },
    {
      title: "Laser Acne & Scar Treatment",
      img: "/images/laser-acne.jpg",
      desc: "Fractional laser therapy that reduces acne scars, open pores and active acne.",
      highlights: [
        "Scar reduction",
        "Smooth texture",
        "Collagen boost",
        "Pore tightening",
      ],
      points: [
        "Stimulates skin remodeling",
        "Reduces deep acne scars",
        "Controls oil production",
        "Improves skin surface",
      ],
    },
    {
      title: "Laser Skin Rejuvenation",
      img: "/images/laser-rejuvenation.jpg",
      desc: "Laser toning treatment to enhance glow, tighten skin and reduce early aging signs.",
      highlights: [
        "Instant glow",
        "Skin tightening",
        "Fine line reduction",
        "No downtime",
      ],
      points: [
        "Boosts collagen production",
        "Improves skin elasticity",
        "Refines pores",
        "Enhances radiance",
      ],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="service-hero text-center">
        <Container>
          <h1 className="hero-title">Laser Treatments</h1>
          <p className="hero-text">
            Advanced medical laser technologies for permanent hair reduction,
            pigmentation removal, acne scars and skin rejuvenation with safe
            and effective results.
          </p>
        </Container>
      </section>

      {/* TREATMENTS */}
      <section className="py-5">
        <Container>
          {treatments.map((item, index) => (
            <Row
              key={index}
              className={`align-items-center mb-5 ${
                index % 2 !== 0 ? "flex-md-row-reverse" : ""
              }`}
            >
              <Col md={6}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={500}
                  height={350}
                  className="img-fluid rounded-4 shadow-sm"
                />
              </Col>

              <Col md={6}>
                <h3 className="fw-bold">{item.title}</h3>
                <p className="text-muted">{item.desc}</p>

                <div className="mb-3">
                  {item.highlights.map((h, i) => (
                    <span key={i} className="highlight-badge me-2 mb-2">
                      {h}
                    </span>
                  ))}
                </div>

                <ul className="service-list">
                  {item.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>

                <p className="result-text">
                  <strong>Sessions Required:</strong> Typically 4–8 sessions for
                  optimal results depending on the condition and skin type.
                </p>
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Why Choose Laser Treatments?
          </h2>
          <Row className="g-4 text-center">
            {[
              "Safe & FDA-approved technology",
              "Minimal discomfort",
              "No surgical procedure",
              "Quick recovery time",
              "Suitable for face & body",
              "Long-lasting results",
            ].map((b, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm p-3 benefit-card">
                  {b}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* AFTERCARE */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">Post-Laser Care</h2>
          <Row className="g-4 text-center">
            {[
              "Avoid sun exposure for 48 hours",
              "Use broad-spectrum sunscreen",
              "Do not apply harsh skincare",
              "Keep skin moisturized",
            ].map((a, i) => (
              <Col md={3} key={i}>
                <Card className="border-0 shadow-sm p-3 aftercare-card">
                  {a}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section text-center">
        <Container>
          <h2>Get Smooth, Clear & Radiant Skin</h2>
          <p>
            Book your laser consultation today and start your journey towards
            flawless skin with advanced dermatology care.
          </p>
          <Link href="/appointment">
            <Button className="cta-btn">Book Appointment</Button>
          </Link>
        </Container>
      </section>

      {/* STYLES */}
      <style jsx global>{`
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
          background-color: ${themeColor};
          color: #fff;
          padding: 8px 14px;
          font-weight: 500;
          border-radius: 20px;
          display: inline-block;
        }

        .service-list {
          padding-left: 18px;
          color: #555;
        }

        .benefit-card,
        .aftercare-card {
          border-radius: 12px;
          font-weight: 500;
        }

        .result-text {
          margin-top: 10px;
          color: #444;
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
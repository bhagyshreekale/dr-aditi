"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function SurgicalDermatology() {
  const themeColor = "#6e6e6e";

  const procedures = [
    {
      title: "Mole & Wart Removal",
      img: "/images/mole-removal.jpg",
      desc: "Safe removal of moles, warts and skin tags using radiofrequency, cautery or excision.",
      points: [
        "Quick OPD procedure",
        "Minimal bleeding",
        "Little to no scar",
        "Same-day discharge",
      ],
    },
    {
      title: "Skin Biopsy",
      img: "/images/skin-biopsy.jpg",
      desc: "Diagnostic procedure to evaluate suspicious skin lesions, rashes or growths.",
      points: [
        "Performed under local anesthesia",
        "Accurate diagnosis",
        "Minimal discomfort",
        "Essential for chronic skin diseases",
      ],
    },
    {
      title: "Cyst & Lipoma Removal",
      img: "/images/lipoma.jpg",
      desc: "Minor surgical excision of benign cysts and lipomas with proper closure techniques.",
      points: [
        "Complete removal of lesion",
        "Low recurrence rate",
        "Cosmetic suturing",
        "Fast healing",
      ],
    },
    {
      title: "Nail Surgery",
      img: "/images/nail-surgery.jpg",
      desc: "Treatment for ingrown nails, nail infections and nail deformities.",
      points: [
        "Pain relief from ingrown nail",
        "Permanent correction option",
        "Prevents infection spread",
        "Quick recovery",
      ],
    },
    {
      title: "Keloid & Scar Revision",
      img: "/images/keloid.jpg",
      desc: "Combination of surgical removal with injections or laser for raised scars and keloids.",
      points: [
        "Reduces scar thickness",
        "Improves appearance",
        "Prevents recurrence",
        "Enhances skin texture",
      ],
    },
    {
      title: "Vitiligo Surgery (Grafting)",
      img: "/images/vitiligo-surgery.jpg",
      desc: "Advanced grafting techniques for stable vitiligo patches to restore pigmentation.",
      points: [
        "For stable vitiligo only",
        "Natural color match",
        "Long-lasting results",
        "Performed by specialist",
      ],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="service-hero text-center">
        <Container>
          <h1 className="hero-title">Surgical Dermatology</h1>
          <p className="hero-text">
            Advanced minor skin surgeries performed with precision, sterile
            techniques and cosmetic closure for safe and effective outcomes.
          </p>
        </Container>
      </section>

      {/* PROCEDURES GRID */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {procedures.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm h-100 procedure-card">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="img-fluid rounded-top-4"
                  />
                  <Card.Body>
                    <h5 className="fw-bold">{item.title}</h5>
                    <p className="text-muted">{item.desc}</p>
                    <ul className="service-list">
                      {item.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* SAFETY SECTION */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Safety & Surgical Care
          </h2>
          <Row className="g-4 text-center">
            {[
              "Sterile minor OT setup",
              "Local anesthesia procedures",
              "Minimal pain & bleeding",
              "Cosmetic suturing techniques",
              "Post-procedure dressing care",
              "Regular follow-up for healing",
            ].map((item, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm p-3 safety-card">
                  {item}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* RECOVERY */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Recovery & Aftercare
          </h2>
          <Row className="g-4 text-center">
            {[
              "Same-day discharge",
              "Minimal downtime",
              "Simple wound care at home",
              "Suture removal in 5–7 days",
              "Scar care for best cosmetic result",
              "Quick return to daily activities",
            ].map((item, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm p-3 recovery-card">
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
          <h2>Safe & Scar-Minimized Skin Procedures</h2>
          <p>
            Consult our dermatologist for expert surgical removal of skin
            growths and cosmetic skin corrections.
          </p>
          <Link href="/appointment">
            <Button className="cta-btn">Book Surgical Consultation</Button>
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

        .service-list {
          padding-left: 18px;
          color: #555;
        }

        .procedure-card,
        .safety-card,
        .recovery-card {
          border-radius: 14px;
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
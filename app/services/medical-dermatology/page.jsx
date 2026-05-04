"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function MedicalDermatology() {
  const themeColor = "#767676";

  const conditions = [
    {
      title: "Acne & Acne Scars",
      img: "/images/acne.jpg",
      desc: "Advanced treatment plans including medical therapy, peels and laser for active acne and scars.",
      points: [
        "Controls oil production",
        "Reduces inflammation",
        "Prevents future breakouts",
        "Minimizes acne marks",
      ],
    },
    {
      title: "Eczema & Dermatitis",
      img: "/images/eczema.jpg",
      desc: "Management of itchy, inflamed skin using medical creams, lifestyle guidance and trigger control.",
      points: [
        "Reduces redness & itching",
        "Restores skin barrier",
        "Prevents flare-ups",
        "Long-term skin care plan",
      ],
    },
    {
      title: "Psoriasis Treatment",
      img: "/images/psoriasis.jpg",
      desc: "Customized therapy including topical, oral and phototherapy options for chronic psoriasis.",
      points: [
        "Controls scaling & plaques",
        "Reduces inflammation",
        "Improves skin comfort",
        "Long-term disease control",
      ],
    },
    {
      title: "Fungal Infections",
      img: "/images/fungal.jpg",
      desc: "Effective treatment for ringworm, dandruff, nail fungus and other recurrent fungal infections.",
      points: [
        "Eliminates infection source",
        "Prevents recurrence",
        "Treats scalp & body",
        "Improves skin hygiene",
      ],
    },
    {
      title: "Hair Loss (Alopecia)",
      img: "/images/hair-loss.jpg",
      desc: "Diagnosis and treatment of hair fall using medical therapy, PRP and nutritional correction.",
      points: [
        "Reduces hair fall",
        "Stimulates hair growth",
        "Strengthens hair roots",
        "Improves hair density",
      ],
    },
    {
      title: "Vitiligo Management",
      img: "/images/vitiligo.jpg",
      desc: "Early diagnosis and treatment to stabilize vitiligo and promote repigmentation.",
      points: [
        "Stops progression",
        "Stimulates pigment cells",
        "Improves skin appearance",
        "Phototherapy options available",
      ],
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="service-hero text-center">
        <Container>
          <h1 className="hero-title">Medical Dermatology</h1>
          <p className="hero-text">
            Comprehensive diagnosis and treatment of skin, hair and nail
            disorders using evidence-based medical dermatology and advanced
            therapies.
          </p>
        </Container>
      </section>

      {/* CONDITIONS GRID */}
      <section className="py-5">
        <Container>
          <Row className="g-4">
            {conditions.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <Card className="border-0 shadow-sm h-100 condition-card">
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

      {/* TREATMENT APPROACH */}
      <section className="bg-light py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            Our Treatment Approach
          </h2>
          <Row className="g-4 text-center">
            {[
              "Detailed skin, hair & nail examination",
              "Accurate diagnosis with dermoscopy",
              "Personalized medical treatment plan",
              "Lifestyle & diet guidance",
              "Follow-up for long-term control",
              "Advanced therapies when needed",
            ].map((step, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm p-3 approach-card">
                  {step}
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* WHEN TO SEE A DERMATOLOGIST */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold text-center mb-4">
            When Should You See a Dermatologist?
          </h2>
          <Row className="g-4 text-center">
            {[
              "Persistent acne or pimples",
              "Severe itching or rashes",
              "Hair fall or bald patches",
              "Skin infections not healing",
              "White or dark skin patches",
              "Chronic dandruff or scalp issues",
            ].map((item, i) => (
              <Col md={4} key={i}>
                <Card className="border-0 shadow-sm p-3 warning-card">
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
          <h2>Healthy Skin Starts with Expert Care</h2>
          <p>
            Book a consultation for accurate diagnosis and effective medical
            dermatology treatment tailored to your condition.
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

        .service-list {
          padding-left: 18px;
          color: #555;
        }

        .condition-card,
        .approach-card,
        .warning-card {
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
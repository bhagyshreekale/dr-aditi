"use client";

import { Container, Row, Col } from "react-bootstrap";
import { useRef, useEffect, useState } from "react";

function ScrollCount({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / windowHeight, 0),
        1
      );

      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * end));
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [end]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustStats() {
  return (
    <section className="trust-section">
      <Container>
        <p className="trust-subtitle">BUILD TRUST WITH YOUR PATIENTS</p>

        <Row className="g-4 text-center">
          <Col md={4}>
            <div className="stat-card">
              <h2 className="gradient-text">
                <ScrollCount end={45} suffix="%" />
              </h2>
              <p>Improved Skin Outcomes</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card highlight">
              <h2 className="gradient-text">
                <ScrollCount end={15500} suffix="+" />
              </h2>
              <p>Happy Patients</p>
            </div>
          </Col>

          <Col md={4}>
            <div className="stat-card">
              <h2 className="gradient-text">
                <ScrollCount end={20} suffix="+" />
              </h2>
              <p>Advanced Treatments</p>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .trust-section {
          padding: 120px 0;
          background: linear-gradient(to bottom, #ffffff, #fafafa);
        }

        .trust-subtitle {
          text-align: center;
          font-size: 13px;
          letter-spacing: 3px;
          color: #e2725b;
          margin-bottom: 70px;
          font-weight: 700;
        }

        .stat-card {
          padding: 40px 25px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .stat-card.highlight {
          background: linear-gradient(135deg, #fff0f0, #ffffff);
          border: 1px solid rgba(193, 18, 31, 0.2);
        }

        .stat-card h2 {
          font-size: 56px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .stat-card p {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .gradient-text {
          background: linear-gradient(90deg, #e2725b, #e2725b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 768px) {
          .stat-card h2 {
            font-size: 42px;
          }
        }
      `}</style>
    </section>
  );
}
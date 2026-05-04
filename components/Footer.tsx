"use client";

import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ThemeContext } from "@/context/ThemeContext";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const { dark } = useContext(ThemeContext);

  return (
    <footer className={`footer ${dark ? "dark" : "light"}`}>
      <Container>
        <Row className="footer-row">
          {/* ABOUT */}
          <Col xl={4} lg={4} md={6}>
            <h5 className="footer-title">DermaSuite</h5>

            <p className="footer-text">
              Advanced dermatology clinic for skin, hair & aesthetic treatments
              using modern technology and personalized care.
            </p>

            <div className="footer-contact">
              <a href="tel:+918799505624">
                <FaPhoneAlt /> +91 8799505624
              </a>

              <a href="mailto:draditipatil@outlook.com">
                <FaEnvelope />
                draditipatil@outlook.com
              </a>

              <a href="https://maps.google.com" target="_blank">
                <FaMapMarkerAlt /> Office No. 4, Dharmaraj Plaza, Old Gangapur
                Naka, Beside Adgonkar Gold, Nashik – 422005.
              </a>
            </div>
          </Col>

          {/* QUICK LINKS */}
          <Col xl={3} lg={4} md={6}>
            <h5 className="footer-title">Quick Links</h5>

            <ul className="footer-links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </Col>

          {/* MAP */}
          <Col xl={5} lg={4} md={12}>
            <Card className="map-card border-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d59992.26468539066!2d73.75955284999999!3d19.986824050000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bddeb988dcdaa37%3A0x500baa900951544e!2sDharmaraj%20Plaza%2C%20Yashwant%20Colony%2C%20Nashik%2C%20Maharashtra%20422005!3m2!1d20.0074655!2d73.7701697!5e0!3m2!1sen!2sin!4v1772004337923!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </Card>
          </Col>
        </Row>

  {/* BOTTOM */}
<div className="footer-bottom">
  <div>
    © {new Date().getFullYear()} DermaSuite • All Rights Reserved
  </div>
  <div style={{ fontSize: '0.9rem', marginTop: '5px', opacity: 0.8 }}>
    Developed by <a href="https://blendigitals.com/" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}>Blen Digital</a>
  </div>
</div>
      </Container>

      <style jsx>{`
        .footer {
          padding: 90px 0 30px;
        }

        .light {
          background: #f9f6f5;
          color: #333;
        }

        .dark {
          background: #0f0f0f;
          color: #eee;
        }

        .footer-row {
          row-gap: 50px;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 25px;
          position: relative;
          font-family: var(--font-playfair);
        }

        .footer-title::after {
          content: "";
          width: 45px;
          height: 3px;
          background: #f28b8b;
          position: absolute;
          bottom: -10px;
          left: 0;
          font-family: var(--font-playfair);
        }

        .footer-text {
          line-height: 1.8;
          font-size: 0.95rem;
          margin-bottom: 25px;
          font-family: var(--font-playfair);
        }

        .footer-contact a {
          display: flex;
          gap: 12px;
          margin-bottom: 14px;
          text-decoration: none;
          color: inherit;
          transition: 0.3s;
          font-size: 0.95rem;
          font-family: var(--font-playfair);
        }

        .footer-contact a:hover {
          color: #f28b8b;
          transform: translateX(6px);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 14px;
          font-family: var(--font-playfair);
        }

        .footer-links a {
          text-decoration: none;
          color: inherit;
          position: relative;
          transition: 0.3s;
          font-family: var(--font-playfair);
        }

        .footer-links a::after {
          content: "";
          width: 0;
          height: 2px;
          background: #f28b8b;
          position: absolute;
          left: 0;
          bottom: -5px;
          transition: 0.3s;
          font-family: var(--font-playfair);
        }

        .footer-links a:hover {
          color: #f28b8b;
        }

        .footer-links a:hover::after {
          width: 100%;
        }

        .map-card {
          border-radius: 18px;
          overflow: hidden;
          background: ${dark ? "#1a1a1a" : "#fff"};
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          height: 100%;
        }

        .map-card iframe {
          width: 100%;
          height: 100%;
          min-height: 260px;
          border: 0;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 60px;
          padding-top: 25px;
          font-size: 0.85rem;
          font-family: var(--font-playfair);
          border-top: 1px solid
            ${dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"};
        }

        /* 📱 MOBILE */
        @media (max-width: 767px) {
          .footer {
            padding: 70px 0 25px;
            text-align: center;
          }

          .footer-title::after {
            left: 50%;
            transform: translateX(-50%);
          }

          .footer-contact a {
            justify-content: center;
          }

          .map-card iframe {
            min-height: 220px;
          }
        }
      `}</style>
    </footer>
  );
}

"use client";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import { Form } from "react-bootstrap";
import FAQSection from '@/components/FAQSection'
export default function Contact() {
  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero text-center">
        <Container>
          <h1 className="hero-title">Contact Derma Suite</h1>
          <p className="hero-text">
            Book consultations, ask questions, or visit our clinic for advanced
            dermatology & aesthetic treatments.
          </p>
        </Container>
      </section>

      {/* CONTACT CARDS */}
      <section className="contact-section">
        <Container>
          <Row className="g-4">
            <Col md={4}>
              <Card className="contact-card h-100 text-center">
                <Card.Body>
                  <div className="icon-circle">
                    <FaMapMarkerAlt />
                  </div>
                  <h5>Visit Us</h5>
                  <p>
                    Office No. 4, Dharmaraj Plaza, Old Gangapur Naka, Beside
                    Adgonkar Gold, Nashik – 422005
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="contact-card h-100 text-center">
                <Card.Body>
                  <div className="icon-circle">
                    <FaPhoneAlt />
                  </div>
                  <h5>Call Us</h5>
                  <p>
                    <Link
                      href="tel:+918799505624"
                      className="contact-phone"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      +91 8799505624
                    </Link>
                  </p>
                  <small>Mon – Sat | 10 AM – 7 PM</small>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="contact-card h-100 text-center">
                <Card.Body>
                  <div className="icon-circle">
                    <FaPhoneAlt />
                  </div>
                  <h5>Email</h5>
                  <p>
                    <Link
                      href="mailto:draditipatil@outlook.com "
                      className="contact-email"
                style={{ textDecoration: "none", color: "black" }}
                    >
                  draditipatil@outlook.com
                    </Link>
                  </p>
                  <small>We reply within 24 hours</small>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </section>
      {/* FORM + MAP */}
      <section className="form-map-section">
        <Container>
          <Row className="g-4 align-items-stretch">
            {/* FORM - COL 6 */}
            <Col lg={6}>
              <Card className="form-card h-100">
                <Card.Body>
                  <h3 className="mb-4">Send Us a Message</h3>

                  <Form>
                    <Row className="g-3">
                      <Col md={12}>
                        <Form.Group controlId="name">
                          <Form.Control
                            type="text"
                            placeholder="Full Name"
                            required
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="phone">
                          <Form.Control
                            type="tel"
                            placeholder="Phone Number"
                            required
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group controlId="email">
                          <Form.Control
                            type="email"
                            placeholder="Email Address"
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Form.Group controlId="message">
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Your Message"
                            className="custom-input"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={12}>
                        <Button
                          className="form-btn w-100 bg-light text-secondary"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* MAP - COL 6 */}
            <Col lg={6}>
              <div className="map-wrapper h-100">
                <iframe
                  src="https://www.google.com/maps?q=NextGen%20Advanced%20Cosmetic%20and%20Dermatology%20Clinic%20Nashik&output=embed"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="clinic-section">
  <Container>
    <h3 className="text-center mb-5">Our Clinic Locations</h3>

    <Row className="g-4">
      
      {/* Clinic 1 */}
      <Col md={4}>
        <Card className="clinic-card h-100 text-center">
          <Card.Body>
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>

            <h5>NextGen Advanced Cosmetic and Dermatology Clinic</h5>

            <p>
              AB Towers, Dnyandeep Housing Society,<br/>
              Old Gangapur Naka,<br/>
              Gangapur Road,<br/>
              Nashik – 422005
            </p>
          </Card.Body>
        </Card>
      </Col>

      {/* Clinic 2 */}
      <Col md={4}>
        <Card className="clinic-card h-100 text-center">
          <Card.Body>
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>

            <h5>The Smiling Skin</h5>
            <small>(Available on prior appointment)</small>

            <p className="mt-2">
              Shop No 12, 1–2 Rashmi Arcade,<br/>
              Jogging Track Road,<br/>
              Near Indiranagar,<br/>
              Sai Nath Nagar,<br/>
              Nashik
            </p>
          </Card.Body>
        </Card>
      </Col>

      {/* Clinic 3 */}
      <Col md={4}>
        <Card className="clinic-card h-100 text-center">
          <Card.Body>
            <div className="icon-circle">
              <FaMapMarkerAlt />
            </div>

            <h5>Vardhaman Polyclinic</h5>
            <small>(Available on prior appointment)</small>

            <p className="mt-2">
              AB Towers, Dnyandeep Housing Society,<br/>
              Old Gangapur Naka,<br/>
              Gangapur Road,<br/>
              Nashik – 422005
            </p>
          </Card.Body>
        </Card>
      </Col>

    </Row>
  </Container>
</section>

      {/* CTA */}

      <section className="cta-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
       <Col lg={7} className="text-start">
  <span className="cta-subtitle">ONLINE CONSULTATION</span>

  <h2 className="cta-title">
    Book an Online Appointment <br /> or Video Consultation
  </h2>

  <p className="cta-text">
    Connect with our dermatology experts from the comfort of your home. 
    Book an online appointment or schedule a video consultation to discuss 
    your skin, hair, or aesthetic concerns. Get professional advice, 
    personalized treatment guidance, and expert care without visiting the clinic.
  </p>
</Col>

            {/* RIGHT BUTTON */}
            <Col lg={5} className="text-lg-end text-start mt-4 mt-lg-0">
              <button className="cta-btn">REQUEST CONSULTATION</button>
            </Col>
          </Row>
        </Container>
        
      </section>
<FAQSection/>


      {/* STYLES */}
      <style jsx>{`
        .contact-page {
          background: #fafafa;
        }

        /* HERO */
        .contact-hero {
          padding: 110px 0 70px;
          background: linear-gradient(135deg, #fdeaea, #ffffff);
        }

        .hero-title {
          font-size: 2.7rem;
          font-weight: 700;
          color: #222;
        }

        .hero-text {
          max-width: 650px;
          margin: 15px auto 0;
          color: #666;
        }

        /* CONTACT CARDS */
        .contact-section {
          padding: 60px 0;
        }

        .contact-card {
          border-radius: 18px;
          padding: 30px 20px;
          border: none;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .contact-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
        }
        .contact-card a {
          color: #f28b8b !important;
          text-decoration: none !important;
          font-weight: 500;
        }

        .contact-card a:hover {
          color: #e96d6d !important;
          text-decoration: none !important;
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          margin: 0 auto 15px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f28b8b, #f7b5b5);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
        }

        .contact-card a {
          color: #f28b8b;
          text-decoration: none;
          font-weight: 500;
        }
        .form-map-section {
          padding: 40px 0 80px;
        }

        .form-card {
          border-radius: 18px;
          border: none;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          padding: 10px;
        }

        .custom-input {
          border-radius: 10px;
          border: 1px solid #eee;
          padding: 12px 14px;
          font-size: 0.95rem;
        }

        .custom-input:focus {
          border-color: #f28b8b;
          box-shadow: 0 0 0 0.15rem rgba(242, 139, 139, 0.25);
        }

        .form-btn {
          background: linear-gradient(135deg, #f28b8b, #f7b5b5);
          border: none;
          padding: 12px;
          border-radius: 10px;
          font-weight: 600;
        }

        .form-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(242, 139, 139, 0.35);
        }

        .map-wrapper {
          width: 100%;
          height: 100%;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          min-height: 420px;
          border: 0;
        }

        @media (max-width: 991px) {
          .map-wrapper iframe {
            min-height: 320px;
          }
        }
        /* CTA */
        .cta-section {
          padding: 80px 0;
          background: linear-gradient(135deg, #f28b8b, #f7b5b5);
          color: white;
        }

        .cta-btn {
          margin-top: 20px;
          background: white;
          color: #f28b8b;
          border: none;
          padding: 14px 32px;
          border-radius: 10px;
          font-weight: 600;
          transition: 0.3s ease;
        }

        .cta-btn:hover {
          background: #ffe5e5;
          transform: translateY(-2px);
        }

        .clinic-section{
padding:70px 0;
background:#fff;
}

.clinic-card{
border-radius:18px;
border:none;
background:rgba(255,255,255,0.7);
backdrop-filter:blur(10px);
box-shadow:0 15px 35px rgba(0,0,0,0.08);
padding:25px;
transition:0.3s;
}

.clinic-card:hover{
transform:translateY(-6px);
box-shadow:0 20px 40px rgba(0,0,0,0.12);
}

        /* MOBILE */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.1rem;
          }

          .map-wrapper {
            height: 320px;
          }

          .contact-card {
            padding: 25px 18px;
          }
        }
      `}</style>
    </main>
  );
}

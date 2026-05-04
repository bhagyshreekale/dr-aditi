import { Container, Row, Col } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import FuturePlans from '@/components/FuturePlans'
export default function About() {
  return (
    <section className="about-page py-5">
      {/* ABOUT PREVIEW */}
      <section className="about-section py-5">
        <Container>
          <Row className="align-items-center g-5">
            {/* LEFT CONTENT */}
            <Col lg={6}>
              <span className="about-subtitle">ABOUT US</span>

              <h5 className="about-title">Meet Our Dermatology Expert</h5>

              <p className="about-text">
                <strong>Dr. Aditi Patil</strong> is a qualified dermatologist
                with special interest and expertise in cosmetic dermatology
                including skin, hair and nail treatments. She focuses on
                providing safe, personalised and evidence-based dermatological
                care using modern technology and advanced treatment methods.
              </p>

              <p className="about-text">
                Dr. Aditi Patil completed her{" "}
                <strong>
                  MBBS from Bharati Vidyapeeth Medical College & Hospital,
                  Sangli
                </strong>{" "}
                and her
                <strong>
                  {" "}
                  Diploma in Dermatology & Venereology from Asia Institute of
                  Hair Transplant, Pune
                </strong>
                . She also holds a
                <strong>
                  {" "}
                  Fellowship in Lasers, Aesthetic Dermatology & Dermatosurgery
                </strong>{" "}
                from Shivani Skin Care & Cosmetic Clinic, Surat.
              </p>

              <p className="about-text">
                She is a registered member of the
                <strong>
                  {" "}
                  Indian Association of Dermatology, Venereology & Leprosy
                  (IADVL)
                </strong>{" "}
                and a lifetime member of the
                <strong> Nashik Dermatology Association</strong>, and is
                registered with the <strong>Maharashtra Medical Council</strong>
                . She has also completed the{" "}
                <strong>HIV-ART Induction Course approved by NACO</strong>.
              </p>
            </Col>

            {/* RIGHT IMAGE */}
            <Col lg={6}>
              <div className="about-img-bg">
                <div className="about-img-wrapper">
                  <img
                    src="/images/gallery/gallery6.png"
                    alt="Dr Aditi Patil"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* OUR JOURNEY SECTION */}
      <section className="journey-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col>
              <span className="journey-subtitle">OUR JOURNEY</span>
              <h2 className="journey-title">
                Commitment to Excellence in Dermatology
              </h2>
              <p className="journey-desc">
                Our clinic blends science, aesthetics, and personalised care to
                deliver natural and long-lasting skin & hair results.
              </p>
            </Col>
          </Row>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5>Expert Medical Foundation</h5>
                <p>
                  Strong academic background with MBBS & DDVL and advanced
                  training in laser and dermatosurgery.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5>Modern Technology</h5>
                <p>
                  Use of US-FDA approved devices and evidence-based
                  dermatological treatments.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5>Personalised Care</h5>
                <p>
                  Every treatment plan is customised according to individual
                  skin type and concern.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h5>Natural & Long-Lasting Results</h5>
                <p>
                  Focused on enhancing your natural beauty while maintaining
                  skin health and safety.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT IMAGE + FLOATING BOX */}
          <Col lg={6}>
            <div className="about-image-wrapper">
              <img
                src="/images/services/about.jpg"
                alt="Skin Treatment"
                className="about-main-img"
              />

              {/* FLOATING FEATURE BOX */}
              <div className="about-feature-box">
                <div className="feature-item">
                  <CheckCircleFill className="feature-icon" />
                  <div>
                    <h6>Acne & Scar Treatment</h6>
                    <p>Advanced dermatological care with lasers & peels.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <CheckCircleFill className="feature-icon" />
                  <div>
                    <h6>Hair Loss Solutions</h6>
                    <p>PRP therapy and medical scalp treatments.</p>
                  </div>
                </div>

                <div className="feature-item">
                  <CheckCircleFill className="feature-icon" />
                  <div>
                    <h6>Anti-Aging Procedures</h6>
                    <p>Botox, fillers & skin rejuvenation.</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* RIGHT CONTENT */}
          <Col lg={6}>
            <span className="about-label">WHAT WE DO</span>

            <h2 className="about-heading">
              We’re Experienced in Making You Look Beautiful
            </h2>

            <p className="about-desc">
              Dr. Aditi Patil is a Consultant Dermatologist with MBBS & DDVL and
              a fellowship in Laser, Aesthetics & Dermatosurgery. She provides
              evidence-based skin, hair, and anti-aging treatments using US-FDA
              approved technologies.
            </p>

            <button className="about-cta-btn">BOOK APPOINTMENT</button>
          </Col>
        </Row>
      </Container>
      <FuturePlans/>
    </section>
  );
}

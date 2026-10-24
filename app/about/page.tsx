import { Container, Row, Col } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import FuturePlans from '@/components/FuturePlans'
import { buildOpenGraph } from "../seo-config";

export const metadata = {
  title: "About Dr. Aditi Patil — Best Dermatologist in Nashik",
  description:
    "Meet Dr. Aditi Patil, the best dermatologist and skin specialist in Nashik. Expert in cosmetic dermatology, hair transplant, laser treatments and skin care at Derma Suite Clinic.",
  keywords: [
    "about Dr Aditi Patil",
    "best dermatologist in Nashik",
    "skin specialist Nashik",
    "cosmetic dermatologist Nashik",
    "Dr. Aditi Patil qualifications",
    "Derma Suite doctor",
  ],
  alternates: { canonical: "/about" },
  openGraph: buildOpenGraph({
    title: "About Dr. Aditi Patil — Best Dermatologist in Nashik",
    description:
      "Meet Dr. Aditi Patil, the best dermatologist and skin specialist in Nashik. Expert in cosmetic dermatology, hair transplant, laser treatments and skin care.",
    path: "/about",
  }),
};

export default function About() {
  return (
    <section className="about-page py-5" style={{ minHeight: "100vh" }}>
      {/* ABOUT PREVIEW */}
      <section className="about-section py-5" style={{ minHeight: "600px" }}>
        <Container>
          <Row className="align-items-center g-5">
            {/* LEFT CONTENT */}
            <Col lg={6}>
              <span className="about-subtitle">ABOUT US</span>

              <h5 className="about-title">Meet the Best Skin Specialist in Nashik</h5>

              <p className="about-text">
                <strong>Dr. Aditi Patil</strong> is a leading dermatologist in
                Nashik with special interest and expertise in cosmetic
                dermatology including skin, hair and nail treatments. She
                focuses on providing safe, personalised and evidence-based
                dermatological care using modern technology and advanced
                treatment methods.
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
                <div className="about-img-wrapper" style={{ minHeight: "400px" }}>
                  <img
                    src="/images/gallery/gallery6.webp"
                    alt="Dr Aditi Patil"
                    width="600"
                    height="700"
                    style={{ width: "100%", height: "auto", display: "block" }}
                    loading="eager"
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
            <div className="about-image-wrapper" style={{ minHeight: "400px" }}>
              <img
                src="/images/services/about.webp"
                alt="Skin Treatment"
                className="about-main-img"
                width="600"
                height="700"
                style={{ width: "100%", height: "auto", display: "block" }}
                loading="eager"
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
              Nashik&apos;s Trusted Dermatologist for Skin, Hair & Beauty
            </h2>

            <p className="about-desc">
              Dr. Aditi Patil is a Consultant Dermatologist in Nashik with MBBS
              & DDVL and a fellowship in Laser, Aesthetics & Dermatosurgery. She
              provides evidence-based skin, hair, and anti-aging treatments
              using US-FDA approved technologies at Derma Suite, the best skin
              clinic in Nashik.
            </p>

            <button className="about-cta-btn">BOOK APPOINTMENT</button>
          </Col>
        </Row>
      </Container>
      <FuturePlans/>
    </section>
  );
}

"use client";

import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Link from "next/link";
import TestimonialSlider from "@/components/TestimonialSlider";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustStats from "@/components/TrustStats";
import FeedbackForm from "../components/FeedbackForm";
import BeforeAfterGallery from '@/components/BeforeAfterGallery'
import SkinSchool from '@/components/SkinSchool'
import TrendsSection from '@/components/TrendsSection'
export default function Home() {
  const services = [
    {
      title: "Cosmetic Dermatology",
      description:
        "Advanced aesthetic treatments including Botox, fillers, and anti-aging solutions.",
      image: "/images/services/cosmeticderma.jpg",
      link: "/services/cosmetic-dermatology",
    },
    {
      title: "Laser Treatment",
      description:
        "Safe and effective laser procedures for pigmentation, scars, and hair removal.",
      image: "/images/services/laser.jpg",
      link: "/services/laser-treatment",
    },
    {
      title: "Hair Loss Treatment",
      description:
        "PRP therapy and medical treatments for hair thinning and baldness.",
      image: "/images/services/hair-loss.jpg",
      link: "/services/hair-loss-treatment",
    },
    {
      title: "Acne & Scar Treatment",
      description: "Customized acne solutions with scar reduction treatments.",
      image: "/images/services/acne-scar.jpg",
      link: "/services/medical-dermatology",
    },
    {
      title: "Skin Rejuvenation",
      description:
        "Glow-enhancing therapies to restore youthful and healthy skin.",
      image: "/images/services/skin-rejuvenation.jpg",
      link: "/services/surgical-dermatology",
    },
    {
      title: "Chemical Peels",
      description:
        "Medical-grade peels to improve texture, tone, and pigmentation.",
      image: "/images/services/chemical-peel.jpg",
      link: "/services/cosmetic-dermatology",
    },
  ];
  return (
    <main>
      {/* HERO SECTION */}
<section className="funnel-hero animated-hero">
      <div className="hero-container">
        <div className="funnel-content-left">
          
<h1 className="hero-title">
  Healthy Skin Starts Here
  <br />
  Expert Dermatology Care
</h1>

<p className="hero-subtitle">
  <b>Derma Suite</b> offers advanced treatments for skin, hair, and cosmetic concerns with modern technology and expert care.
</p>

        </div>
      </div>
    </section>

      {/* SERVICES */}
      <section className="py-5 services-section">
        <Container>
          <h2 className="services-heading text-center mb-5">Our Services</h2>

          <Row className="g-4">
            {services.map((service, index) => (
              <Col lg={6} key={index}>
                <div className="service-horizontal-card h-100">
                  <Row className="g-0 align-items-center h-100">
                    {/* IMAGE LEFT */}
                    <Col md={5}>
                      <div className="service-image">
                        <img src={service.image} alt={service.title} />
                      </div>
                    </Col>

                    {/* CONTENT RIGHT */}
                    <Col md={7}>
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>

                        <p className="service-description">
                          {service.description}
                        </p>
                        <Link href={service.link} className="service-link">
                          Learn More →
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <WhyChooseUs />
      {/* PARALLAX SECTION */}
      {/* <TextParallaxSection
        imgUrl="/images/services/sp-left.png"
        subheading="Trusted Dermatology Clinic"
        heading="Personalised Skin & Hair Care"
      />

      <TextParallaxSection
        imgUrl="/images/services/sp-right.png"
        subheading="Advanced Laser Technology"
        heading="Safe • Effective • Result-Oriented"
      /> */}

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
      <section className="info-section">
        <div className="info-container">
          {/* SECTION HEADER */}
          <div className="info-header">
            <h2>Restore, Enhance & Maintain</h2>
            <p className="subtitle">Believe in yourself & Stay Beautiful!</p>
          </div>

          <div className="info-grid">
            {/* LEFT COLUMN: PHILOSOPHY */}
            <div className="info-philosophy">
              <h3>Our Perspective</h3>
              <p>
                In the era of social media, everyone wants to show their best
                side. At the <b>Derma Suite</b> clinic, we believe that every
                person is beautiful in their own way.
              </p>
              <p>
                Serving in the field of cosmetology and dermatology for more
                than 4 years, we have always focused on an individual’s
                enhancement and overall health instead of exploiting
                insecurities about looks. With this philosophy, The Derma Suite
                Advanced Dermatology & Cosmetology clinic offers a wide range of
                treatments bringing the latest cutting-edge equipment and
                metro-city expertise to North Maharashtra, especially Nashik.
              </p>
            </div>

            {/* RIGHT COLUMN: EXPERTISE & USPS */}
            <div className="info-features">
              {/* Feature Card 1 */}
              <div className="feature-card">
                <h4>Modern Solutions</h4>
                <p>
                  Modern problems require novel solutions. We provide advanced
                  treatments for skin, hair, and nail problems. Our exclusive
                  USPs include{" "}
                  <b>LASER treatments, Cosmetic Gynaecology, Dermatosurgery,</b>{" "}
                  and a dedicated
                  <b> OT for Hair Transplants</b>.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="feature-card highlight-card">
                <h4>Exclusive Women’s Centre</h4>
                <p>
                  Derma Suite is a dedicated women’s center comprising an
                  Advanced Dermatology & Cosmetology clinic, alongside an IVF,
                  Endoscopy & Laparoscopy centre. Founded and run by female
                  staff, we strive to provide a pleasant, comfortable, and
                  secure experience for our female patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* PHILOSOPHY SECTION */}
      <section className="philosophy-section py-5">
        <Container>
          <Row className="align-items-center g-5">
            {/* LEFT SIDE BIG TEXT */}
            <Col lg={6}>
              <div className="philosophy-left">
                <span className="philosophy-label">OUR PHILOSOPHY</span>
                <h2 className="philosophy-title">
                  Enhancing Natural Beauty <br /> With Medical Precision
                </h2>
                <p className="philosophy-text">
                  At Derma Suite, we believe dermatology is not just about
                  treatments — it is about confidence, safety, and long-term
                  skin health. Every procedure is designed to enhance your
                  natural features while preserving authenticity.
                </p>
              </div>
            </Col>

            {/* RIGHT SIDE FLOATING CARDS */}
            <Col lg={6}>
              <div className="philosophy-cards">
                <div className="philosophy-card">
                  <h5>01. Science-Based Care</h5>
                  <p>
                    Evidence-driven dermatology using advanced US-FDA approved
                    technology.
                  </p>
                </div>

                <div className="philosophy-card">
                  <h5>02. Personalised Approach</h5>
                  <p>
                    Customised treatments tailored to your unique skin & hair
                    needs.
                  </p>
                </div>

                <div className="philosophy-card">
                  <h5>03. Subtle & Natural Results</h5>
                  <p>Focused on enhancing your beauty — never overdoing it.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            {/* LEFT CONTENT */}
            <Col lg={7} className="text-start">
              <span className="cta-subtitle">QUESTIONS</span>

              <h2 className="cta-title">
                Request a <br /> Consultation.
              </h2>

              <p className="cta-text">
                Our expert team is here to understand your concerns, provide
                personalized guidance, and recommend the most effective
                treatment plan tailored to your needs. Book your consultation
                today and let us help you achieve natural, lasting results with
                care you can trust.
              </p>
            </Col>

            {/* RIGHT BUTTON */}
            <Col lg={5} className="text-lg-end text-start mt-4 mt-lg-0">
              <button className="cta-btn">REQUEST CONSULTATION</button>
            </Col>
          </Row>
        </Container>
      </section>

      <TrustStats />

       <TrendsSection/>
      <SkinSchool/>

      <TestimonialSlider />
<BeforeAfterGallery/>

<FeedbackForm/>
    </main>
  );
}

"use client";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../app/FuturePlans.module.css";

const plans = [
  {
    tag: "Coming Soon", tagClass: "tagBlue", emoji: "👨",
    title: "Men's Aesthetics",
    subtitle: "Skin has no gender. Neither does great care.",
    description: "Men's skin is structurally different — thicker, oilier, and subject to daily shaving trauma. Dr. Patil's Men's Aesthetics programme is designed for male skin concerns with no-fuss routines and real results.",
    services: ["Acne & Oiliness Control", "Beard & Scalp Care (PRP)", "Under-eye Correction", "Anti-ageing Injectables", "Laser Hair Removal", "Men's Skin Care Kits"],
    cta: "Join the Waitlist",
    cardClass: "cardBlue", ctaClass: "ctaBlue", dotClass: "dotBlue",
  },
  {
    tag: "Launching Soon", tagClass: "tagAmber", emoji: "💊",
    title: "Post-Procedure Kits",
    subtitle: "Your skin just had a procedure. Now protect it.",
    description: "Recovery is where results are made or lost. Dr. Patil has curated post-procedure skin care kits formulated to calm, protect, and accelerate healing after peels, laser, microneedling, and injectables.",
    services: ["Post-Laser Repair Kit", "Post-Peel Healing Kit", "Post-Microneedling Kit", "Post-Injectable Care Kit"],
    cta: "Notify Me",
    cardClass: "cardAmber", ctaClass: "ctaAmber", dotClass: "dotAmber",
  },
  {
    tag: "In Development", tagClass: "tagGreen", emoji: "🌿",
    title: "Skin Wellness",
    subtitle: "Beyond the surface.",
    description: "Your skin is a mirror of your internal health. Dr. Patil's Skin Wellness programme combines clinical dermatology with nutrition, lifestyle, and gut health to address root causes rather than just symptoms.",
    services: ["Nutrition & Skin (Gut-Skin Axis)", "Sleep & Stress Management", "Movement & Lymphatic Health", "Evidence-based Supplement Protocols", "Mind-Skin Connection"],
    cta: "Express Interest",
    cardClass: "cardGreen", ctaClass: "ctaGreen", dotClass: "dotGreen",
  },
];

export default function FuturePlans() {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <span className={styles.badge}>What's Next</span>
            <h2 className={styles.heading}>The Future of <em>Skin Care</em> at Our Clinic</h2>
            <p className={styles.subtext}>We're constantly expanding our services. Here's what's coming — be the first to know.</p>
          </Col>
        </Row>

        <Row className="g-4 mt-3">
          {plans.map((plan) => (
            <Col key={plan.title} xs={12} md={4}>
              <div className={`${styles.card} ${styles[plan.cardClass]}`}>
                <div className={styles.cardTop}>
                  <span className={`${styles.cardTag} ${styles[plan.tagClass]}`}>{plan.tag}</span>
                  <span className={styles.emoji}>{plan.emoji}</span>
                </div>
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <p className={styles.cardSubtitle}>{plan.subtitle}</p>
                <p className={styles.cardDesc}>{plan.description}</p>
                <ul className={styles.serviceList}>
                  {plan.services.map((s) => (
                    <li key={s}>
                      <span className={`${styles.dot} ${styles[plan.dotClass]}`} />
                      {s}
                    </li>
                  ))}
                </ul>
                <button className={`${styles.ctaBtn} ${styles[plan.ctaClass]}`}>{plan.cta} →</button>
              </div>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col xs={12}>
            <div className={styles.bottomBanner}>
              <p className={styles.bannerSub}>Have a suggestion or special request?</p>
              <p className={styles.bannerTitle}>Tell us what you'd like to see at Dr. Aditi Patil's clinic.</p>
              <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className={styles.waBtn}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
                </svg>
                Share Your Feedback on WhatsApp
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

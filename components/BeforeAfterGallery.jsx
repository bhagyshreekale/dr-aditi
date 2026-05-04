"use client";
import { useState } from "react";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../app/BeforeAfterGallery.module.css";
import acneBefore from "../public/images/Anti-Aging-Solution.jpg"
import acneAfter from "../public/images/Anti-Aging-Solution.jpg";
import hairBefore from "../public/images/hair-loss.jpg"
import hairAfter from "../public/images/laser-hair.jpg"
import laserBefore from "../public/images/services/fractional-co2-laser.jpg"
import laserAfter from "../public/images/services/fractional-co2-laser.jpg"
import oldScarBefore from "../public/images/services/old-scar-treatment.jpg"
import oldScarAfter from "../public/images/services/old-scar-treatment.jpg"
import smpBefore from "../public/images/services/smp.jpg"
import smpAfter from "../public/images/services/smp.jpg"



const categories = ["All", "Acne & Scarring", "Pigmentation", "Hair Loss", "Anti-Ageing", "Laser & Peels"];

const cases = [
  {
    id: 1,
    category: "Acne & Scarring",
    concern: "Post-inflammatory hyperpigmentation",
    treatment: "Chemical peel + niacinamide protocol",
    duration: "8 weeks",
    sessions: "3 sessions",
    beforeImage: acneBefore,
    afterImage: acneAfter,
  },
  {
    id: 2,
    category: "Pigmentation",
    concern: "Melasma & sun damage",
    treatment: "Laser toning + SPF protocol",
    duration: "12 weeks",
    sessions: "4 sessions",
    beforeImage: laserBefore,
    afterImage: laserAfter,
  },
  {
    id: 3,
    category: "Hair Loss",
    concern: "Androgenetic alopecia",
    treatment: "PRP therapy + topical minoxidil",
    duration: "16 weeks",
    sessions: "6 sessions",
    beforeImage: hairBefore,
    afterImage: hairAfter,
  },
  {
    id: 4,
    category: "Anti-Ageing",
    concern: "Fine lines & volume loss",
    treatment: "Botox + hyaluronic acid fillers",
    duration: "4 weeks",
    sessions: "1 session",
    beforeImage: oldScarAfter,
    afterImage: oldScarBefore,
  },
  {
    id: 5,
    category: "Laser & Peels",
    concern: "Uneven skin texture",
    treatment: "Fractional CO2 laser",
    duration: "10 weeks",
    sessions: "2 sessions",
    beforeImage: laserBefore,
    afterImage: laserAfter,
  },
  {
    id: 6,
    category: "Acne & Scarring",
    concern: "Nodular acne & scarring",
    treatment: "Isotretinoin + subcision",
    duration: "20 weeks",
    sessions: "5 sessions",
    beforeImage: smpBefore,
    afterImage: smpAfter,
  },
];

function CaseCard({ item }) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div className={styles.card}>
      {/* ── Image area ── */}
      <div className={styles.imageArea}>
        {/* BEFORE image */}
        <div className={`${styles.imgWrapper} ${showAfter ? styles.imgHidden : styles.imgVisible}`}>
          <Image
            src={item.beforeImage}
            alt={`Before — ${item.concern}`}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            className={styles.photo}
            style={{ objectFit: "cover" }}
          />
          <span className={`${styles.photoLabel} ${styles.labelBefore}`}>Before</span>
        </div>

        {/* AFTER image */}
        <div className={`${styles.imgWrapper} ${showAfter ? styles.imgVisible : styles.imgHidden}`}>
          <Image
            src={item.afterImage}
            alt={`After — ${item.concern}`}
            fill
            sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
            className={styles.photo}
            style={{ objectFit: "cover" }}
          />
          <span className={`${styles.photoLabel} ${styles.labelAfter}`}>After</span>
        </div>

        {/* Toggle button overlay */}
        <button
          onClick={() => setShowAfter(!showAfter)}
          className={styles.toggleBtn}
          aria-label={showAfter ? "Show before" : "Show after"}
        >
          {showAfter ? "← See Before" : "See After →"}
        </button>
      </div>

      {/* ── Card body ── */}
      <div className={styles.cardBody}>
        <span className={styles.categoryPill}>{item.category}</span>
        <p className={styles.concern}>{item.concern}</p>
        <p className={styles.treatmentText}>
          <strong>Treatment:</strong> {item.treatment}
        </p>
        <div className={styles.metaRow}>
          <span className={styles.metaTag}>{item.duration}</span>
          <span className={styles.metaTag}>{item.sessions}</span>
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterGallery() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? cases : cases.filter((c) => c.category === active);

  return (
    <section className={styles.section}>
      <Container>
        {/* Header */}
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <span className={styles.badge}>Patient Results</span>
            <h2 className={styles.heading}>
              Real Results. <em>Real Patients.</em>
            </h2>
            <p className={styles.subtext}>
              Visible transformations achieved through personalised,
              evidence-based dermatology care.
            </p>
          </Col>
        </Row>

        {/* Disclaimer */}
        <Row className="justify-content-center mt-4 mb-3">
          <Col xs={12}>
            <div className={styles.disclaimer}>
              <strong>Disclaimer:</strong> Results may vary from person to
              person. All photographs are shared with patient consent and are
              for informational purposes only. These images do not constitute a
              guarantee of outcome.
            </div>
          </Col>
        </Row>

        {/* Filters */}
        <Row className="justify-content-center mb-4">
          <Col xs={12}>
            <div className={styles.filterRow}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`${styles.filterBtn} ${
                    active === cat ? styles.filterActive : ""
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Grid */}
        <Row className="g-4">
          {filtered.map((item) => (
            <Col key={item.id} xs={12} sm={6} lg={4}>
              <CaseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

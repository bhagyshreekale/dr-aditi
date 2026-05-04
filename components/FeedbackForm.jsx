"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../app/FeedbackForm.module.css";

const ratingCategories = ["Wait time", "Doctor's explanation", "Treatment outcome", "Staff behaviour", "Clinic cleanliness"];
const visitTypes = ["In-person consultation", "Cosmetic procedure", "Follow-up", "Online consultation"];

function StarRating({ value, onChange }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star} type="button"
          onClick={() => onChange(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          className={styles.starBtn}
          aria-label={`${star} star`}
        >
          <svg viewBox="0 0 20 20" width="24" height="24" fill={(hovered || value) >= star ? "#f43f5e" : "none"} stroke={(hovered || value) >= star ? "#f43f5e" : "#d1d5db"} strokeWidth="1.5">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/>
          </svg>
        </button>
      ))}
    </div>
  );
}

export default function FeedbackForm() {
  const [overall, setOverall] = useState(0);
  const [ratings, setRatings] = useState({ "Wait time": 0, "Doctor's explanation": 0, "Treatment outcome": 0, "Staff behaviour": 0, "Clinic cleanliness": 0 });
  const [recommend, setRecommend] = useState("");
  const [visitType, setVisitType] = useState("");
  const [wellDone, setWellDone] = useState("");
  const [improve, setImprove] = useState("");
  const [consent, setConsent] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className={styles.section}>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="text-center">
              <div className={styles.successIcon}>💚</div>
              <h3 className={styles.successTitle}>Thank You!</h3>
              <p className={styles.successText}>Your feedback is reviewed personally and helps us raise our standard of care.</p>
              <p className={styles.successSig}>— Dr. Aditi Patil &amp; Team</p>
              <button onClick={() => setSubmitted(false)} className={styles.retakeLink}>Submit another response</button>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <span className={styles.badge}>Patient Feedback</span>
            <h2 className={styles.heading}>How Was Your <em>Experience?</em></h2>
            <p className={styles.subtext}>Your honest feedback helps Dr. Patil's team deliver better care for every patient.</p>
          </Col>
        </Row>

        <Row className="justify-content-center mt-5">
          <Col xs={12} md={9} lg={8}>
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className={styles.formCard}>

              {/* Visit type */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Type of Visit</label>
                <div className={styles.pillGroup}>
                  {visitTypes.map((v) => (
                    <button key={v} type="button" onClick={() => setVisitType(v)}
                      className={`${styles.pillBtn} ${visitType === v ? styles.pillActive : ""}`}>
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Overall */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Overall Experience</label>
                <StarRating value={overall} onChange={setOverall} />
                {overall > 0 && (
                  <p className={styles.ratingWord}>{["","Poor","Fair","Good","Very good","Excellent!"][overall]}</p>
                )}
              </div>

              {/* Per-category ratings */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Rate Each Aspect</label>
                <div className={styles.categoryGrid}>
                  {ratingCategories.map((cat) => (
                    <div key={cat} className={styles.categoryRow}>
                      <span className={styles.categoryName}>{cat}</span>
                      <StarRating value={ratings[cat]} onChange={(v) => setRatings((r) => ({ ...r, [cat]: v }))} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommend */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Would you recommend Dr. Aditi Patil?</label>
                <div className={styles.pillGroup}>
                  {["Definitely", "Probably", "Not sure", "No"].map((opt) => (
                    <button key={opt} type="button" onClick={() => setRecommend(opt)}
                      className={`${styles.pillBtn} ${recommend === opt ? styles.pillActive : ""}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Textareas */}
              <Row className="g-3">
                <Col xs={12} md={6}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>What did we do well?</label>
                    <textarea value={wellDone} onChange={(e) => setWellDone(e.target.value)} rows={4}
                      placeholder="Share what you appreciated most..."
                      className={styles.textarea} />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className={styles.fieldGroup}>
                    <label className={styles.fieldLabel}>What could we improve?</label>
                    <textarea value={improve} onChange={(e) => setImprove(e.target.value)} rows={4}
                      placeholder="Any suggestions are welcome..."
                      className={styles.textarea} />
                  </div>
                </Col>
              </Row>

              {/* Consent */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>May we share your feedback as a testimonial?</label>
                <div className={styles.pillGroup}>
                  {["Yes, with my name", "Yes, anonymously", "No, keep it private"].map((opt) => (
                    <button key={opt} type="button" onClick={() => setConsent(opt)}
                      className={`${styles.pillBtn} ${consent === opt ? styles.pillActive : ""}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className={styles.submitBtn}>Submit Feedback →</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

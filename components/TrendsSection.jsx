"use client";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../app/TrendsSection.module.css";

const trends = [
  {
    tag: "Trending", tagClass: "tagRose",
    title: "Skin Cycling: The 4-Night Routine That's Taken Over the Internet",
    summary: "Skin cycling alternates active ingredients across a 4-night cycle — exfoliation, retinol, then two recovery nights. But does it work for Indian skin? Dr. Aditi Patil explains what to keep, what to skip, and how to customise it for your skin type.",
    tweet: "Night 1 → Exfoliant (AHA/BHA)\nNight 2 → Retinol\nNight 3 & 4 → Barrier repair (ceramides + HA)",
    readTime: "5 min read", emoji: "",
  },
  {
    tag: "Expert Take", tagClass: "tagViolet",
    title: "Pre-juvenation: Why Your 20s Are the Best Time to Think About Ageing",
    summary: "Pre-juvenation is the shift from treating ageing to preventing it. Starting low-dose Botox, SPF habits, and collagen-boosting treatments in your 20s means slower, more graceful ageing in your 40s.",
    tweet: "Pre-juvenation isn't about looking frozen at 25.\nIt's about building habits so your skin ages on your terms.",
    readTime: "6 min read", emoji: "",
  },
  {
    tag: "Deep Dive", tagClass: "tagAmber",
    title: "Medical-Grade Skincare vs Drugstore: Is the Price Tag Worth It?",
    summary: "Medical-grade products contain higher concentrations of active ingredients and are prescribed for your specific skin condition — not your shelf. Dr. Aditi Patil explains where the real differences lie.",
    tweet: "✅ Worth it → Retinoids, Vitamin C, SPF\n❌ Skip it → Cleansers, basic toners, micellar waters",
    readTime: "7 min read", emoji: "",
  },
];

const hacks = [
  { number: "01", text: "Apply moisturiser on damp skin, not dry. You lock in 40% more hydration." },
  { number: "02", text: "Switch to a silk pillowcase — reduces friction lines and moisture loss overnight." },
  { number: "03", text: "Niacinamide before makeup, not after. It controls oil for 6+ hours when applied correctly." },
  { number: "04", text: "Apply SPF on your hands and neck too — these areas age fastest and are almost always forgotten." },
  { number: "05", text: "The 60-second rule: massage cleanser for a full minute before rinsing. Most people under-cleanse." },
  { number: "06", text: "Patch test every new product on your inner arm for 48 hours before using it on your face." },
];

function TrendCard({ item }) {
  const [showTweet, setShowTweet] = useState(false);
  return (
    <div className={styles.trendCard}>
      <div className={styles.cardAccent} />
      <div className={styles.cardContent}>
        <div className={styles.cardTopRow}>
          <span className={`${styles.cardTag} ${styles[item.tagClass]}`}>{item.tag}</span>
          <span className={styles.cardEmoji}>{item.emoji}</span>
        </div>
        <h3 className={styles.cardTitle}>{item.title}</h3>
        <p className={styles.cardSummary}>{item.summary}</p>
        <button onClick={() => setShowTweet(!showTweet)} className={styles.tweetToggle}>
          <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {showTweet ? "Hide post" : "See Dr. Aditi Patil's take"}
        </button>
        {showTweet && (
          <div className={styles.tweetBox}>
            <pre className={styles.tweetText}>{item.tweet}</pre>
          </div>
        )}
        <div className={styles.cardFooter}>
          <span className={styles.readTime}>{item.readTime}</span>
          <a href="#" className={styles.readMore}>Read full post →</a>
        </div>
      </div>
    </div>
  );
}

export default function TrendsSection() {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="text-center">
            <span className={styles.sectionBadge}>Skin Trends &amp; Blog</span>
            <h2 className={styles.heading}>Trending in <em>Skin</em></h2>
            <p className={styles.subtext}>Dr. Aditi Patil breaks down what's hot in dermatology — what's worth trying and what's just hype.</p>
          </Col>
        </Row>

        <Row className="g-4 mt-3 mb-5">
          {trends.map((item) => (
            <Col key={item.title} xs={12} md={4}>
              <TrendCard item={item} />
            </Col>
          ))}
        </Row>

        {/* Hacks */}
        <div className={styles.hacksBox}>
          <div className={styles.hacksHeader}>
            <span className={styles.hacksEmoji}></span>
            <div>
              <h3 className={styles.hacksTitle}>Dr. Aditi Patil's Skin Hacks Series</h3>
              <p className={styles.hacksSubtitle}>Dermatologist secrets — no filter</p>
            </div>
          </div>
          <Row className="g-3 mt-1">
            {hacks.map((h) => (
              <Col key={h.number} xs={12} sm={6} lg={4}>
                <div className={styles.hackCard}>
                  <span className={styles.hackNumber}>{h.number}</span>
                  <p className={styles.hackText}>{h.text}</p>
                </div>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-4">
            <a href="#" className={styles.viewAllHacks}>View all skin hacks →</a>
          </div>
        </div>
      </Container>
    </section>
  );
}

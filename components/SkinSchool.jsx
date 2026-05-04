"use client";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../app/SkinSchool.module.css";

const playlists = [
  { emoji: "💬", title: "Ask Dr. Patil", desc: "Your skincare questions answered" },
  { emoji: "🔬", title: "Ingredient Deep Dives", desc: "What's actually in your products" },
  { emoji: "🏥", title: "Procedure Diaries", desc: "Before, during, and after treatment" },
  { emoji: "🚫", title: "Myth Busted", desc: "TikTok trends vs clinical fact" },
  { emoji: "👨", title: "Men's Skin 101", desc: "Routines built for men" },
];

const videos = [
  { title: "I Tried Skin Cycling for 60 Days — Here's What Actually Happened", duration: "12:34", views: "48K views", tag: "Trending", tagClass: "tagRed" },
  { title: "The Truth About Vitamin C Serums (A Dermatologist Explains)", duration: "9:18", views: "31K views", tag: "Education", tagClass: "tagGray" },
  { title: "Chemical Peel vs Laser — Which One Is Right for You?", duration: "14:52", views: "62K views", tag: "Popular", tagClass: "tagAmber" },
  { title: "Why Your Moisturiser Isn't Working (And What to Use Instead)", duration: "8:05", views: "27K views", tag: "Tips", tagClass: "tagGray" },
];

export default function SkinSchool() {
  return (
    <section className={styles.section}>
      <div className={styles.blob} />
      <Container className={styles.inner}>
        <Row className="align-items-end justify-content-between mb-5 g-3">
          <Col xs={12} lg={7}>
            <span className={styles.ytBadge}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12" style={{ marginRight: 5 }}>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube Channel
            </span>
            <h2 className={styles.heading}>Skin School by <em>Dr. Aditi Patil</em></h2>
            <p className={styles.subtext}>Free dermatologist-led education — no algorithms, no gimmicks. Just real science. New episodes every week.</p>
          </Col>
          <Col xs={12} lg="auto">
            <a href="https://youtube.com/@draditipatil" target="_blank" rel="noopener noreferrer" className={styles.subscribeBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              Subscribe Free
            </a>
          </Col>
        </Row>

        {/* Playlists */}
        <Row className="g-3 mb-5">
          {playlists.map((p) => (
            <Col key={p.title} xs={6} sm={4} lg={true}>
              <div className={styles.playlistCard}>
                <span className={styles.playlistEmoji}>{p.emoji}</span>
                <p className={styles.playlistTitle}>{p.title}</p>
                <p className={styles.playlistDesc}>{p.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* Videos */}
        <p className={styles.sectionLabel}>Trending Videos</p>
        <Row className="g-3">
          {videos.map((v, i) => (
            <Col key={i} xs={12} sm={6}>
              <div className={styles.videoCard}>
                <div className={styles.videoThumb}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" style={{ color: "#ef4444" }}>
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <div className={styles.videoInfo}>
                  <span className={`${styles.videoTag} ${styles[v.tagClass]}`}>{v.tag}</span>
                  <p className={styles.videoTitle}>{v.title}</p>
                  <p className={styles.videoMeta}>{v.views} · {v.duration}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>Watch free. Learn from a dermatologist. Glow for life.</p>
          <a href="https://youtube.com/@draditipatil" target="_blank" rel="noopener noreferrer" className={styles.viewAllBtn}>
            View All Episodes →
          </a>
        </div>
      </Container>
    </section>
  );
}

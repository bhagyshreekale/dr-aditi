"use client";

import { useState, useRef, useEffect, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "next/navigation";

const TABS = [
  {
    key: "clinic",
    label: "Our Clinic",
    sublabel: "Spaces & interiors",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    accent: "#7C6FF7",
    accentBg: "#F0EFFE",
  },
  {
    key: "procedure",
    label: "Dr. Procedure",
    sublabel: "Treatments in action",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    accent: "#14B8A6",
    accentBg: "#F0FDFA",
  },
  {
    key: "patient",
    label: "Our Patients",
    sublabel: "Before & after results",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    accent: "#F97316",
    accentBg: "#FFF7ED",
  },
];

const gallery = {
  clinic: [
    "/images/gallery/P4600120.JPG",
    "/images/gallery/P4600146.JPG",
    "/images/gallery/P4600178.JPG",
    "/images/gallery/P4600184.JPG",
    "/images/gallery/IMG_8424.jpg",
    "/images/gallery/IMG_8474.jpg",
    "/images/gallery/IMG_8478.jpg",
    "/images/gallery/IMG_8480.jpg",
    "/images/gallery/IMG_8503.jpg",
    "/images/gallery/IMG_8507.jpg",
    "/images/gallery/IMG_8508.jpg",
    "/images/gallery/IMG_8514.jpg",
    "/images/gallery/IMG_8537.jpg",
    "/images/gallery/IMG_8550.jpg",
    "/images/gallery/IMG_8554.jpg",
    "/images/gallery/IMG_8576.jpg",
  ],
  procedure: [
    "/images/gallery/gallery2.png",
    "/images/gallery/gallery3.png",
    "/images/gallery/gallery4.png",
    "/images/gallery/gallery5.png",
    "/images/gallery/gallery6.png",
    "/images/gallery/gallery7.png",
  ],
  patient: [
    "/images/services/fractional-co2-laser.jpg",
    "/images/services/hair-botox.jpg",
    "/images/services/meso-hair.jpg",
    "/images/services/old-scar-treatment.jpg",
    "/images/services/smp.jpg",
  ],
};

function GalleryInner() {
  const searchParams = useSearchParams();
  const initialTab = searchParams.get("tab") || "clinic";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [dropOpen, setDropOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [loaded, setLoaded] = useState({});
  const dropRef = useRef(null);

  const activeImages = gallery[activeTab] || [];
  const activeTabData = TABS.find((t) => t.key === activeTab);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && gallery[tab]) setActiveTab(tab);
  }, [searchParams]);

  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight" && lightbox !== null) {
        setLightbox((prev) => (prev + 1) % activeImages.length);
      }
      if (e.key === "ArrowLeft" && lightbox !== null) {
        setLightbox((prev) => (prev - 1 + activeImages.length) % activeImages.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox, activeImages]);

  const handleImgLoad = (idx) => {
    setLoaded((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <Container>
          <div className="hero-inner">
            <span className="hero-eyebrow">Visual Journey</span>
            <h1 >Derma Suite Gallery</h1>
            <p className="hero-sub">
              Explore our state-of-the-art clinic, expert procedures, and remarkable patient transformations.
            </p>
          </div>
        </Container>
      </section>

      {/* STICKY CONTROLS */}
      <section className="gallery-controls">
        <Container>
          <div className="controls-row">
            {/* DROPDOWN */}
            <div className="dropdown-wrap" ref={dropRef}>
              <button
                className={`drop-trigger ${dropOpen ? "is-open" : ""}`}
                onClick={() => setDropOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={dropOpen}
              >
                <span
                  className="drop-icon-box"
                  style={{ color: activeTabData.accent, background: activeTabData.accentBg }}
                >
                  {activeTabData.icon}
                </span>
                <span className="drop-text">
                  <span className="drop-label">{activeTabData.label}</span>
                  <span className="drop-sub">{activeTabData.sublabel}</span>
                </span>
                <svg
                  className={`drop-chevron ${dropOpen ? "rotated" : ""}`}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {dropOpen && (
                <div className="drop-menu" role="listbox">
                  {TABS.map((tab) => (
                    <button
                      key={tab.key}
                      className={`drop-item ${activeTab === tab.key ? "is-active" : ""}`}
                      onClick={() => {
                        setActiveTab(tab.key);
                        setLoaded({});
                        setDropOpen(false);
                      }}
                      role="option"
                      aria-selected={activeTab === tab.key}
                    >
                      <span
                        className="drop-item-icon"
                        style={{ color: tab.accent, background: tab.accentBg }}
                      >
                        {tab.icon}
                      </span>
                      <span className="drop-item-text">
                        <span className="drop-item-label">{tab.label}</span>
                        <span className="drop-item-sub">{tab.sublabel}</span>
                      </span>
                      <span className="drop-item-count">{gallery[tab.key].length}</span>
                      {activeTab === tab.key && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tab.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* COUNT BADGE */}
            <div className="count-pill" style={{ borderColor: activeTabData.accent + "33", color: activeTabData.accent }}>
              <span className="count-num">{activeImages.length}</span>
              <span className="count-text">photos</span>
            </div>
          </div>
        </Container>
      </section>

      {/* GRID */}
      <section className="gallery-grid">
        <Container>
          {activeImages.length > 0 ? (
            <Row className="g-3 g-md-4">
              {activeImages.map((img, index) => (
                <Col xl={4} lg={4} md={6} xs={12} key={`${activeTab}-${index}`}>
                  <div
                    className={`g-card ${loaded[index] ? "is-loaded" : ""}`}
                    onClick={() => setLightbox(index)}
                    style={{ "--accent": activeTabData.accent }}
                  >
                    <div className="g-card-inner">
                      <div className="g-skeleton" />
                      <img
                        src={img}
                        alt={`${activeTabData.label} — photo ${index + 1}`}
                        loading="lazy"
                        onLoad={() => handleImgLoad(index)}
                        draggable={false}
                      />
                      <div className="g-overlay">
                        <div className="g-zoom-icon">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </div>
                        <span className="g-num">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <h3>Coming Soon</h3>
              <p>This section is being updated. Check our social media for the latest.</p>
            </div>
          )}
        </Container>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lb-close" onClick={() => setLightbox(null)} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            className="lb-nav lb-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p - 1 + activeImages.length) % activeImages.length); }}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={activeImages[lightbox]} alt={`Preview ${lightbox + 1}`} />
            <div className="lb-caption">
              <span style={{ color: activeTabData.accent }}>{activeTabData.label}</span>
              &nbsp;— {String(lightbox + 1).padStart(2, "0")} / {String(activeImages.length).padStart(2, "0")}
            </div>
          </div>

          <button
            className="lb-nav lb-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((p) => (p + 1) % activeImages.length); }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}

      <style jsx>{`
        /* ─── FONTS ─────────────────────────────────────── */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ─── BASE ──────────────────────────────────────── */
        .gallery-page {
          background: #FAFAF9;
          min-height: 100vh;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: #1a1a1a;
        }

        /* ─── HERO ──────────────────────────────────────── */
        .gallery-hero {
          padding: 110px 0 64px;
          background: #ffffff;
          border-bottom: 1px solid #F0EDE8;
          position: relative;
          overflow: hidden;
        }
        .gallery-hero::before {
          content: '';
          position: absolute;
          top: -40px;
          right: -60px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, #F0EFFE 0%, transparent 70%);
          pointer-events: none;
        }
        .gallery-hero::after {
          content: '';
          position: absolute;
          bottom: -60px;
          left: -40px;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, #FFF7ED 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-inner {
          position: relative;
          z-index: 1;
          max-width: 560px;
        }
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7C6FF7;
          background: #F0EFFE;
          border: 1px solid #DDD8FB;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
        }
        .hero-eyebrow::before {
          content: '';
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #7C6FF7;
          animation: blink 2s ease-in-out infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .hero-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          color: #0F0E17;
          line-height: 1.1;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        .hero-sub {
          font-size: 1rem;
          color: #6B7280;
          line-height: 1.7;
          font-weight: 300;
          max-width: 460px;
          margin: 0;
        }

        /* ─── CONTROLS BAR ──────────────────────────────── */
        .gallery-controls {
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid #F0EDE8;
          padding: 14px 0;
          position: sticky;
          top: 70px;
          z-index: 40;
        }
        .controls-row {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ─── DROPDOWN ──────────────────────────────────── */
        .dropdown-wrap { position: relative; }

        .drop-trigger {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px 10px 10px;
          background: #ffffff;
          border: 1.5px solid #E8E4DD;
          border-radius: 14px;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          min-width: 240px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .drop-trigger:hover,
        .drop-trigger.is-open {
          border-color: #C4BDF5;
          box-shadow: 0 0 0 4px rgba(124,111,247,0.06);
        }
        .drop-icon-box {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .drop-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1px;
        }
        .drop-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0F0E17;
          line-height: 1;
        }
        .drop-sub {
          font-size: 0.72rem;
          color: #9CA3AF;
          line-height: 1;
        }
        .drop-chevron {
          color: #9CA3AF;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1);
          flex-shrink: 0;
        }
        .drop-chevron.rotated { transform: rotate(180deg); }

        /* MENU */
        .drop-menu {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 270px;
          background: #ffffff;
          border: 1.5px solid #E8E4DD;
          border-radius: 18px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
          overflow: hidden;
          z-index: 200;
          animation: menuIn 0.18s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes menuIn {
          from { opacity: 0; transform: translateY(-6px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        .drop-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 16px;
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #F5F3EF;
          cursor: pointer;
          transition: background 0.12s;
          font-family: 'DM Sans', sans-serif;
          text-align: left;
        }
        .drop-item:last-child { border-bottom: none; }
        .drop-item:hover { background: #FAFAF9; }
        .drop-item.is-active { background: #FAFAF9; }
        .drop-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .drop-item-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .drop-item-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #0F0E17;
          line-height: 1;
        }
        .drop-item-sub {
          font-size: 0.72rem;
          color: #9CA3AF;
          line-height: 1;
        }
        .drop-item-count {
          font-size: 0.78rem;
          color: #9CA3AF;
          background: #F5F3EF;
          padding: 3px 10px;
          border-radius: 100px;
          font-weight: 500;
        }

        /* COUNT PILL */
        .count-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1.5px solid;
          border-radius: 100px;
          background: #fff;
        }
        .count-num {
          font-size: 1rem;
          font-weight: 700;
          line-height: 1;
        }
        .count-text {
          font-size: 0.78rem;
          font-weight: 500;
          color: #9CA3AF;
          line-height: 1;
        }

        /* ─── GALLERY GRID ──────────────────────────────── */
        .gallery-grid { padding: 32px 0 90px; }

        .g-card {
          border-radius: 18px;
          overflow: hidden;
          cursor: zoom-in;
          aspect-ratio: 4 / 3;
          background: #F0EDE8;
          position: relative;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.4s ease, transform 0.4s ease, box-shadow 0.3s ease;
        }
        .g-card.is-loaded {
          opacity: 1;
          transform: translateY(0);
        }
        .g-card:hover {
          box-shadow: 0 24px 48px rgba(0,0,0,0.14);
          transform: translateY(-4px);
        }
        .g-card-inner { position: relative; width: 100%; height: 100%; overflow: hidden; }

        .g-skeleton {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #F0EDE8 25%, #E8E4DD 50%, #F0EDE8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          z-index: 1;
        }
        @keyframes shimmer {
          from { background-position: 200% 0; }
          to   { background-position: -200% 0; }
        }
        .g-card.is-loaded .g-skeleton { opacity: 0; transition: opacity 0.3s; }

        .g-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          position: relative;
          z-index: 2;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .g-card:hover img { transform: scale(1.07); }

        .g-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(15,14,23,0.65) 0%, rgba(15,14,23,0) 50%);
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .g-card:hover .g-overlay { opacity: 1; }

        .g-zoom-icon {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.8);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          transform: scale(0.85);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .g-card:hover .g-zoom-icon { transform: scale(1); }

        .g-num {
          position: absolute;
          bottom: 12px;
          right: 14px;
          font-size: 0.7rem;
          font-weight: 600;
          color: rgba(255,255,255,0.6);
          letter-spacing: 0.05em;
        }

        /* ─── EMPTY STATE ───────────────────────────────── */
        .empty-state {
          text-align: center;
          padding: 80px 24px;
          background: #fff;
          border: 1.5px dashed #E8E4DD;
          border-radius: 24px;
        }
        .empty-icon {
          width: 72px;
          height: 72px;
          background: #F5F3EF;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .empty-state h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          color: #0F0E17;
          margin-bottom: 8px;
        }
        .empty-state p { font-size: 0.9rem; color: #9CA3AF; margin: 0; line-height: 1.6; }

        /* ─── LIGHTBOX ──────────────────────────────────── */
        .lightbox {
          position: fixed;
          inset: 0;
          background: rgba(10,9,20,0.93);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: lbIn 0.2s ease;
        }
        @keyframes lbIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .lb-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          max-width: 88vw;
          max-height: 88vh;
        }
        .lb-content img {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 16px;
          object-fit: contain;
          box-shadow: 0 40px 80px rgba(0,0,0,0.5);
        }
        .lb-caption {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          font-weight: 500;
        }
        .lb-close {
          position: fixed;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.15);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .lb-close:hover { background: rgba(255,255,255,0.18); }
        .lb-nav {
          position: fixed;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.15);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
          z-index: 10;
        }
        .lb-nav:hover { background: rgba(255,255,255,0.18); }
        .lb-prev { left: 20px; }
        .lb-next { right: 20px; }

        /* ─── RESPONSIVE ────────────────────────────────── */
        @media (max-width: 991px) {
          .gallery-controls { top: 0; }
        }
        @media (max-width: 767px) {
          .gallery-hero { padding: 80px 0 40px; }
          .drop-trigger { min-width: 100%; }
          .controls-row { flex-direction: row; flex-wrap: wrap; }
          .lb-nav { display: none; }
          .lb-content { max-width: 95vw; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 1.8rem; }
          .drop-trigger { min-width: 0; flex: 1; }
          .gallery-grid { padding: 20px 0 60px; }
        }
      `}</style>
    </main>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
      <GalleryInner />
    </Suspense>
  );
}
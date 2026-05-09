"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { ThemeContext } from "@/context/ThemeContext";
import { usePathname } from "next/navigation";

const GALLERY_TABS = [
  {
    key: "clinic",
    label: "Our Clinic",
    desc: "Spaces & interiors",
    href: "/gallery?tab=clinic",
    accent: "#f28b8b",
    accentBg: "#F0EFFE",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    key: "procedure",
    label: "Dr. Procedure",
    desc: "Treatments in action",
    href: "/gallery?tab=procedure",
    accent: "#14B8A6",
    accentBg: "#F0FDFA",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    key: "patient",
    label: "Our Patients",
    desc: "Before & after results",
    href: "/gallery?tab=patient",
    accent: "#F97316",
    accentBg: "#FFF7ED",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export default function CustomNavbar() {
  const { dark } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileGalleryOpen, setMobileGalleryOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const isGalleryActive = pathname.startsWith("/gallery");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (galleryRef.current && !galleryRef.current.contains(e.target as Node)) {
        setGalleryOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setGalleryOpen(false);
    setExpanded(false);
    setMobileGalleryOpen(false);
  }, [pathname]);

  const handleClose = () => {
    setExpanded(false);
    setGalleryOpen(false);
    setMobileGalleryOpen(false);
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        onToggle={(val) => setExpanded(val)}
        className={`ds-navbar ${dark ? "ds-dark" : "ds-light"} ${scrolled ? "ds-scrolled" : ""}`}
      >
        <Container>
          {/* LOGO */}
          <Link href="/" className="navbar-brand ds-brand" onClick={handleClose}>
            <Image
              src="/logo.png"
              alt="DermaSuite Logo"
              width={38}
              height={38}
              className="ds-logo-img"
              priority
            />
            <span className="ds-brand-text">DERMASUITE</span>
          </Link>

          {/* HAMBURGER */}
          <Navbar.Toggle aria-controls="ds-navbar-nav" className="ds-toggler">
            <span className="ds-bar" />
            <span className="ds-bar" />
            <span className="ds-bar" />
          </Navbar.Toggle>

          {/* NAV LINKS */}
          <Navbar.Collapse id="ds-navbar-nav">
            <Nav className="ms-auto align-items-lg-center gap-lg-1">
              <Link href="/" className={`ds-link ${pathname === "/" ? "ds-active" : ""}`} onClick={handleClose}>
                Home
              </Link>
              <Link href="/about" className={`ds-link ${pathname === "/about" ? "ds-active" : ""}`} onClick={handleClose}>
                About
              </Link>
              <Link href="/services" className={`ds-link ${pathname === "/services" ? "ds-active" : ""}`} onClick={handleClose}>
                Services
              </Link>

              {/* GALLERY — Desktop Dropdown */}
              <div className="ds-gallery-wrap d-none d-lg-block" ref={galleryRef}>
                <button
                  className={`ds-link ds-gallery-btn ${isGalleryActive ? "ds-active" : ""} ${galleryOpen ? "ds-open" : ""}`}
                  onClick={() => setGalleryOpen((v) => !v)}
                  aria-haspopup="true"
                  aria-expanded={galleryOpen}
                >
                  Gallery
                  <svg
                    className={`ds-chevron ${galleryOpen ? "ds-rotated" : ""}`}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                {galleryOpen && (
                  <div className="ds-gallery-menu">
                    <div className="ds-gallery-header">
                      <span>Gallery</span>
                    </div>
                    {GALLERY_TABS.map((tab) => (
                      <Link
                        key={tab.key}
                        href={tab.href}
                        className="ds-gallery-item"
                        onClick={handleClose}
                      >
                        <span
                          className="ds-gallery-icon"
                          style={{ color: tab.accent, background: tab.accentBg }}
                        >
                          {tab.icon}
                        </span>
                        <span className="ds-gallery-info">
                          <span className="ds-gallery-label">{tab.label}</span>
                          <span className="ds-gallery-desc">{tab.desc}</span>
                        </span>
                        <svg
                          className="ds-gallery-arrow"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* GALLERY — Mobile Accordion */}
              <div className="ds-mobile-gallery d-block d-lg-none">
                <button
                  className={`ds-link ds-mobile-gallery-btn ${isGalleryActive ? "ds-active" : ""}`}
                  onClick={() => setMobileGalleryOpen((v) => !v)}
                >
                  Gallery
                  <svg
                    className={`ds-chevron ${mobileGalleryOpen ? "ds-rotated" : ""}`}
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>

                <div className={`ds-mobile-sub ${mobileGalleryOpen ? "ds-expanded" : ""}`}>
                  {GALLERY_TABS.map((tab) => (
                    <Link
                      key={tab.key}
                      href={tab.href}
                      className="ds-mobile-sub-item"
                      onClick={handleClose}
                    >
                      <span
                        className="ds-gallery-icon ds-gallery-icon--sm"
                        style={{ color: tab.accent, background: tab.accentBg }}
                      >
                        {tab.icon}
                      </span>
                      {tab.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/contact" className={`ds-link ${pathname === "/contact" ? "ds-active" : ""}`} onClick={handleClose}>
                Contact
              </Link>

              {/* CTA BUTTON */}
        <a href="tel:+918799505624" className="ds-cta">
  Book Appointment
</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        /* ─── NAVBAR BASE ────────────────────────────────── */
        .ds-navbar {
          font-family: 'DM Sans', system-ui, sans-serif;
          padding: 14px 0;
          background: transparent;
          transition: background 0.3s ease, box-shadow 0.3s ease, padding 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .ds-navbar.ds-scrolled {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: #F0EDE8;
          box-shadow: 0 4px 24px rgba(0,0,0,0.05);
          padding: 10px 0;
        }
        .ds-navbar.ds-dark {
          background: rgba(15, 14, 23, 0.95);
          border-bottom-color: rgba(255,255,255,0.08);
        }

        /* ─── BRAND ─────────────────────────────────────── */
        .ds-brand {
          display: flex !important;
          align-items: center;
          gap: 10px;
          text-decoration: none !important;
        }
        .ds-logo-img { border-radius: 8px; object-fit: contain; }
.ds-brand-text {
  font-size: 0.92rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #0F0E17 !important;
}
        .ds-dark .ds-brand-text { color: #ffffff !important; }

        /* ─── HAMBURGER ──────────────────────────────────── */
        .ds-toggler {
          border: 1.5px solid #E8E4DD !important;
          border-radius: 10px !important;
          padding: 8px 10px !important;
          background: transparent !important;
          box-shadow: none !important;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .ds-toggler:focus { box-shadow: 0 0 0 3px rgba(124,111,247,0.15) !important; }
        .ds-bar {
          display: block;
          width: 20px;
          height: 2px;
          background: #0F0E17;
          border-radius: 2px;
          transition: all 0.2s;
        }
        .ds-dark .ds-bar { background: #ffffff; }

        /* ─── LINKS ──────────────────────────────────────── */
        .ds-link {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a2e !important;
          padding: 9px 16px !important;
          border-radius: 8px;
          text-decoration: none !important;
          transition: color 0.15s, background 0.15s;
          border: none;
          background: transparent;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 5px;
          line-height: 1;
          white-space: nowrap;
          letter-spacing: 0.01em;
        }
        .ds-link:hover { color: #f28b8b !important; background: #F0EFFE; }
        .ds-link.ds-active { color: #f28b8b !important; background: #F0EFFE; }
        .ds-dark .ds-link { color: rgba(255,255,255,0.85) !important; }
        .ds-dark .ds-link:hover { color: #ffffff !important; background: rgba(255,255,255,0.08); }

        /* ─── CHEVRON ────────────────────────────────────── */
        .ds-chevron { transition: transform 0.22s cubic-bezier(0.4,0,0.2,1); color: #9CA3AF; }
        .ds-chevron.ds-rotated { transform: rotate(180deg); }

        /* ─── DESKTOP GALLERY DROPDOWN ───────────────────── */
        .ds-gallery-wrap { position: relative; }
        .ds-gallery-btn.ds-open { color: #7C6FF7 !important; background: #F0EFFE; }

        .ds-gallery-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 260px;
          background: #ffffff;
          border: 1.5px solid #E8E4DD;
          border-radius: 20px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06);
          overflow: hidden;
          z-index: 1000;
          animation: navMenuIn 0.18s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes navMenuIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-6px) scale(0.97); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0)    scale(1);    }
        }
        .ds-gallery-header {
          padding: 10px 16px 8px;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9CA3AF;
          border-bottom: 1px solid #F5F3EF;
        }
        .ds-gallery-item {
          display: flex !important;
          align-items: center;
          gap: 12px;
          padding: 12px 16px !important;
          text-decoration: none !important;
          border-bottom: 1px solid #F5F3EF;
          transition: background 0.12s;
          color: #0F0E17 !important;
        }
        .ds-gallery-item:last-child { border-bottom: none; }
        .ds-gallery-item:hover { background: #FAFAF9; }
        .ds-gallery-item:hover .ds-gallery-arrow { opacity: 1; transform: translateX(2px); color: #9CA3AF; }

        .ds-gallery-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .ds-gallery-icon--sm {
          width: 28px;
          height: 28px;
          border-radius: 7px;
        }
        .ds-gallery-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .ds-gallery-label {
          font-size: 0.86rem;
          font-weight: 600;
          color: #0F0E17;
          line-height: 1;
        }
        .ds-gallery-desc {
          font-size: 0.72rem;
          color: #9CA3AF;
          line-height: 1;
        }
        .ds-gallery-arrow {
          opacity: 0;
          transition: opacity 0.15s, transform 0.15s;
          flex-shrink: 0;
        }

        /* ─── MOBILE GALLERY ACCORDION ───────────────────── */
        .ds-mobile-gallery { width: 100%; }
        .ds-mobile-gallery-btn {
          width: 100%;
          justify-content: space-between;
          text-align: left;
        }
        .ds-mobile-sub {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .ds-mobile-sub.ds-expanded { max-height: 240px; }
        .ds-mobile-sub-item {
          display: flex !important;
          align-items: center;
          gap: 10px;
          padding: 10px 12px 10px 20px !important;
          font-size: 0.85rem;
          font-weight: 500;
          color: #4B5563 !important;
          text-decoration: none !important;
          border-radius: 8px;
          transition: background 0.12s;
        }
        .ds-mobile-sub-item:hover { background: #F5F3EF; color: #0F0E17 !important; }

        /* ─── CTA BUTTON ─────────────────────────────────── */
        .ds-cta {
          display: inline-flex !important;
          align-items: center;
          font-size: 0.95rem !important;
          font-weight: 700 !important;
          color: #ffffff !important;
          background: #0F0E17 !important;
          padding: 12px 26px !important;
          border-radius: 100px !important;
          text-decoration: none !important;
          transition: background 0.2s, transform 0.15s !important;
          white-space: nowrap;
          margin-left: 10px;
          letter-spacing: 0.01em;
        }
        .ds-cta:hover {
          background: #7C6FF7 !important;
          transform: translateY(-1px);
        }

        /* ─── NAVBAR COLLAPSE (MOBILE) ───────────────────── */
        @media (max-width: 991px) {
          .ds-navbar.ds-scrolled,
          .ds-navbar {
            background: rgba(255, 255, 255, 0.98) !important;
            backdrop-filter: blur(20px);
          }
          .navbar-collapse {
            padding: 12px 0 20px;
            border-top: 1px solid #F0EDE8;
            margin-top: 12px;
          }
          .ds-link {
            padding: 10px 12px !important;
            border-radius: 10px;
          }
          .ds-cta {
            margin-top: 8px;
            margin-left: 12px !important;
            align-self: flex-start;
          }
          nav { gap: 0 !important; }
        }
      `}</style>
    </>
  );
}
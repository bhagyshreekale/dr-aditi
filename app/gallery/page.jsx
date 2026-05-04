"use client";

import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("clinic");

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
      '/images/gallery/gallery7.png'
    ],
    beforeafter: [
      "/images/services/fractional-co2-laser.jpg",
      "/images/services/hair-botox.jpg",
      "/images/services/meso-hair.jpg",
      "/images/services/old-scar-treatment.jpg",
      "/images/services/smp.jpg",
    ],
  };

  const activeImages = gallery[activeTab] || [];

  return (
    <main className="gallery-page">
      {/* HERO SECTION */}
      <section className="gallery-hero">
        <Container>
          <div className="hero-content">
            <h3>Derma Suite Gallery</h3>
            {/* <p>
              Explore our advanced dermatology treatments, state-of-the-art clinic
              interiors, and real patient transformations.
            </p> */}
          </div>
        </Container>
      </section>

      {/* CATEGORY TABS */}
      <section className="gallery-tabs">
        <Container>
          <div className="tabs-wrapper">
            <div className="tabs">
              <button
                className={activeTab === "clinic" ? "active" : ""}
                onClick={() => setActiveTab("clinic")}
              >
                Clinic
              </button>
              <button
                className={activeTab === "procedure" ? "active" : ""}
                onClick={() => setActiveTab("procedure")}
              >
                Dr. Procedure
              </button>
              <button
                className={activeTab === "beforeafter" ? "active" : ""}
                onClick={() => setActiveTab("beforeafter")}
              >
                Before & After
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-grid">
        <Container>
          {activeImages.length > 0 ? (
            <Row className="g-4">
              {activeImages.map((img, index) => (
                <Col lg={4} md={6} sm={12} key={index}>
                  <div
                    className="gallery-card"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`${activeTab} image ${index + 1}`} loading="lazy" />
                
                  </div>
                </Col>
              ))}
            </Row>
          ) : (
            <div className="empty-state">
              <h3>Coming Soon</h3>
              <p>This section is currently being updated.</p>
              <p>Check our social media for the latest updates.</p>
            </div>
          )}
        </Container>
      </section>

 
      {/* STYLES */}
      <style jsx>{`
        .gallery-page {
          background-color: #f8fafc;
          min-height: 100vh;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* HERO SECTION */
        .gallery-hero {
          padding: 100px 0 60px;
          background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
          text-align: center;
          border-bottom: 1px solid #e2e8f0;
        }

        .hero-content h3 {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
          letter-spacing: -0.02em;
        }

        .hero-content p {
          max-width: 600px;
          margin: 0 auto;
          color: #64748b;
          font-size: 1.125rem;
          line-height: 1.6;
        }

        /* TABS SECTION */
        .gallery-tabs {
          padding: 40px 0 20px;
          position: relative;
          z-index: 10;
        }

        .tabs-wrapper {
          display: flex;
          justify-content: center;
        }

        .tabs {
          display: inline-flex;
          background: #ffffff;
          border-radius: 50px;
          padding: 8px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
          border: 1px solid #e2e8f0;
        }

        .tabs button {
          border: none;
          padding: 12px 28px;
          background: transparent;
          border-radius: 40px;
          font-weight: 600;
          font-size: 0.95rem;
          color: #64748b;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tabs button:hover {
          color: #0f172a;
        }

        .tabs button.active {
          background: #0f172a;
          color: #ffffff;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
        }

        /* GRID SECTION */
        .gallery-grid {
          padding: 20px 0 100px;
        }

        .gallery-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          background: #ffffff;
          aspect-ratio: 4 / 3;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }

        .gallery-card:hover img {
          transform: scale(1.08);
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* OVERLAY */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-card:hover .overlay {
          opacity: 1;
        }

        .view-btn {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.9rem;
          border: 2px solid rgba(255, 255, 255, 0.8);
          padding: 8px 20px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
          transform: translateY(15px);
          transition: all 0.4s ease;
        }

        .gallery-card:hover .view-btn {
          transform: translateY(0);
        }

        /* EMPTY STATE */
        .empty-state {
          text-align: center;
          padding: 80px 20px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px dashed #cbd5e1;
          margin-top: 20px;
        }

        .empty-state h3 {
          font-size: 1.5rem;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .empty-state p {
          color: #64748b;
          margin: 0;
        }

        /* RESPONSIVE DESIGN */
        @media (max-width: 768px) {
          .gallery-hero {
            padding: 70px 0 40px;
          }
          
          .hero-content h1 {
            font-size: 2.2rem;
          }

          /* Keeping tabs horizontal on mobile */
          .tabs-wrapper {
            max-width: 100%;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
            padding-bottom: 10px; /* Space for hidden scrollbar */
          }
          
          /* Hide scrollbar for cleaner look */
          .tabs-wrapper::-webkit-scrollbar {
            display: none;
          }
          .tabs-wrapper {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }

          .tabs {
            display: inline-flex;
            flex-direction: row;
            white-space: nowrap; /* Prevents text from dropping to the next line */
          }

          .tabs button {
            padding: 10px 18px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </main>
  );
}
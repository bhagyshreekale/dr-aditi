import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "PEELS",
      class: "peels",
      items: [
        "Acne peel",
        "Glow peel",
        "Party peel",
        "Yellow peel",
        "Antiaging peel",
        "Dermaplaning",
        "Phenol peel",
        "Scalp peel",
        "Body peel",
      ],
    },
    {
      title: "FACIALS",
      class: "facials",
      items: [
        "Cleanup",
        "Hydrafacial",
        "Medifacial",
        "Oxygenofacial",
        "Vampire (PRP) facial",
        "Fire & Ice facials",
      ],
    },
    {
      title: "HAIR & SCALP",
      class: "hair",
      items: [
        "Hair transplant",
        "PRP injection",
        "GFC injection",
        "Hair Botox",
        "Micropigmentation scalp",
        "Meso hair",
      ],
    },
    {
      title: "ENERGY BASED DEVICES",
      class: "energy",
      items: [
        "Q switch laser",
        "Laser hair reduction",
        "RF cautery",
        "Dermaroller",
        "Fractional CO2 laser",
        "HIFU",
        "Lipolysis",
      ],
    },
    {
      title: "INJECTABLES",
      class: "inject",
      items: [
        "IV Glutathione",
        "Botox",
        "Mesobotox",
        "Fillers",
        "Profhilo",
        "PRP",
        "Skin boosters",
        "PDO Thread Lift",
      ],
    },
    {
      title: "OTHER PROCEDURES",
      class: "other",
      items: [
        "Dermapen Microneedling",
        "Cosmetic gynecology Nonsurgical",
        "Nail surgery",
        "Dermatosurgery",
        "Old Scar treatment",
        "Skin Biopsy",
        "Ear piercing",
        "Eyebrow Microblading",
      ],
    },
  ];

  return (
    <>
      {/* Banner Section */}
      <section className="services-banner">
        <div className="banner-overlay">
          <h1>Explore Our Services</h1>
          <p>
            Where advanced technology meets personalized skin and hair care.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-section">
        <div className="services-container">

          {services.map((cat, index) => (
            <div key={index} className={`service-column ${cat.class}`}>
              
              <h3>{cat.title}</h3>

              <ul>
                {cat.items.map((item, i) => (
                  <li key={i} className="service-item">
                    <Link
                      href={`/services/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[()]/g, "")}`}
                    >
                      {item} →
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </section>
    </>
  );
}
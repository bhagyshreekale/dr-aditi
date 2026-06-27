const servicesData = [

/* ---------------- PEELS ---------------- */

{
title: "Acne peel",
image: "../../images/services/acne-peel.webp",
description:
"Acne peel is a medical chemical exfoliation treatment that removes dead skin cells, unclogs pores and reduces acne breakouts. It also helps improve acne scars and skin texture.",
benefits: [
"Reduces active acne",
"Unclogs pores",
"Improves acne scars",
"Controls oil production",
"Improves skin texture"
],
disadvantages: [
"Mild redness for 1-2 days",
"Temporary peeling"
],
aftercare: [
"Use sunscreen regularly",
"Avoid direct sun exposure",
"Keep skin moisturized"
],
duration: "30 minutes",
sessions: "3–6 sessions",
idealFor: ["Acne", "Oily skin", "Acne marks"]
},

{
title: "Glow peel",
image: "../../images/services/glow-peel.webp",
description:
"Glow peel is a gentle chemical exfoliation designed to brighten dull skin and improve overall skin tone. It removes dead skin cells and stimulates fresh skin renewal.",
benefits: [
"Instant glowing skin",
"Improves skin tone",
"Removes dead skin cells",
"Enhances skin brightness"
],
disadvantages: [
"Temporary redness"
],
aftercare: [
"Apply sunscreen",
"Avoid harsh products",
"Use moisturizer"
],
duration: "25 minutes",
sessions: "2–4 sessions",
idealFor: ["Dull skin", "Uneven tone"]
},

{
title: "Party peel",
image: "../../images/services/party-peel.webp",
description:
"Party peel is a quick skin rejuvenation treatment designed to give instant glow before special events.",
benefits: [
"Instant glow",
"Improves skin brightness",
"No downtime"
],
disadvantages: [
"Results temporary"
],
aftercare: [
"Use sunscreen",
"Avoid sun exposure"
],
duration: "20 minutes",
sessions: "1 session",
idealFor: ["Events", "Dull skin"]
},

{
title: "Yellow peel",
image: "../../images/services/yellow-peel.webp",
description:
"Yellow peel is an advanced chemical peel that improves pigmentation, acne marks and uneven skin tone.",
benefits: [
"Reduces pigmentation",
"Improves skin texture",
"Brightens skin"
],
disadvantages: [
"Mild peeling for few days"
],
aftercare: [
"Strict sunscreen use",
"Avoid sun exposure"
],
duration: "30 minutes",
sessions: "3–4 sessions",
idealFor: ["Pigmentation", "Acne scars"]
},

{
title: "Antiaging peel",
image: "../../images/services/antiaging-peel.webp",
description:
"Antiaging peel stimulates collagen production to reduce fine lines and improve skin elasticity.",
benefits: [
"Reduces fine lines",
"Improves skin firmness",
"Stimulates collagen"
],
disadvantages: [
"Mild redness"
],
aftercare: [
"Moisturize skin",
"Use sunscreen"
],
duration: "30 minutes",
sessions: "4 sessions",
idealFor: ["Aging skin"]
},

{
  title: "Dermaplaning",
image: "../../images/services/dermaplaning.webp",
  description:
    "Dermaplaning is a safe and highly effective physical exfoliation procedure. It involves using a specialized surgical scalpel to gently scrape away the top layer of dead skin cells along with fine vellus hair (peach fuzz), revealing a smoother, brighter complexion.",
  benefits: [
    "Removes fine vellus hair (peach fuzz)",
    "Provides instant skin brightening",
    "Creates a smooth surface for makeup application",
    "Increases absorption of skincare products",
    "Reduces the appearance of fine lines"
  ],
  disadvantages: [
    "Slight skin sensitivity for 24 hours",
    "Not suitable for active cystic acne"
  ],
  aftercare: [
    "Apply a broad-spectrum sunscreen",
    "Avoid harsh exfoliants or retinols for 72 hours",
    "Keep skin hydrated with a gentle moisturizer"
  ],
  duration: "45 minutes",
  sessions: "Every 4–6 weeks",
  idealFor: ["Dull skin", "Peach fuzz", "Uneven skin texture"]
},

{
  title: "Phenol peel",
image: "../../images/services/phenol-peel.webp",
  description:
    "Phenol peel is the strongest type of chemical peel, penetrating deep into the dermal layers to treat severe skin concerns. It is highly effective for deep wrinkles, significant sun damage, and precancerous skin growths, essentially 'resetting' the skin's texture.",
  benefits: [
    "Dramatic reduction of deep wrinkles",
    "Corrects severe sun damage and age spots",
    "Tightens sagging skin for a lifting effect",
    "Smooths deep acne scars",
    "Long-lasting results with just one treatment"
  ],
  disadvantages: [
    "Significant downtime (10–14 days)",
    "Significant redness and swelling initially",
    "Requires professional monitoring during application"
  ],
  aftercare: [
    "Strict avoidance of sun exposure for several months",
    "Apply prescribed healing ointments religiously",
    "Sleep with head elevated to reduce swelling",
    "Use high-SPF physical sunblock once healed"
  ],
  duration: "60–90 minutes",
  sessions: "Usually 1 session (lifetime results)",
  idealFor: ["Deep wrinkles", "Severe sun damage", "Advanced aging", "Severe scarring"]
},

{
  title: "Scalp peel",
  image: "../../images/services/scalp-peel.webp",
  description:
    "A Scalp peel is a specialized exfoliation treatment for the head that uses chemical or physical exfoliants to remove buildup, excess oil, and dead skin cells. It detoxifies the hair follicles, improves scalp health, and creates an optimal environment for healthy hair growth.",
  benefits: [
    "Removes dandruff and product buildup",
    "Unclogs hair follicles to promote growth",
    "Balances oil production on the scalp",
    "Relieves scalp itchiness and irritation",
    "Improves blood circulation to hair roots"
  ],
  disadvantages: [
    "Temporary scalp sensitivity",
    "Mild flaking for 1-2 days as dead skin clears"
  ],
  aftercare: [
    "Avoid washing hair for 24 hours",
    "Use a gentle, sulfate-free shampoo",
    "Avoid chemical hair treatments (color/perm) for 1 week",
    "Protect scalp from direct sunlight"
  ],
  duration: "40 minutes",
  sessions: "Monthly or as recommended",
  idealFor: ["Dandruff", "Oily scalp", "Clogged follicles", "Thinning hair"]
},


{
  title: "Body peel",
  image: "../../images/services/body-peel.webp",
  description:
    "A Body peel involves the application of chemical exfoliants to larger areas of the body, such as the back, arms, legs, or chest. It effectively treats body acne, keratosis pilaris (chicken skin), and tanning, leaving the skin on your body as smooth and radiant as your face.",
  benefits: [
    "Treats body acne and 'bacne'",
    "Smooths Keratosis Pilaris (rough bumps)",
    "Lightens pigmentation and sun tanning",
    "Improves skin texture on elbows and knees",
    "Fades body scars and stretch marks"
  ],
  disadvantages: [
    "Dryness or itching during the peeling phase",
    "Visible peeling for 3–7 days depending on area"
  ],
  aftercare: [
    "Wear loose, breathable cotton clothing",
    "Apply heavy moisturizer twice daily",
    "Avoid hot showers or saunas for 48 hours",
    "Apply sunscreen to any exposed treated areas"
  ],
  duration: "45–60 minutes",
  sessions: "3–5 sessions",
  idealFor: ["Body pigmentation", "Back acne", "Rough skin texture", "Tanned skin"]
},
/* ---------------- FACIALS ---------------- */

{
  title: "Cleanup",
  image: "../../images/services/cleanup.webp",
  description:
    "A professional skin cleanup is an essential maintenance treatment that focuses on deep cleansing and manual extraction. It removes surface impurities, whiteheads, and blackheads while refreshing the skin's surface without the intensive steps of a full medical facial.",
  benefits: [
    "Removes blackheads and whiteheads",
    "Clears surface dirt and pollutants",
    "Prevents future acne breakouts",
    "Instantly refreshes tired skin",
    "Improves skin breathability"
  ],
  disadvantages: [
    "Temporary redness from extractions",
    "Mild sensitivity for a few hours"
  ],
  aftercare: [
    "Avoid touching your face with dirty hands",
    "Do not use heavy makeup for 12 hours",
    "Apply a light, non-comedogenic moisturizer",
    "Wash face with cold water for the first 24 hours"
  ],
  duration: "30–45 minutes",
  sessions: "Every 2–4 weeks",
  idealFor: ["Oily skin", "Blackheads", "Regular skin maintenance"]
},
{
title: "Hydrafacial",
image: "../../images/services/hydrafacial.webp",
description:
"Hydrafacial is an advanced facial treatment that deeply cleanses, exfoliates and hydrates the skin using vortex technology.",
benefits: [
"Deep skin cleansing",
"Instant glow",
"Hydrates skin",
"Removes blackheads"
],
disadvantages: [
"Mild redness for few hours"
],
aftercare: [
"Avoid makeup for 24 hours",
"Apply sunscreen"
],
duration: "45 minutes",
sessions: "Monthly",
idealFor: ["All skin types"]
},
{
  title: "Oxygenofacial",
  image: "../../images/services/oxygenofacial.webp",
  description:
    "An Oxygenofacial is a non-invasive treatment that delivers highly concentrated oxygen molecules and a specialized serum of vitamins and antioxidants directly into the skin. This 'airbrushed' delivery system hydrates the skin instantly and stimulates the renewal of cells for a plump, dewy look.",
  benefits: [
    "Provides an instant 'red carpet' glow",
    "Deeply hydrates and plumps the skin",
    "Calms skin inflammation and redness",
    "Improves blood circulation in facial tissues",
    "Reduces the appearance of fine lines"
  ],
  disadvantages: [
    "Results are temporary (ideal for events)",
    "Not suitable for severe cystic acne"
  ],
  aftercare: [
    "Keep the skin hydrated with the provided serum",
    "Avoid washing the face for at least 6 hours",
    "Drink plenty of water to maintain hydration",
    "Apply SPF if going outdoors"
  ],
  duration: "45 minutes",
  sessions: "Individual sessions or monthly maintenance",
  idealFor: ["Dehydrated skin", "Dull complexion", "Special events", "Sensitive skin"]
},
{
title: "Medifacial",
image: "../../images/services/cosmeticderma.webp",
description:
"Medifacial is a dermatologist-supervised facial designed to treat specific skin concerns such as acne, pigmentation and dullness.",
benefits: [
"Customized treatment",
"Improves skin health",
"Professional skincare"
],
disadvantages: [
"Needs regular sessions"
],
aftercare: [
"Follow dermatologist skincare routine"
],
duration: "40 minutes",
sessions: "Monthly",
idealFor: ["Skin rejuvenation"]
},


{
  title: "Vampire (PRP) facial",
  image: "../../images/services/vampire-prp-facial.webp",
  description:
    "The Vampire Facial, or Platelet-Rich Plasma (PRP) facial, combines microneedling with the application of your own concentrated platelets. These growth factors penetrate deep into the skin to accelerate healing, boost collagen production, and dramatically improve skin texture and tone.",
  benefits: [
    "Dramatically boosts collagen and elastin",
    "Reduces the appearance of fine lines and wrinkles",
    "Improves skin texture and pore size",
    "Fades acne scars and surgical scars",
    "Provides long-term skin rejuvenation"
  ],
  disadvantages: [
    "Requires a small blood draw",
    "Redness and 'sandpaper' texture for 2–3 days",
    "Mild swelling or bruising at the site"
  ],
  aftercare: [
    "Do not wash your face for the first 24 hours",
    "Avoid direct sunlight and heat for 72 hours",
    "Use only a gentle, hydrating cleanser once healing begins",
    "Strictly avoid active ingredients (Retinol/Vitamin C) for 5 days"
  ],
  duration: "60–90 minutes",
  sessions: "3–4 sessions (4 weeks apart)",
  idealFor: ["Acne scars", "Aging skin", "Uneven texture", "Fine lines"]
},

{
  title: "Fire & Ice facials",
  image: "../../images/services/fire-&-ice.webp",
  description:
    "The Fire & Ice facial is a clinical-grade treatment designed to rapidly and safely resurface the skin. The 'Fire' portion is an intensive resurfacing mask that heats the skin, while the 'Ice' portion is a rejuvenating mask that cools and hydrates, resulting in a smooth, polished complexion without any downtime.",
  benefits: [
    "Reduces the appearance of fine lines and wrinkles",
    "Deeply cleanses clogged pores",
    "Smooths and softens skin texture",
    "Encourages cellular renewal",
    "Immediate brightening and 'glow' effect"
  ],
  disadvantages: [
    "Temporary 'flushing' or redness (usually subsides in 1-2 hours)",
    "Not recommended for extremely sensitive skin"
  ],
  aftercare: [
    "Apply a broad-spectrum SPF 30+ daily",
    "Use a gentle, non-stripping cleanser",
    "Avoid active exfoliants (AHAs/BHAs) for 48 hours",
    "Maintain hydration by drinking plenty of water"
  ],
  duration: "50 minutes",
  sessions: "Monthly for cumulative anti-aging results",
  idealFor: ["Dull skin", "Uneven texture", "Acne-prone skin", "Fine lines"]
},
/* ---------------- HAIR ---------------- */

{
title: "Hair transplant",
image: "../../images/services/hair-transplant.webp",
description:
"Hair transplant is a surgical procedure that restores hair in bald areas using healthy hair follicles from the donor area.",
benefits: [
"Permanent hair growth",
"Natural looking results",
"Improves confidence"
],
disadvantages: [
"Minor swelling",
"Recovery time needed"
],
aftercare: [
"Avoid touching scalp",
"Follow doctor instructions"
],
duration: "4-6 hours",
sessions: "1 session",
idealFor: ["Hair loss", "Baldness"]
},

{
title: "PRP injection",
image: "../../images/services/prp-hair.webp",
description:
"PRP therapy uses your own platelet-rich plasma to stimulate hair growth and improve hair thickness.",
benefits: [
"Natural treatment",
"Improves hair density",
"Reduces hair fall"
],
disadvantages: [
"Needs multiple sessions"
],
aftercare: [
"Avoid washing hair for 24 hours"
],
duration: "45 minutes",
sessions: "4–6 sessions",
idealFor: ["Hair thinning"]
},

{
  title: "GFC injection",
  image: "../../images/services/gfc-hair.webp",
  description:
    "Growth Factor Concentrate (GFC) is an advanced, highly concentrated growth factor preparation engineered from the patient's own blood. Unlike traditional PRP, GFC is acellular and utilizes specifically activated growth factors (like VEGF and PDGF) to directly stimulate hair follicles, resulting in superior hair regeneration and density.",
  benefits: [
    "Highly concentrated growth factors for faster results",
    "Reduces hair fall significantly",
    "Increases hair volume and shaft thickness",
    "Non-surgical and minimally invasive",
    "Acellular preparation reduces risk of post-injection pain"
  ],
  disadvantages: [
    "Requires a blood draw",
    "Temporary soreness at the injection site",
    "May require multiple sessions for peak results"
  ],
  aftercare: [
    "Avoid washing hair for 24 hours",
    "Do not use heavy hair styling products for 48 hours",
    "Avoid strenuous exercise or sweating for 24 hours",
    "Gentle scalp massage after 24 hours can help distribution"
  ],
  duration: "45–60 minutes",
  sessions: "3–6 sessions (spaced 1 month apart)",
  idealFor: ["Hair thinning", "Early-stage alopecia", "Post-hair transplant maintenance"]
},


{
  title: "Hair Botox",
  image: "../../images/services/hair-botox.webp",
  description:
    "Despite the name, Hair Botox does not involve needles. It is a deep-conditioning treatment that repairs damaged hair fibers using a powerful cocktail of nutrients, including proteins, amino acids, vitamins, and lipids. It works by 'filling in' the broken or thin areas of each hair strand to make it look full, lustrous, and frizz-free.",
  benefits: [
    "Eliminates frizz and flyaways",
    "Restores moisture to dry, damaged hair",
    "Repairs split ends and strengthens the hair shaft",
    "Adds significant shine and softness",
    "Makes hair more manageable for styling"
  ],
  disadvantages: [
    "Not a permanent straightening treatment",
    "Effect fades over 2–4 months",
    "Slightly expensive compared to regular spa treatments"
  ],
  aftercare: [
    "Use sulfate-free and paraben-free shampoos",
    "Avoid washing hair for the first 48 hours",
    "Minimize use of high-heat styling tools",
    "Use a silk or satin pillowcase to maintain smoothness"
  ],
  duration: "90–120 minutes",
  sessions: "Individual session (lasts 3–4 months)",
  idealFor: ["Frizzy hair", "Damaged hair", "Split ends", "Dull hair"]
},

{
  title: "Micropigmentation scalp",
  image: "../../images/services/smp.webp",
  description:
    "Scalp Micropigmentation (SMP) is a non-surgical cosmetic treatment that uses highly specialized equipment and techniques to inject medical-grade pigment into the scalp. This creates the appearance of tiny hair follicles, effectively mimicking a closely shaved head or adding density to thinning areas.",
  benefits: [
    "Creates a natural-looking hairline",
    "Restores the look of hair density in thinning areas",
    "Camouflages scalp scars from surgery or accidents",
    "Immediate, long-lasting results",
    "Low maintenance compared to hair transplants"
  ],
  disadvantages: [
    "Pigment may fade over several years (requires touch-ups)",
    "Mild discomfort during the procedure",
    "Temporary redness for 2–4 days"
  ],
  aftercare: [
    "Do not wash or sweat heavily for 4-5 days",
    "Avoid direct sun exposure on the scalp for 2 weeks",
    "Apply prescribed healing ointment to keep the scalp hydrated",
    "Avoid swimming or saunas for 28 days"
  ],
  duration: "2–4 hours (per session)",
  sessions: "2–3 sessions (spaced 1-2 weeks apart)",
  idealFor: ["Male pattern baldness", "Thinning hair", "Scalp scars", "Alopecia"]
},

{
  title: "Meso hair",
  image: "../../images/services/meso-hair.webp",
  description:
    "Meso hair, or Hair Mesotherapy, is a non-surgical treatment where a specialized cocktail of vitamins, minerals, amino acids, and co-enzymes is injected directly into the scalp's mesoderm (middle layer). This nutrient-rich boost improves microcirculation and delivers essential nourishment directly to the hair follicles to stop hair fall and trigger regrowth.",
  benefits: [
    "Delivers nutrients directly to the hair roots",
    "Slows down the hair shedding process",
    "Neutralizes excess DHT (dihydrotestosterone) hormones",
    "Improves scalp blood circulation",
    "Stimulates hair follicles to enter the growth phase"
  ],
  disadvantages: [
    "Mild soreness or 'pin-prick' sensation during treatment",
    "Requires a series of sessions for visible results",
    "Temporary scalp bumps that subside within a few hours"
  ],
  aftercare: [
    "Do not wash your hair for 12–24 hours",
    "Avoid using any hair products or dyes for 48 hours",
    "Protect the scalp from dust and direct sunlight for a day",
    "Stay hydrated to help the nutrients circulate"
  ],
  duration: "30–40 minutes",
  sessions: "6–10 sessions (weekly or bi-weekly)",
  idealFor: ["Telogen effluvium", "Hair thinning", "Nutritional deficiency hair loss"]
},

/* ---------------- LASERS ---------------- */

{
  title: "Q switch laser",
  image: "../../images/services/q-switch-laser.webp",
  description:
    "The Q-switch laser is a non-invasive technology that delivers high-intensity light pulses in billionths of a second. This energy shatters excess skin pigment (melanin) or tattoo ink into tiny particles without damaging the surrounding skin. It is the gold standard for treating deep-seated pigmentation and achieving a laser carbon peel 'Hollywood' glow.",
  benefits: [
    "Effectively removes stubborn tattoos",
    "Lightens deep pigmentation like Melasma and Freckles",
    "Evens out skin tone and reduces birthmarks",
    "Minimizes enlarged pores and fine lines",
    "Stimulates collagen for skin rejuvenation"
  ],
  disadvantages: [
    "Temporary redness or mild swelling",
    "Slight crusting or darkening of pigment before it fades",
    "Multiple sessions required for tattoo or deep pigment removal"
  ],
  aftercare: [
    "Strict sun protection with SPF 50+ is mandatory",
    "Avoid picking at any treated spots or crusts",
    "Use a gentle, fragrance-free moisturizer",
    "Avoid swimming or saunas for 48 hours"
  ],
  duration: "20–40 minutes",
  sessions: "4–8 sessions (depending on the concern)",
  idealFor: ["Tattoo removal", "Pigmentation", "Melasma", "Uneven skin tone"]
},
{
title: "Laser hair reduction",
image: "../../images/services/laser.webp",
description:
"Laser hair reduction uses advanced laser technology to permanently reduce unwanted hair growth.",
benefits: [
"Long term hair reduction",
"Smooth skin",
"Safe treatment"
],
disadvantages: [
"Multiple sessions required"
],
aftercare: [
"Avoid sun exposure",
"Apply sunscreen"
],
duration: "30 minutes",
sessions: "6–8 sessions",
idealFor: ["Unwanted hair"]
},

{
title: "Fractional CO2 laser",
image: "../../images/services/fractional-co2-laser.webp",
description:
"Fractional CO2 laser is an advanced resurfacing treatment that improves acne scars, wrinkles and skin texture.",
benefits: [
"Reduces acne scars",
"Improves skin texture",
"Stimulates collagen"
],
disadvantages: [
"Downtime 3–5 days"
],
aftercare: [
"Avoid sun exposure",
"Use healing cream"
],
duration: "40 minutes",
sessions: "2–3 sessions",
idealFor: ["Acne scars", "Wrinkles"]
},


{
  title: "RF cautery",
  image: "../../images/services/rf-cautery.webp",
  description:
    "RF cautery uses high-frequency radio waves to perform precise surgical removal of unwanted skin growths. The energy creates heat to vaporize the tissue with minimal damage to the surrounding skin, allowing for bloodless removal of lesions and faster healing compared to traditional surgical methods.",
  benefits: [
    "Quick and effective removal of skin growths",
    "Minimal bleeding due to instant cauterization",
    "High precision with minimal scarring",
    "Low risk of infection",
    "Short procedure time with instant results"
  ],
  disadvantages: [
    "Formation of a small scab at the site",
    "Temporary redness or swelling",
    "Mild stinging sensation during the healing phase"
  ],
  aftercare: [
    "Apply antibiotic ointment as prescribed",
    "Do not pick or scratch the scabs",
    "Keep the treated area clean and dry",
    "Avoid direct sun exposure until fully healed"
  ],
  duration: "15–30 minutes",
  sessions: "Usually 1 session (per growth)",
  idealFor: ["Skin tags", "Warts", "Moles", "Seborrheic keratosis", "Cherry angiomas"]
},
{
  title: "Dermaroller",
  image: "../../images/services/dermaroller.webp",
  description:
    "Dermaroller is a microneedling device featuring hundreds of tiny medical-grade needles. As it rolls over the skin, it creates controlled micro-injuries that trigger the body's natural healing response. This process stimulates the production of collagen and elastin, effectively resurfacing the skin from within.",
  benefits: [
    "Dramatically improves acne scarring",
    "Reduces the appearance of fine lines and wrinkles",
    "Shrinks enlarged pores",
    "Enhances the absorption of topical serums",
    "Evens out skin texture and tone"
  ],
  disadvantages: [
    "Mild redness and sun-burn sensation for 24-48 hours",
    "Pinpoint bleeding during the procedure",
    "Skin may feel dry or flaky during the healing phase"
  ],
  aftercare: [
    "Use a gentle cleanser and luke-warm water",
    "Apply a soothing, hydrating serum (like Hyaluronic Acid)",
    "Strictly avoid sun exposure for 48 hours",
    "Do not use makeup or active acids (Retinol/Vitamin C) for 3 days"
  ],
  duration: "45–60 minutes",
  sessions: "3–6 sessions (spaced 4–6 weeks apart)",
  idealFor: ["Deep acne scars", "Fine lines", "Stretch marks", "Enlarged pores"]
},

{
  title: "HIFU",
  image: "../../images/services/hifu.webp",
  description:
    "HIFU is a non-invasive therapeutic technique that uses focused ultrasound energy to target the deep layers of the skin, including the SMAS (Superficial Muscular Aponeurotic System) layer usually addressed in surgical face lifts. The heat energy triggers a natural injury-repair process, resulting in significant skin tightening and lifting without any incisions.",
  benefits: [
    "Non-surgical face lifting and neck tightening",
    "Sharpens the jawline and reduces double chin",
    "Lifts sagging eyelids and eyebrows",
    "Smoothens wrinkles and fine lines",
    "Long-lasting results with zero downtime"
  ],
  disadvantages: [
    "Mild aching or tingling sensation during treatment",
    "Temporary swelling or slight redness",
    "Results appear gradually over 2–3 months"
  ],
  aftercare: [
    "Avoid washing face with hot water for 24 hours",
    "Apply soothing gels if the skin feels warm",
    "Keep the skin well-hydrated and use sun protection",
    "Avoid strenuous exercise for 24 hours"
  ],
  duration: "60–90 minutes",
  sessions: "1–2 sessions (per year)",
  idealFor: ["Sagging skin", "Loose jowls", "Double chin", "Fine lines"]
},

{
  title: "Lipolysis",
  image: "../../images/services/lipolysis.webp",
  description:
    "Lipolysis, often referred to as 'fat-dissolving injections,' is a non-surgical procedure used to reduce localized fat deposits. By injecting specialized compounds like deoxycholic acid into the subcutaneous fat layer, the fat cell membranes are disrupted, causing the fat to dissolve and be naturally eliminated by the body's lymphatic system.",
  benefits: [
    "Reduces stubborn fat pockets resistant to diet and exercise",
    "Contours the jawline and reduces double chins",
    "No surgical incisions or general anesthesia required",
    "Permanently destroys treated fat cells",
    "Minimal downtime compared to liposuction"
  ],
  disadvantages: [
    "Temporary swelling, bruising, and tenderness",
    "Numbness in the treated area for a few days",
    "Multiple sessions usually required for optimal contouring"
  ],
  aftercare: [
    "Massage the treated area as directed by the professional",
    "Drink at least 2-3 liters of water daily to flush out fat",
    "Avoid strenuous exercise for 48 hours",
    "Wear a compression garment if recommended for the treated area"
  ],
  duration: "30–45 minutes",
  sessions: "2–4 sessions (spaced 4–6 weeks apart)",
  idealFor: ["Double chin", "Love handles", "Bra fat", "Small localized fat deposits"]
},

{
  title: "IV Glutathione",
  image: "../../images/services/iv-glutathione.webp",
  description:
    "IV Glutathione therapy delivers a high dose of the body's 'master antioxidant' directly into the bloodstream for 100% absorption. This treatment works by inhibiting the enzyme tyrosinase, which produces melanin, leading to systemic skin brightening, detoxification of the liver, and a significant boost in overall skin radiance.",
  benefits: [
    "Brightens skin tone evenly across the whole body",
    "Reduces oxidative stress and detoxifies cells",
    "Fades dark spots, melasma, and hyperpigmentation",
    "Boosts the immune system and energy levels",
    "Promotes a healthy, 'lit-from-within' glow"
  ],
  disadvantages: [
    "Requires an intravenous (IV) line",
    "Results vary based on metabolism and lifestyle",
    "Temporary metallic taste in the mouth during infusion"
  ],
  aftercare: [
    "Stay hydrated by drinking plenty of water",
    "Avoid smoking and alcohol to maintain antioxidant levels",
    "Use high-SPF sunscreen to protect the brightening results",
    "Maintain a diet rich in Vitamin C to boost glutathione efficacy"
  ],
  duration: "30–60 minutes",
  sessions: "6–10 sessions (weekly or bi-weekly)",
  idealFor: ["Dull skin", "Uneven skin tone", "Hyperpigmentation", "Overall skin brightening"]
},
/* ---------------- INJECTABLES ---------------- */

{
  title: "Mesobotox",
  image: "../../images/services/mesobotox.webp",
  description:
    "Mesobotox is a specialized cosmetic treatment where highly diluted Botox is injected in micro-droplets into the superficial layer of the skin (dermis) rather than the muscles. This technique targets sweat glands, oil glands, and the tiny erector pili muscles, resulting in tightened pores, reduced oiliness, and a smooth, 'filtered' skin texture without affecting facial expressions.",
  benefits: [
    "Creates a smooth, 'Glass Skin' effect",
    "Shrinks enlarged pores significantly",
    "Reduces excessive oil production and sweating",
    "Softens fine lines and crepey skin texture",
    "Tightens the skin for a subtle lifting effect"
  ],
  disadvantages: [
    "Temporary redness or tiny bumps at injection sites",
    "Short-term results (typically 2–3 months)",
    "Not suitable for deep, muscle-related wrinkles"
  ],
  aftercare: [
    "Do not lie down for 4 hours after the treatment",
    "Avoid touching or rubbing the face for 24 hours",
    "Avoid heat exposure (saunas/hot showers) for 48 hours",
    "Skip heavy exercise for the first 24 hours"
  ],
  duration: "30–45 minutes",
  sessions: "Individual session (repeat every 3 months)",
  idealFor: ["Large pores", "Oily skin", "Fine lines", "Sweaty face"]
},
{
title: "Botox",
image: "../../images/services/Botox-derma.webp",
description:
"Botox is an injectable treatment used to relax facial muscles and reduce wrinkles and fine lines.",
benefits: [
"Smooth skin",
"Reduces wrinkles",
"Quick procedure"
],
disadvantages: [
"Temporary results"
],
aftercare: [
"Avoid rubbing treated area",
"No exercise for 24 hours"
],
duration: "20 minutes",
sessions: "Every 4–6 months",
idealFor: ["Wrinkles", "Fine lines"]
},

{
title: "Fillers",
image: "../../images/services/fillers.webp",
description:
"Dermal fillers restore lost volume, enhance facial contours and improve wrinkles.",
benefits: [
"Instant results",
"Improves facial volume",
"Enhances lips and cheeks"
],
disadvantages: [
"Mild swelling"
],
aftercare: [
"Avoid touching area"
],
duration: "30 minutes",
sessions: "6–12 months",
idealFor: ["Facial volume loss"]
}
,
{
  title: "Profhilo",
  image: "../../images/services/profhilo.webp",
  description:
    "Profhilo is an ultra-pure hyaluronic acid treatment that acts as a 'bioremodeler' rather than a traditional filler. It uses patented NAHYCO® technology to deliver one of the highest concentrations of HA on the market. Once injected into specific Bio-Aesthetic Points (BAP), it spreads like honey to stimulate four different types of collagen and elastin, deeply hydrating the skin and curing laxity from within.",
  benefits: [
    "Intense deep-tissue hydration and 'inner' glow",
    "Tightens sagging skin and improves firmness",
    "Restores skin's natural bounce and elasticity",
    "Improves overall skin quality and tone",
    "Requires fewer injection points than traditional skin boosters"
  ],
  disadvantages: [
    "Temporary small bumps at injection points (subside in 24 hours)",
    "Requires a two-part initial treatment for best results",
    "Mild tenderness or bruising"
  ],
  aftercare: [
    "Avoid strenuous exercise for 24 hours",
    "Do not apply makeup or touch injection sites for 12 hours",
    "Avoid saunas, steam rooms, or hot baths for 48 hours",
    "Maintain high water intake to support the HA hydration"
  ],
  duration: "30 minutes",
  sessions: "2 sessions (spaced 4 weeks apart)",
  idealFor: ["Skin laxity", "Fine lines", "Crepey skin", "Dehydrated skin"]
},
{
  title: "PRP",
  image: "../../images/services/prp.webp",
  description:
    "Platelet-Rich Plasma (PRP) therapy involves extracting a small amount of your own blood, processing it to concentrate the platelets, and reinjecting it into the skin or scalp. These platelets release essential growth factors that accelerate tissue repair, stimulate collagen production, and revitalize dormant hair follicles.",
  benefits: [
    "Naturally stimulates collagen and elastin production",
    "Effective for reducing dark circles and under-eye hollows",
    "Promotes hair regrowth and increases hair density",
    "Uses your own blood, eliminating the risk of allergic reactions",
    "Improves overall skin texture and tone"
  ],
  disadvantages: [
    "Requires a blood draw (venipuncture)",
    "Mild swelling, bruising, or redness at injection sites",
    "Results appear gradually over several weeks"
  ],
  aftercare: [
    "Avoid washing the treated area for 24 hours",
    "Do not use harsh chemicals or active skincare for 48 hours",
    "Avoid strenuous exercise and excessive sweating for 24 hours",
    "Stay hydrated to help the healing process"
  ],
  duration: "45–60 minutes",
  sessions: "3–6 sessions (spaced 4 weeks apart)",
  idealFor: ["Hair thinning", "Dark circles", "Fine lines", "Skin rejuvenation"]
},

{
  title: "Skin boosters",
  image: "../../images/services/skin-boosters.webp",
  description:
    "Skin boosters are micro-injectable treatments using soft, gel-like hyaluronic acid (HA) to provide deep, long-lasting hydration from within. Unlike traditional fillers that add volume or change facial shape, skin boosters act as an 'internal moisturizer' to improve skin quality, smoothness, and elasticity by stimulating the production of collagen and elastin.",
  benefits: [
    "Delivers intense, deep-tissue hydration",
    "Improves skin elasticity and firmness",
    "Softens early fine lines and crepey texture",
    "Provides a natural 'lit-from-within' glow",
    "Refines skin tone and minimizes enlarged pores"
  ],
  disadvantages: [
    "Temporary pinpoint bruising or redness",
    "Small bumps at injection sites (usually subside in 24 hours)",
    "Requires maintenance sessions for lasting results"
  ],
  aftercare: [
    "Do not touch or massage the treated area for 6 hours",
    "Avoid applying heavy makeup for 24 hours",
    "Avoid strenuous exercise and heat (saunas) for 48 hours",
    "Stay well-hydrated to help the HA bind with water"
  ],
  duration: "30–45 minutes",
  sessions: "2–3 sessions (spaced 3–4 weeks apart)",
  idealFor: ["Dehydrated skin", "Dull complexion", "Fine lines", "Aging hands or neck"]
},

{
  title: "PDO thread lift",
  image: "../../images/services/pdo-thread-lift.webp",
  description:
    "A PDO (Polydioxanone) thread lift is a minimally invasive procedure that uses dissolvable medical-grade sutures to lift and tighten sagging skin. The threads are inserted into the deeper layers of the skin to provide an immediate mechanical lift while simultaneously stimulating the body's natural production of collagen, elastin, and hyaluronic acid for long-term rejuvenation.",
  benefits: [
    "Immediate lifting of sagging tissues",
    "Stimulates long-term collagen production",
    "Non-surgical with significantly less downtime than a facelift",
    "Threads naturally dissolve over 6–9 months",
    "Improves skin texture and elasticity over time"
  ],
  disadvantages: [
    "Temporary swelling, bruising, or mild puckering",
    "Minor discomfort or a feeling of 'tightness' initially",
    "Risk of thread visibility or migration if not performed by an expert"
  ],
  aftercare: [
    "Avoid exaggerated facial expressions for 1–2 weeks",
    "Sleep on your back for the first week to avoid pressure",
    "Do not rub or massage the face for 3 weeks",
    "Avoid strenuous exercise and heat (saunas/hot tubs) for 1 week"
  ],
  duration: "45–90 minutes",
  sessions: "Individual session (results last 12–18 months)",
  idealFor: ["Sagging jowls", "Loose neck skin", "Nasolabial folds", "Drooping eyebrows"]
},

{
  title: "Dermapen microneedling",
  image: "../../images/services/dermapen.webp",
  description:
    "Dermapen is an advanced automated microneedling device that uses a sterile, oscillating needle tip to create thousands of precise vertical micro-channels in the skin. This 'fractional' approach triggers a powerful wound-healing response that induces natural collagen and elastin production, making it more efficient and less painful than traditional manual rollers.",
  benefits: [
    "Greater precision in hard-to-reach areas like the nose and eyes",
    "Minimizes fine lines, wrinkles, and deep acne scars",
    "Highly effective for treating surgical or traumatic scars",
    "Adjustable needle depth for customized treatment of different zones",
    "Less epidermal damage and shorter recovery time than rolling"
  ],
  disadvantages: [
    "Temporary redness (similar to a mild sunburn) for 24–48 hours",
    "Slight swelling and skin sensitivity immediately after",
    "Multiple treatments required for significant scar revision"
  ],
  aftercare: [
    "Keep the skin clean and avoid touching the face for 12 hours",
    "Use only lukewarm water for the first 24 hours",
    "Apply high-protection SPF 50+ daily (avoid direct sun)",
    "Avoid active ingredients like Retinol or Vitamin C for 5 days"
  ],
  duration: "45–60 minutes",
  sessions: "4–6 sessions (spaced 4–6 weeks apart)",
  idealFor: ["Acne scarring", "Fine lines", "Stretch marks", "Pigmentation", "Enlarged pores"]
},

{
  title: "Cosmetic gynecology nonsurgical",
  image: "../../images/services/cosmetic-gynecology.webp",
  description:
    "Nonsurgical cosmetic gynecology involves advanced, minimally invasive treatments designed to rejuvenate the intimate area. Using technologies like CO2 lasers, Radiofrequency (RF), or specialized fillers, these procedures address concerns such as laxity, dryness, and pigmentation. These treatments work by stimulating collagen production and improving blood flow to the vaginal tissues without the need for surgery.",
  benefits: [
    "Improves vaginal tightness and muscle tone",
    "Enhances natural lubrication and reduces dryness",
    "Non-surgical with no incisions or downtime",
    "Helps manage mild urinary incontinence",
    "Improves aesthetic appearance and sexual confidence"
  ],
  disadvantages: [
    "May require a series of sessions for optimal results",
    "Temporary sensitivity or mild discharge for 24–48 hours",
    "Not a substitute for surgical repair in severe cases"
  ],
  aftercare: [
    "Abstain from sexual intercourse for 3–5 days",
    "Avoid using tampons or swimming for 1 week",
    "Maintain high standards of personal hygiene",
    "Avoid strenuous lower-body exercises for 48 hours"
  ],
  duration: "30–45 minutes",
  sessions: "3 sessions (spaced 4 weeks apart)",
  idealFor: ["Vaginal laxity", "Post-menopausal dryness", "Mild stress incontinence", "Intimate rejuvenation"]
},

{
  title: "Nail surgery",
  image: "../../images/services/nail-surgery.webp",
  description:
    "Nail surgery is a minor dermatological procedure performed to treat chronic or painful nail conditions. The most common form is a partial or total nail avulsion, where a portion or the entirety of the nail plate is removed under local anesthesia. For permanent solutions to ingrown nails, chemical matricectomy using phenol is often used to prevent the problematic edge from regrowing.",
  benefits: [
    "Provides immediate relief from chronic pain and pressure",
    "Permanently resolves recurring ingrown toenails",
    "Treats underlying fungal infections that are resistant to topical therapy",
    "Allows for biopsy and diagnosis of suspicious nail bed lesions",
    "Prevents secondary bacterial infections (paronychia)"
  ],
  disadvantages: [
    "Requires local anesthetic injection",
    "Temporary restriction of physical activities or tight footwear",
    "Small risk of nail regrowth or cosmetic deformity if the matrix is treated"
  ],
  aftercare: [
    "Keep the foot elevated for the first 24–48 hours",
    "Keep the surgical dressing dry and clean until the first follow-up",
    "Wear open-toed shoes or loose footwear during the healing phase",
    "Take prescribed antibiotics or painkillers as directed"
  ],
  duration: "30–45 minutes",
  sessions: "Usually 1 session (with follow-up for dressing change)",
  idealFor: ["Ingrown toenails (Onychocryptosis)", "Onychomycosis (Fungal nail)", "Nail trauma", "Pincer nails"]
},
{
  title: "Dermatosurgery",
  image: "../../images/services/dermatosurgery.webp",
  description:
    "Dermatosurgery involves specialized surgical procedures to treat or improve skin conditions that cannot be addressed by topicals alone. This includes subcision and punch grafting for deep acne scars, melanocyte transplantation for stable vitiligo, and surgical excision or cautery for skin growths and earlobe repairs. These procedures focus on restoring the skin's functional and aesthetic integrity with minimal scarring.",
  benefits: [
    "Provides permanent solutions for deep-seated skin defects",
    "Highly effective for 'frozen' or stable vitiligo patches",
    "Physically releases scar tissue to smooth deep acne depressions",
    "Restores earlobe aesthetics (ear-hole repair) without visible stitches",
    "Quick and curative removal of benign skin tumors or tags"
  ],
  disadvantages: [
    "May involve a healing period with visible sutures or dressings",
    "Mild localized swelling or bruising post-procedure",
    "Risk of minor pigment changes in the treated area"
  ],
  aftercare: [
    "Keep the surgical site dry and bandaged as instructed",
    "Apply prescribed antibiotic or healing ointments regularly",
    "Avoid sun exposure to prevent post-inflammatory hyperpigmentation",
    "Attend follow-up sessions for suture removal or progress checks"
  ],
  duration: "30–90 minutes (varies by complexity)",
  sessions: "Usually 1–2 sessions for specific lesions or repairs",
  idealFor: ["Deep acne scars", "Stable vitiligo", "Skin tags/warts", "Split earlobes", "Sebaceous cysts"]
},

{
  title: "Old scar treatment",
  image: "../../images/services/old-scar-treatment.webp",
  description:
    "Treating old or 'mature' scars requires a combination of techniques to remodel established fibrous tissue. Depending on whether the scar is raised (hypertrophic), sunken (atrophic), or pigmented, we use a tailored approach including Fractional CO2 laser, Microneedling, and specialized peels to break down old collagen and stimulate the growth of new, healthy skin fibers that blend with the surrounding area.",
  benefits: [
    "Significantly flattens raised, thickened scars",
    "Fills in and smooths out depressed or 'pitted' scars",
    "Fades old redness or dark pigmentation associated with the scar",
    "Softens the texture of tough, inelastic scar tissue",
    "Blends the scar's color and texture with the surrounding skin"
  ],
  disadvantages: [
    "Older scars take longer to respond than fresh ones",
    "Requires a series of treatments for noticeable improvement",
    "Mild redness or peeling after laser or chemical sessions"
  ],
  aftercare: [
    "Apply silicone-based scar gels as recommended",
    "Massage the area daily to improve tissue pliability",
    "Use broad-spectrum SPF 50+ to prevent the scar from darkening",
    "Keep the skin deeply hydrated with ceramides or hyaluronic acid"
  ],
  duration: "30–60 minutes",
  sessions: "4–8 sessions (depending on scar severity)",
  idealFor: ["Surgical scars", "Post-traumatic scars", "Burn scars", "Old chickenpox marks"]
},

{
  title: "Skin biopsy",
  image: "../../images/services/skin-biopsy.webp",
  description:
    "A skin biopsy is a diagnostic procedure where a small sample of skin tissue is removed for microscopic examination in a laboratory. It is the definitive method for diagnosing various skin conditions, including suspicious moles, inflammatory disorders, or chronic infections. Common techniques include punch biopsy (removing a small core), shave biopsy (removing the surface layer), or excisional biopsy (removing the entire lesion).",
  benefits: [
    "Provides a definitive medical diagnosis for skin concerns",
    "Essential for the early detection of skin cancers",
    "Guides the most effective treatment plan for chronic rashes",
    "Quick procedure performed under local anesthesia",
    "Minimal scarring with modern dermatological techniques"
  ],
  disadvantages: [
    "Requires a small local anesthetic injection",
    "May involve 1–2 small stitches (depending on the technique)",
    "Small risk of localized bruising or infection"
  ],
  aftercare: [
    "Keep the biopsy site dry for the first 24 hours",
    "Apply prescribed antibiotic ointment and a fresh bandage daily",
    "Avoid strenuous activity that might stretch the site for 48 hours",
    "Monitor for signs of infection (increased redness, heat, or pus)"
  ],
  duration: "15–30 minutes",
  sessions: "Typically 1 session (plus a follow-up for results/suture removal)",
  idealFor: ["Suspicious moles", "Unidentified rashes", "Chronic skin lesions", "Skin cancer screening"]
},

{
  title: "Ear piercing",
  image: "../../images/services/ear-piercing.webp",
  description:
    "Professional ear piercing in a clinical setting ensures the highest standards of hygiene and precision. Using a sterile, medical-grade piercing system or specialized needles, the procedure is performed with focused attention on symmetry and skin health. This method minimizes the risk of infection, metal allergies, and trauma to the earlobe or cartilage compared to traditional non-medical methods.",
  benefits: [
    "Performed in a sterile, clinical environment",
    "Uses hypoallergenic, medical-grade studs (nickel-free)",
    "Precise marking for perfect symmetry",
    "Minimal pain and quick recovery",
    "Expert guidance on avoiding keloids or hypertrophic scarring"
  ],
  disadvantages: [
    "Mild throbbing or tenderness for 24–48 hours",
    "Risk of infection if aftercare is not strictly followed",
    "Requires keeping the initial studs in for several weeks"
  ],
  aftercare: [
    "Clean the site twice daily with saline or antiseptic solution",
    "Gently rotate the studs only while cleaning",
    "Avoid touching the area with unwashed hands",
    "Keep the initial piercing jewelry in for 6–8 weeks (earlobes) or longer (cartilage)"
  ],
  duration: "10–20 minutes",
  sessions: "1 session",
  idealFor: ["Lobe piercing", "Cartilage piercing", "Correcting old/uneven piercings"]
},

{
  title: "Eyebrow microblading",
  image: "../../images/services/eyebrow-microblading.webp",
  description:
    "Eyebrow microblading is a semi-permanent makeup technique that creates the illusion of fuller, naturally shaped brows. Using a specialized handheld tool with ultra-fine needles, cosmetic pigments are deposited into the upper dermis in precise, hair-like strokes. This mimics the appearance of real brow hair, providing a long-lasting shape that doesn't smudge or wash off.",
  benefits: [
    "Creates incredibly realistic, hair-like strokes",
    "Eliminates the need for daily brow makeup application",
    "Restores the appearance of over-plucked or thinning brows",
    "Customizable shape and pigment color to match your face",
    "Smudge-proof and waterproof results"
  ],
  disadvantages: [
    "Brows appear very dark for the first 5–7 days after treatment",
    "Minor scabbing and itching during the healing phase",
    "Requires a touch-up session to perfect the color and shape"
  ],
  aftercare: [
    "Keep the brows completely dry for the first 7 days",
    "Avoid picking or scratching any scabs that form",
    "Apply the recommended post-care balm sparingly",
    "Avoid direct sun, swimming, and heavy sweating for 2 weeks"
  ],
  duration: "90–120 minutes",
  sessions: "2 sessions (Initial + Touch-up after 6 weeks)",
  idealFor: ["Thinning eyebrows", "Alopecia", "Uneven brow shapes", "Active lifestyles"]
},
];

export default servicesData;
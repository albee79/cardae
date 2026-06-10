import { PitchSlide, ProductTier, DemoCard } from "./types";

export const PITCH_SLIDES: PitchSlide[] = [
  {
    number: 1,
    title: "CARDÆ Website Copy",
    subtitle: "Every story deserves a deck.",
    points: [
      "Bespoke heritage card decks for sports clubs, brands, and communities.",
      "Premium, tactile physical artifacts crafted with original prose & hand-drawn artwork.",
      "The definitive premium editorial canvas that celebrates lasting legacy."
    ],
    visualHighlight: "Logo treatment showing CARDÆ with typography engraving, dark basalt backdrop."
  },
  {
    number: 2,
    title: "The Problem",
    subtitle: "The fleeting nature of modern memorabilia.",
    points: [
      "Sports clubs and cultural brands have extraordinary stories — founding myths, legendary figures, iconic moments, living traditions.",
      "They have no original, premium object that tells those stories.",
      "A signed shirt gets put in a drawer. A bottle of wine gets drunk. A generic hamper gets forgotten."
    ],
    visualHighlight: "Contrast between static objects that get lost vs. custom storytelling structures."
  },
  {
    number: 3,
    title: "The Solution",
    subtitle: "A masterpiece in your hand.",
    points: [
      "A bespoke heritage card deck. Entirely custom. Richly illustrated. Beautifully produced.",
      "54 to 100 cards covering the history, the legends, the moments, and the culture of your club or brand.",
      "Designed in a compact format that is read, displayed, gifted, and treasured forever."
    ],
    visualHighlight: "Miniature layout mockup representing 54 physical storytelling slots."
  },
  {
    number: 4,
    title: "Beyond Collectibles",
    subtitle: "CARDÆ vs Topps & Panini.",
    points: [
      "Topps and Panini produce mass-market collectibles for retail distribution. We produce custom institutional editorial objects.",
      "No retail. No licensing conflict. No photography rights issues. No competing product on a supermarket shelf.",
      "You commission it. You own it. You distribute it."
    ],
    visualHighlight: "Bespoke institutional editorial vs anonymous mass-retail packaging comparison."
  },
  {
    number: 5,
    title: "The Product Tiers",
    subtitle: "Three tiers — One pristine design standard.",
    points: [
      "Story Deck — 54 cards, tuck box, from €8/deck.",
      "Heritage Edition — 70 cards, rigid box, spot UV, from €18/deck.",
      "Prestige Edition — 70–100 cards, linen finish, gold-gilded edges, from €35/deck.",
      "All editions available with optional game mechanics (trivia, quiz, or Top Trumps) printed on a dedicated rules card."
    ],
    metrics: [
      { label: "Story Deck", value: "€8+" },
      { label: "Heritage Ed.", value: "€18+" },
      { label: "Prestige Ed.", value: "€35+" }
    ]
  },
  {
    number: 6,
    title: "The Editorial Blueprint",
    subtitle: "Content structure (e.g., Football Club)",
    points: [
      "Club founding and early history — 6 cards",
      "Legendary players across eras — 15 cards (illustrated, not photographed)",
      "Greatest matches and trophies — 8 cards",
      "Iconic managers — 5 cards",
      "Stadium and fan culture — 5 cards",
      "Current season overview — 10 cards",
      "Special / collector cards — 5 cards",
      "Content is fully adapted to each sport, brand, and vertical."
    ],
    visualHighlight: "Card count total: 54 Cards. Formatted for high engagement."
  },
  {
    number: 7,
    title: "Institutional Value",
    subtitle: "Four purchase reasons. Four decision makers.",
    points: [
      "Commercial Director — Sponsor gifting replaces the generic end-of-season gift.",
      "Merchandising Manager — Pristine 60–70% gross margin product for the club shop.",
      "Team Manager — Personal, lasting player farewell gift.",
      "CEO & President — High prestige anniversary and milestone commemoration."
    ],
    visualHighlight: "Corporate and brand loyalty alignments."
  },
  {
    number: 8,
    title: "Direct Distribution",
    subtitle: "No retail. No intermediaries.",
    points: [
      "Club receives the complete order → Club distributes through internal channels directly.",
      "Channels: Sponsor gifting · Club shop · Player gifts · Press/Media · Youth academy · Event hospitality.",
      "You keep the full margin. We carry zero inventory risk.",
      "Standard terms: 50% deposit upfront, 50% on delivery."
    ],
    metrics: [
      { label: "Gross Margin", value: "60-70%" },
      { label: "Upfront Cost", value: "50% Dep" },
      { label: "Middlemen", value: "Zero" }
    ]
  },
  {
    number: 9,
    title: "Target Market",
    subtitle: "Substantial opportunities across European athletics.",
    points: [
      "Europe alone: 5,000+ football clubs (Serie A to national leagues).",
      "800+ basketball clubs, 400+ ice hockey clubs, 200+ Nordic sports teams and federations.",
      "Plus: wineries & distilleries, music artists/labels, lifestyle brands, cultural institutions.",
      "Total Addressable: 6,000+ high-potential entities in sports alone."
    ],
    metrics: [
      { label: "Football Clubs", value: "5,000+" },
      { label: "Other Teams", value: "1,400+" },
      { label: "Verticals", value: "9+" }
    ]
  },
  {
    number: 10,
    title: "Vivid Unit Economics",
    subtitle: "Per-project revenue & repeat client loop.",
    points: [
      "Per-project revenue: €15,000 – €50,000 depending on specified volume and finishing tier.",
      "Annual reorder rate: exceptionally high. Clubs update squad lists, legends, and season recap cards yearly.",
      "Target Year 2: 60 custom projects/year = €280,000+ revenue."
    ],
    metrics: [
      { label: "Project Value", value: "€15k-50k" },
      { label: "Reorder Rate", value: "Annual" },
      { label: "Year 2 Target", value: "€280k+" }
    ]
  },
  {
    number: 11,
    title: "The Proof of Concept",
    subtitle: "Dinastia di Sicilia — The starting fire.",
    points: [
      "A masterpiece heritage deck dedicated to the Florio family, the most iconic dynasty in Sicilian history.",
      "Our founding product. Our permanent tangible demo. Our reference for every client conversation.",
      "Every meeting begins with someone holding this deck, feeling the texture, and understanding quality instantly."
    ],
    visualHighlight: "Engraved in rich charcoal and gilded copper. Gold blind debossing."
  },
  {
    number: 12,
    title: "The Parent Group",
    subtitle: "Part of a sports storytelling collective.",
    points: [
      "CARDÆ is part of a sports storytelling group alongside:",
      "- PassoPro: premium cycling challenge and historic analysis platform.",
      "- Dinastia di Sicilia: heritage card deck and historical research index.",
      "Three products. One shared, immutable mission: telling stories worth keeping."
    ]
  },
  {
    number: 13,
    title: "Join CARDÆ",
    subtitle: "Initiate your heritage narrative.",
    points: [
      "To maintain uncompromising quality, we work with a maximum of clients per quarter.",
      "We write, illustrate, print, and box your complete history in 4–6 weeks.",
      "Immediate Actions: Request a demo deck sent to your office, Book a 20-minute editorial introduction, or Start an instant AI project brief."
    ],
    visualHighlight: "Exclusivity indicator: limited production runs."
  }
];

export const PRODUCT_TIERS: ProductTier[] = [
  {
    id: "story",
    name: "Story Deck",
    tagline: "The Fan Edition",
    cardCount: "54 cards",
    boxType: "Premium coated tuck box",
    finish: "Smooth playing-card finish",
    basePricePerDeck: 8,
    minOrder: 1000,
    features: [
      "Original custom prose on every card",
      "54 fully custom illustrations",
      "Sponsor logo placement on tuck box back",
      "Premium 310gsm cardstock with linen layer",
      "Optional trivia mechanics rules sheet"
    ]
  },
  {
    id: "heritage",
    name: "Heritage Edition",
    tagline: "The Signature Product",
    cardCount: "70 cards",
    boxType: "Rigid lift-off drawer box",
    finish: "Prestige linen matte & Spot UV gloss accents",
    basePricePerDeck: 18,
    minOrder: 500,
    features: [
      "Expanded 70-card chronological deck",
      "Custom gold or copper matte foil seal stamp",
      "330gsm black-core master-tier paper",
      "Exquisite Spot UV varnished detailed icons",
      "Custom illustrated card sleeves available",
      "Premium rules card matching box finish"
    ]
  },
  {
    id: "prestige",
    name: "Prestige Edition",
    tagline: "The Collector Piece",
    cardCount: "70 to 100 cards",
    boxType: "Clamshell rigid presentation box with velvet lining",
    finish: "Linen-weave embossed texture & Metallic edge gilding",
    basePricePerDeck: 35,
    minOrder: 250,
    features: [
      "Maximum scale 100-card editorial index",
      "Stunning metallic foil edge-gilding (Gold, Copper, or Black)",
      "350gsm premium German pasteboard",
      "Numbered certificate of authenticity inside",
      "Gold-leaf stamping on card backs and box cover",
      "Bespoke premium acrylic presentation podium"
    ]
  }
];

export const WHO_WE_WORK_WITH: string[] = [
  "Football clubs",
  "Basketball clubs",
  "Ice hockey clubs",
  "Cycling teams",
  "Wine estates and breweries",
  "Music artists and labels",
  "Lifestyle and fashion brands",
  "Cultural institutions",
  "National sports federations"
];

export const DINASTIA_DEMO_CARDS: DemoCard[] = [
  {
    id: "florio_1",
    cardNumber: 1,
    title: "Ignazio Florio Senior",
    subtitle: "The Founding Patriarch",
    story: "Ignazio Florio Senior laid the foundation of industrial Sicily, expanding the empire from a humble spice apothecary to the largest merchant fleet in Southern Europe. Authoritative, strategic, and indomitable, he consolidated the Egadi tuna fisheries and funded early railway lines, establishing Sicily as an international commerce epicenter.",
    illustrationType: "An elegant charcoal-and-gold portrait silhouette capturing Ignazio overlooking the Palermo shipyard.",
    bgColor: "bg-stone-900 border-amber-600/30",
    accentColor: "text-amber-500"
  },
  {
    id: "florio_2",
    cardNumber: 12,
    title: "Donna Franca Florio",
    subtitle: "The Queen of Palermo",
    story: "Revered as 'the Star of Italy,' Donna Franca was the absolute heart of Europe's high society. Painted by Giovanni Boldini, she combined regal style with legendary patronage of musicians and artists, guiding the cultural renaissance of Palermo. Boldini's painting captured her iconic black pearl necklace containing exactly 365 pearls.",
    illustrationType: "A classic sepia sketch of Franca wearing her emerald cuffs, surrounded by Art Nouveau swirls.",
    bgColor: "bg-neutral-900 border-amber-700/40",
    accentColor: "text-amber-400"
  },
  {
    id: "florio_3",
    cardNumber: 33,
    title: "Targa Florio (1906)",
    subtitle: "The Roar in the Madonie",
    story: "Founded by Vincenzo Florio inside the rugged Madonie mountain narrow tracks, the Targa Florio was the ultimate test of early automotive grit. It became the world's most perilous open-road speed contest. Every driver who braved the turns and rockslides became instant folklore in standard motorsport chronicle.",
    illustrationType: "A sleek vector silhouette of a classic 1906 racing car roaring past historical terracotta arches.",
    bgColor: "bg-amber-950/40 border-amber-500/30",
    accentColor: "text-amber-500"
  },
  {
    id: "florio_4",
    cardNumber: 45,
    title: "Cantine Florio",
    subtitle: "Symphony in the Marsala Oak",
    story: "Constructed on the beach-sands of Marsala, the Cantine was the state-of-the-art distillery that tamed local field grapes into a sweet elixir of international repute. The wine was aged inside vast, low tuff arches, filling dark damp environments with rich oak fumes that hosted royals and naval command captains.",
    illustrationType: "A gold woodblock print depiction of aligned giant French oak barrels beneath high cathedral tuff buttresses.",
    bgColor: "bg-red-950/40 border-amber-600/30",
    accentColor: "text-amber-400"
  }
];

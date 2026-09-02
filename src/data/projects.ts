export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  cover: string;
  accent: string;
  tags: string[];
  overview: string;
  process: string;
  research: string;
  wireframes: string;
  ui: string;
  prototype: string;
  results: string;
};

export const projects: Project[] = [
  {
    id: 'controlx',
    index: '01',
    title: 'control.x',
    category: 'Product Landing Page',
    year: '2026',
    summary:
      'A dark, precision-focused landing page for a premium wireless controller — built to feel as tactile as the hardware itself.',
    cover: '/images/controlx-cover.png',
    accent: '#8b5cf6',
    tags: ['UI Design', 'Landing Page', 'Product Design', 'Figma'],
    overview:
      'control.x is a concept product page for a premium wireless gaming controller. The goal was to design an experience that felt as engineered and deliberate as the product it sells — no clutter, just form, grip, and detail.',
    process:
      'Designed end-to-end in Figma: layout exploration, close-up product photography grid, iconography for key features, and a dark UI system built around a single soft radial glow.',
    research:
      'Looked at how gaming and hardware brands (Xbox, Razer, SteelSeries) use macro photography to sell texture and precision — decided the hero needed to show the controller from multiple close angles rather than one hero shot alone.',
    wireframes:
      'Started with a simple two-column hero: bold headline on the left, a photo grid on the right showing grip texture, triggers, and thumbsticks up close — letting the product details do the selling.',
    ui:
      'An all-black canvas with a single soft gradient orb behind the headline for depth. Feature icons (ergonomic design, haptic feedback, bluetooth) sit in minimal bordered tiles below the fold, keeping the page scannable.',
    prototype:
      'Built as a high-fidelity Figma prototype with hover states on the CTA buttons and the feature icon tiles.',
    results:
      'A clean, confident product-page template that could be adapted for any hardware or gadget brand wanting a premium, minimal feel.',
  },
  {
    id: 'instax',
    index: '02',
    title: 'Instax Mini 12',
    category: 'E-commerce Product Page',
    year: '2026',
    summary:
      'A playful, pastel-toned e-commerce page for the Fujifilm Instax Mini 12 — designed to make an instant camera feel as fun to shop for as it is to use.',
    cover: '/images/instax-cover.png',
    accent: '#5b9bd5',
    tags: ['UI Design', 'E-commerce', 'Product Design', 'Figma'],
    overview:
      'A full product page concept for the Instax Mini 12, covering everything from the hero and color variants to a features breakdown, product gallery, and footer — a complete shopping journey for a single product.',
    process:
      'Designed as a full-page scroll experience in Figma, structured section by section: hero with color swatches, product highlight, variant cards, feature grid, lifestyle gallery, and a closing CTA.',
    research:
      'Studied how playful consumer brands balance product photography with soft, approachable color palettes — leaned into a sky-blue gradient background with cloud textures to match the camera\'s pastel, joyful identity.',
    wireframes:
      'Mapped the page as a narrative: hero (buy now), understand the product (features), see the variants (color options), see it in the wild (gallery), then convert again at the bottom.',
    ui:
      'A pastel blue palette with soft cloud-brush section dividers, rounded pill buttons, and a numbered image carousel (01/04) in the hero for browsing color variants.',
    prototype:
      'Prototyped in Figma with interactive states for the color swatches and a swipeable product gallery.',
    results:
      'A complete, ready-to-build e-commerce template — colorful and on-brand, structured the way a real product detail page needs to be to convert browsers into buyers.',
  },
  {
    id: 'veels',
    index: '03',
    title: 'Veels — Porsche 911',
    category: 'Automotive Landing Page',
    year: '2026',
    summary:
      'An editorial, deep-maroon landing page celebrating the Porsche 911 — designed to feel like a print magazine spread more than a typical car dealership site.',
    cover: '/images/veels-cover.png',
    accent: '#7a2e2e',
    tags: ['Brand & Web', 'Landing Page', 'Art Direction', 'Figma'],
    overview:
      'Veels is a concept automotive brand site built around a single hero car — the Porsche 911. The design leans into large type, oversized background typography, and full-bleed photography to give the page a premium, editorial feel.',
    process:
      'Designed in Figma with a strong art-direction-first approach: chose the color and type system before laying out any content, then built the grid around the car photography.',
    research:
      'Looked at how luxury automotive and fashion brands use oversized background wordmarks (like "PORSCHE 911" ghosted behind content) to create scale and drama without needing more imagery.',
    wireframes:
      'Structured around alternating full-width photo moments and text blocks — a rear three-quarter shot, then a features row, then a "history strip" table listing model years and details.',
    ui:
      'A deep maroon backdrop with warm off-white type, thin hairline dividers, and a serif-adjacent sans headline face that reads as confident and classic rather than sporty and loud.',
    prototype:
      'Delivered as a high-fidelity Figma mockup with a scroll-driven layout, ready to hand off for a one-page marketing site build.',
    results:
      'A distinctive brand-and-web concept that shows range beyond typical SaaS/app UI — proof of comfort with art direction, typography, and photography-led layouts.',
  },
  {
    id: 'metal',
    index: '04',
    title: 'metal.',
    category: 'Art & Fashion E-commerce',
    year: '2026',
    summary:
      'A surreal, gallery-like storefront concept built around iridescent 3D-rendered flowers — where the product photography is the art.',
    cover: '/images/metal-cover.png',
    accent: '#c084fc',
    tags: ['UI Design', 'Art Direction', 'E-commerce', 'Figma'],
    overview:
      '"metal." is a concept store for surreal, chrome-and-pearl 3D art objects. The interface gets out of the way almost entirely, letting oversized iridescent flower renders carry the entire visual identity.',
    process:
      'Designed in Figma as a long-scroll story: hero product, a "believe or not" split-image statement section, a testimonial framed in glass, then a closing manifesto section before the footer.',
    research:
      'Referenced how contemporary digital-art and NFT-adjacent brands use negative space and italic serif type against near-black backgrounds to make renders feel like gallery pieces rather than product shots.',
    wireframes:
      'Each section was designed around a single striking image first, with copy kept short and set in a mix of elegant italic serif and a soft rounded sans for contrast.',
    ui:
      'Near-black backgrounds throughout, with iridescent chrome/pastel renders as the only color source. Pill-shaped buttons, a glass-morphism quote card, and generous whitespace keep the mood premium and quiet.',
    prototype:
      'Built as a scroll-based Figma prototype exploring pacing — how much white space and copy sits between each large visual moment.',
    results:
      'A strong art-direction-led concept that stands out from typical SaaS-style portfolio pieces, showing range into fashion/lifestyle and gallery-style e-commerce.',
  },
];
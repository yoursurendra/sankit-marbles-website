import { images } from "./images";
import { siteConfig } from "./config";

// General, universally-true information about how marble and granite are
// used — not specific claims about Sankit Marbles & Granites' capabilities,
// inventory, or history. Kept deliberately generic until the client
// confirms specifics (which applications they fabricate for, delivery
// area, etc.).
export const applications = [
  { id: "livingRoom", name: "Living Room", description: "Flooring and feature walls with quiet presence.", image: images.applications.livingRoom },
  { id: "kitchen", name: "Kitchen", description: "Countertops built for beauty and daily use.", image: images.applications.kitchen },
  { id: "bathroom", name: "Bathroom", description: "Elegant, water-resistant surfaces for bathrooms.", image: images.applications.bathroom },
  { id: "bedroom", name: "Bedroom", description: "Soft-toned stone flooring for calm interiors.", image: images.applications.bedroom },
  { id: "flooring", name: "Flooring", description: "Slabs selected and matched for seamless runs.", image: images.applications.flooring },
  { id: "walls", name: "Walls", description: "Statement cladding for feature walls and facades.", image: images.applications.walls },
  { id: "staircases", name: "Staircases", description: "Natural stone treads and risers.", image: images.applications.staircases },
  { id: "facades", name: "Facades", description: "Durable natural stone for architectural exteriors.", image: images.applications.facades },
  { id: "countertops", name: "Kitchen Countertops", description: "Marble and granite surfaces built for daily use.", image: images.applications.countertops },
  { id: "outdoor", name: "Outdoor Spaces", description: "Natural stone for terraces and courtyards.", image: images.applications.outdoor },
];

// General educational FAQ content — no claims about specific unconfirmed
// Sankit policies (samples, delivery area, custom cutting, etc.) beyond
// what's been confirmed. Update these once the client confirms specifics.
export const faqs = [
  { q: "How do I choose the right marble or granite?", a: "Think about the room's light and how much foot traffic it gets. Lighter, more delicately veined stones tend to suit lower-traffic walls and feature areas, while denser stones hold up better on busy floors. Ask us about the varieties in our collection for guidance suited to your space." },
  { q: "What is the difference between marble and granite?", a: "Marble is a metamorphic stone valued for its natural veining and is often used on walls, flooring and lower-abrasion surfaces. Granite is igneous, harder and more scratch-resistant, making it a strong choice for countertops and high-traffic areas." },
  { q: "Which of your varieties is best for kitchen countertops?", a: "Granite is generally the more popular choice for kitchen countertops due to its hardness and scratch resistance. Get in touch and we can talk through which of our granite varieties suits your kitchen." },
  { q: "Can I see the material before ordering?", a: "Get in touch with us on WhatsApp or by phone and we can talk you through what's currently available to view." },
  { q: "Where are you located?", a: `We're located at ${siteConfig.address}. Contact us for directions or to arrange a visit.` },
];

export const stats = [
  { value: 7, suffix: "", label: "Marble Varieties" },
  { value: 7, suffix: "", label: "Granite Varieties" },
  { value: 2, suffix: "", label: "Categories — Marble & Granite" },
{ value: 2, suffix: "", label: "Locations", subLabel: "Kothagudem & Khammam" },];

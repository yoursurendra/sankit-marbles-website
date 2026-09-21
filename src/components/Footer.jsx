import { MapPin, Phone, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink, telLink } from "../data/config";
import VeinLine from "./ui/VeinLine";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Collection", href: "#catalogue" },
      { label: "Contact", href: "#enquiry" },
    ],
  },
  {
    title: "Collection",
    links: [
      { label: "Marble", href: "#catalogue" },
      { label: "Granite", href: "#catalogue" },
      { label: "Applications", href: "#applications" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQs", href: "#faq" },
      { label: "Enquiry", href: "#enquiry" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-basalt text-ivory pt-20 pb-8">
      <div className="container-lux">
        <div className="grid lg:grid-cols-[1.4fr_2fr] gap-14 pb-14 border-b border-ivory/10">
          <div>
            <span className="font-display text-3xl">{siteConfig.businessName}</span>
            <VeinLine className="h-3 w-24 mt-3 text-bronze-light" animate={false} />
            <p className="mt-5 text-ivory/55 leading-relaxed max-w-xs">{siteConfig.tagline}</p>

            <div className="mt-7 space-y-3 text-sm text-ivory/60">
              <p className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-bronze-light" strokeWidth={1.5} />
                {siteConfig.address}
              </p>
              {siteConfig.contacts.map((c) => (
                <a
                  key={c.name}
                  href={telLink(c.phone)}
                  className="flex items-center gap-3 hover:text-ivory transition-colors"
                >
                  <Phone size={16} className="text-bronze-light" strokeWidth={1.5} />
                  {c.name} — {c.phone}
                </a>
              ))}
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-ivory transition-colors">
                <MessageCircle size={16} className="text-bronze-light" strokeWidth={1.5} /> WhatsApp Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs tracking-widest2 uppercase text-ivory/40 mb-4">{col.title}</p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-sm text-ivory/70 hover:text-ivory transition-colors duration-300">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-ivory/40">
          <p>© 2026 {siteConfig.businessName}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

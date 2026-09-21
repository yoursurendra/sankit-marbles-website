import { X, MessageCircle, Phone } from "lucide-react";
import { navLinks, siteConfig, whatsappLink, telLink } from "../data/config";

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-500 ease-luxury ${
        open ? "visible" : "invisible"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-basalt/60 transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      <div
        className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-ivory flex flex-col transition-transform duration-500 ease-luxury ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-6 border-b border-ink/10">
          <span className="font-display text-xl">{siteConfig.businessName}</span>
          <button aria-label="Close menu" onClick={onClose} className="p-1">
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col px-6 py-6 gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={onClose}
              className="py-3.5 border-b border-ink/10 text-lg font-display text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto px-6 py-6 border-t border-ink/10 flex flex-col gap-3">
          <a href="#enquiry" onClick={onClose} className="btn-primary justify-center">
            Enquire Now
          </a>
          <div className="flex gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex-1 justify-center !py-3"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href={telLink(siteConfig.contacts[0].phone)} className="btn-outline flex-1 justify-center !py-3">
              <Phone size={16} /> Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

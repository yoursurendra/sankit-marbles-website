import { useEffect } from "react";
import { X, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink, telLink } from "../data/config";
import Media from "./ui/Media";

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    document.body.style.overflow = product ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  if (!product) return null;

  const primaryContact = siteConfig.contacts[0];

  return (
    <div className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center animate-fadeIn">
      <div className="absolute inset-0 bg-basalt/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-ivory w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto grid md:grid-cols-2">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-ivory/90 flex items-center justify-center"
        >
          <X size={18} />
        </button>

        <div className="h-64 md:h-full">
          <Media src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="p-7 md:p-10 flex flex-col">
          <p className="eyebrow">{product.category}</p>
          <h3 className="font-display text-3xl md:text-4xl text-ink mt-2">{product.name}</h3>
          <p className="mt-3 text-ink/60 text-sm">
            Material: <span className="text-ink">{product.category}</span>
          </p>

          <div className="mt-10 pt-8 border-t border-ink/10">
            <p className="font-display text-xl text-ink mb-5">Interested in this material?</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappLink(`Hello, I'm interested in ${product.name}. Could you share more details?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 flex-1 justify-center whitespace-nowrap"
              >
                <MessageCircle size={16} /> WhatsApp Enquiry
              </a>
              <a href={telLink(primaryContact.phone)} className="btn-outline !px-4 flex-1 justify-center whitespace-nowrap">
                <Phone size={16} /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

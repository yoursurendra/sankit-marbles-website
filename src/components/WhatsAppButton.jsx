import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-30 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform duration-300 ease-luxury"
    >
      <MessageCircle size={26} className="text-white" strokeWidth={1.75} fill="white" fillOpacity={0.12} />
    </a>
  );
}

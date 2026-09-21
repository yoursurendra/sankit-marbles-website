import { Gem, LayoutGrid, Users, Phone, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "../../data/config";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const reasons = [
  { icon: Gem, title: "Quality Stone", text: "Carefully selected marble and granite varieties." },
  { icon: LayoutGrid, title: "A Wide Range", text: "7 marble and 7 granite varieties to choose from." },
  { icon: Users, title: "Personal Guidance", text: "Direct assistance for homeowners, architects and builders." },
  { icon: Phone, title: "Direct Contact", text: "Speak with our team directly over call or WhatsApp." },
  { icon: MapPin, title: "Local & Trusted", text: `Based in ${siteConfig.location}.` },
  { icon: MessageCircle, title: "Easy Enquiry", text: "Reach out anytime for details on our collection." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="max-w-2xl mb-14">
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Built On Trust</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 100}>
              <r.icon size={28} strokeWidth={1.25} className="text-bronze-dark" />
              <h3 className="font-display text-xl text-ink mt-4">{r.title}</h3>
              <p className="text-ink/60 mt-2 text-sm leading-relaxed">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

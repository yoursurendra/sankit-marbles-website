import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { marbleProducts, graniteProducts } from "../../data/products";
import { whatsappLink } from "../../data/config";
import ProductModal from "../ProductModal";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Media from "../ui/Media";

const TABS = [
  { key: "Marble", label: "Marble", items: marbleProducts },
  { key: "Granite", label: "Granite", items: graniteProducts },
];

export default function ProductCatalogue() {
  const [active, setActive] = useState("Marble");
  const [selected, setSelected] = useState(null);
  const current = TABS.find((t) => t.key === active);

  return (
    <section id="catalogue" className="bg-parchment py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="max-w-2xl mb-10">
          <Eyebrow>The Catalogue</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Explore Our Collection</h2>
          <p className="mt-5 text-ink/65 leading-relaxed">
            Discover our selection of marble and granite varieties available at Sankit Marbles &amp;
            Granites.
          </p>
        </Reveal>

        <Reveal delay={100} className="flex gap-2 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-7 py-3 text-sm tracking-widest2 uppercase border transition-all duration-400 ease-luxury ${
                active === tab.key
                  ? "bg-ink text-ivory border-ink"
                  : "border-ink/20 text-ink/60 hover:border-ink/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </Reveal>

        <div key={active} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
          {current.items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 80} className="bg-ivory group">
              <button onClick={() => setSelected(p)} className="block w-full text-left">
                <div className="h-56 overflow-hidden">
                  <Media
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-luxury group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <p className="font-display text-lg text-ink">{p.name}</p>
                  <p className="text-ink/50 text-xs tracking-widest2 uppercase mt-1">{p.category}</p>
                </div>
              </button>
              <div className="px-5 pb-5">
                <a
                  href={whatsappLink(`Hello, I'm interested in ${p.name}. Could you share more details?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs tracking-widest2 uppercase text-bronze-dark link-underline"
                >
                  <MessageCircle size={13} /> Enquire Now
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

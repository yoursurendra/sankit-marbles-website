import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "../../data/collections";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const MAX_OPEN = 2;

export default function FAQ() {
  const [openIds, setOpenIds] = useState([0]);

  const toggle = (i) => {
    setOpenIds((prev) => {
      if (prev.includes(i)) return prev.filter((x) => x !== i);
      const next = [...prev, i];
      return next.length > MAX_OPEN ? next.slice(next.length - MAX_OPEN) : next;
    });
  };

  return (
    <section id="faq" className="bg-ivory py-24 md:py-32">
      <div className="container-lux max-w-3xl">
        <Reveal className="mb-12">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Common Questions</h2>
        </Reveal>

        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {faqs.map((f, i) => {
            const open = openIds.includes(i);
            return (
              <div key={f.q}>
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg text-ink">{f.q}</span>
                  <Plus
                    size={20}
                    strokeWidth={1.5}
                    className={`shrink-0 text-bronze-dark transition-transform duration-400 ease-luxury ${open ? "rotate-45" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-luxury ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-ink/60 leading-relaxed pr-8">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { stats } from "../../data/collections";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="bg-basalt text-ivory">
      <div className="container-lux grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="py-12 md:py-16 px-4 md:px-8 text-center">
           <p className="mt-3 text-xs md:text-sm tracking-widest2 uppercase text-ivory/60">
  {s.label}

  {s.subLabel && (
    <span className="block mt-2 text-[10px] tracking-[0.18em] text-ivory/40">
      {s.subLabel}
    </span>
  )}
</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

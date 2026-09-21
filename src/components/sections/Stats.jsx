import { stats } from "../../data/collections";
import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";

export default function Stats() {
  return (
    <section className="bg-basalt text-ivory">
      <div className="container-lux grid grid-cols-2 md:grid-cols-4 divide-x divide-ivory/10">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 100} className="py-12 md:py-16 px-4 md:px-8 text-center">
            <p className="font-display text-3xl sm:text-4xl md:text-5xl text-bronze-light">
              {s.isText ? s.suffix : <Counter value={s.value} suffix={s.suffix} />}
            </p>
            <p className="mt-3 text-xs md:text-sm tracking-widest2 uppercase text-ivory/60">
              {s.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

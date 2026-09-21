import { ArrowUpRight } from "lucide-react";
import { applications } from "../../data/collections";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Media from "../ui/Media";

export default function Applications() {
  return (
    <section id="applications" className="bg-ivory py-24 md:py-32">
      <div className="container-lux">
        <Reveal className="max-w-2xl mb-14">
          <Eyebrow>Applications</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-ink">Designed For Every Space</h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((a, i) => (
            <Reveal key={a.id} delay={(i % 3) * 100}>
              <a href="#catalogue" className="group relative block h-72 overflow-hidden">
                <Media
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-[1000ms] ease-luxury group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-basalt/35 group-hover:bg-basalt/55 transition-colors duration-500" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="font-display text-xl text-ivory">{a.name}</h3>
                  <p className="mt-1 text-ivory/75 text-sm">{a.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-bronze-light text-xs tracking-widest2 uppercase opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-luxury">
                    Explore <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

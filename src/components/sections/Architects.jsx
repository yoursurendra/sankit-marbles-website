import { images } from "../../data/images";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Media from "../ui/Media";

export default function Architects() {
  return (
    <section className="relative bg-basalt py-28 md:py-36 overflow-hidden">
      <Media
        src={images.architects}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-basalt via-basalt/90 to-basalt/60" />

      <div className="container-lux relative">
        <Reveal className="max-w-xl">
          <Eyebrow light>For Professionals</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-ivory leading-tight">
            Built For Design
            <br />
            Professionals
          </h2>
          <p className="mt-6 text-ivory/65 leading-relaxed">
            Architects, interior designers and builders can reach out directly to discuss our
            marble and granite collection for their projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#enquiry" className="btn-light">
              Architect Enquiry
            </a>
            <a href="#catalogue" className="btn-outline !border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-ink">
              Explore Our Collection
            </a>
            <a href="#enquiry" className="btn-outline !border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-ink">
              Get In Touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

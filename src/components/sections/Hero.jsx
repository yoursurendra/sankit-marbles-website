import { ChevronDown } from "lucide-react";
import { images } from "../../data/images";
import VeinLine from "../ui/VeinLine";
import Media from "../ui/Media";
import { siteConfig } from "../../data/config";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[640px] w-full overflow-hidden"
    >
      {/* Hero Background */}
      <Media
        src={images.hero}
        alt="Cinematic view of premium veined marble surface"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-basalt/85 via-basalt/35 to-basalt/50" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        <p className="eyebrow !text-bronze-light">
          {siteConfig.businessName} — {siteConfig.location}
        </p>

        <h1 className="mt-6 font-display text-ivory text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[6.2rem]">
          The Art of
          <br />
          <span className="italic font-normal">
            Natural Stone
          </span>
        </h1>

        <VeinLine
          className="h-4 w-44 md:w-56 mt-8 text-bronze-light"
        />

        <p className="mt-6 text-ivory/85 text-base md:text-lg tracking-wide max-w-xl">
          Premium Marble &amp; Granite
        </p>

        <p className="mt-3 text-ivory/60 text-sm md:text-base max-w-md">
          Quality marble and granite varieties for your home, office and
          project needs.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a href="#catalogue" className="btn-light">
            Explore Collection
          </a>

          <a
            href="#enquiry"
            className="btn-outline !border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-ink"
          >
            Enquire Now
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-ivory/70 animate-bounce">
        <span className="text-[10px] tracking-widest2 uppercase">
          Scroll
        </span>
        <ChevronDown size={18} strokeWidth={1.5} />
      </div>
    </section>
  );
}

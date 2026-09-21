import { ArrowRight } from "lucide-react";
import { images } from "../../data/images";
import { siteConfig } from "../../data/config";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Media from "../ui/Media";

export default function About() {
  return (
    <section id="about" className="bg-ivory">
      <div className="grid lg:grid-cols-2">
        <Reveal className="relative h-[420px] lg:h-[640px] overflow-hidden">
          <Media
            src={images.aboutShowroom}
            alt="Marble and granite surfaces"
            className="w-full h-full object-cover"
          />
        </Reveal>

        <div className="flex items-center">
          <div className="px-6 md:px-16 py-16 lg:py-0 max-w-xl">
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <h2 className="font-display text-4xl md:text-5xl leading-tight text-ink">
                Stone That
                <br />
                Defines Spaces
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-ink/70 leading-relaxed">
                {siteConfig.businessName} is based in {siteConfig.location}, offering a curated
                selection of marble and granite varieties for homeowners, architects, interior
                designers and builders.
              </p>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Our collection spans 7 marble and 7 granite varieties — reach out to our team to
                find the right stone for your space.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <a href="#catalogue" className="mt-8 inline-flex items-center gap-2 text-ink font-display text-lg link-underline">
                Explore Our Collection <ArrowRight size={18} strokeWidth={1.5} />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

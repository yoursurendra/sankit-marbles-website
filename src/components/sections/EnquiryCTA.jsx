import { MessageCircle } from "lucide-react";
import { images } from "../../data/images";
import { whatsappLink, siteConfig, telLink } from "../../data/config";
import EnquiryForm from "../EnquiryForm";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import Media from "../ui/Media";

export default function EnquiryCTA() {
  return (
    <section id="enquiry" className="relative">
      <div className="relative bg-basalt py-28 md:py-32 overflow-hidden">
        <Media
          src={images.ctaBackground}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-basalt/40 via-basalt/70 to-basalt" />
        <div className="container-lux relative text-center">
          <Reveal className="max-w-2xl mx-auto">
            <Eyebrow light center>
              Get In Touch
            </Eyebrow>
            <h2 className="font-display text-4xl md:text-6xl text-ivory leading-tight">
              Let's Find the Stone
              <br />
              For Your Space
            </h2>
            <p className="mt-6 text-ivory/65 leading-relaxed max-w-lg mx-auto">
              Tell us about your project and our stone experts will help you find the right
              material.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#enquiry-form" className="btn-light">
                Request a Quote
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !border-ivory/40 !text-ivory hover:!bg-ivory hover:!text-ink"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div id="enquiry-form" className="bg-ivory py-20 md:py-28">
        <div className="container-lux max-w-3xl">
          <Reveal className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl text-ink">Request a Quote</h3>
            <p className="mt-3 text-ink/60">Fill in a few details and our team will get back to you.</p>
          </Reveal>
          <Reveal delay={120}>
            <EnquiryForm />
          </Reveal>
          <Reveal delay={200} className="mt-10 text-center text-sm text-ink/55">
            <p>Or call us directly —</p>
            <p className="mt-1 text-ink">
              {siteConfig.contacts.map((c, i) => (
                <span key={c.name}>
                  {i > 0 && <span className="mx-2 text-ink/30">·</span>}
                  <a href={telLink(c.phone)} className="link-underline">
                    {c.name}: {c.phone}
                  </a>
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

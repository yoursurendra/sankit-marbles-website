import {
  Gem,
  Grid2X2,
  Users,
  Phone,
  MapPin,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Quality Stone",
    text: "Marble and granite varieties for residential and project requirements.",
  },
  {
    icon: Grid2X2,
    title: "Wide Collection",
    text: "7 marble and 7 granite varieties to explore.",
  },
  {
    icon: Users,
    title: "Personal Guidance",
    text: "Direct assistance for homeowners, architects and builders.",
  },
  {
    icon: Phone,
    title: "Direct Contact",
    text: "Connect with our team directly by call or WhatsApp.",
  },
  {
    icon: MapPin,
    title: "Kothagudem",
    text: "Based in Kothagudem, Telangana.",
  },
  {
    icon: MessageCircle,
    title: "Easy Enquiry",
    text: "Reach out to know more about our marble and granite collection.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f5f1e8] py-24 md:py-32">

      {/* Decorative stone texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
        <div className="absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border-[80px] border-[#8b633b]" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full border-[60px] border-[#8b633b]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">

        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#b8864b]" />

            <span className="text-[11px] tracking-[0.3em] uppercase text-[#8b633b]">
              Why Choose Us
            </span>
          </div>

          <h2 className="mt-5 font-display text-4xl leading-tight text-[#252525] md:text-6xl">
            Built on{" "}
            <span className="italic font-normal text-[#8b633b]">
              Trust
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#252525]/60 md:text-base">
            Explore our marble and granite collection with direct guidance
            from the Sankit Marbles &amp; Granites team.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative min-h-[220px] overflow-hidden border border-[#252525]/10 bg-white/45 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(37,37,37,0.10)]"
              >
                {/* Number */}
                <span className="absolute right-6 top-5 font-display text-4xl text-[#252525]/[0.05]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-8 flex h-12 w-12 items-center justify-center border border-[#b8864b]/40 text-[#9a6c37] transition-all duration-500 group-hover:bg-[#252525] group-hover:text-[#f5f1e8]">
                  <Icon size={21} strokeWidth={1.4} />
                </div>

                <h3 className="font-display text-2xl text-[#252525]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-[#252525]/55">
                  {item.text}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#b8864b] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA / collection strip */}
        <div className="mt-16 flex flex-col justify-between gap-6 bg-[#252525] px-7 py-8 text-[#f5f1e8] md:flex-row md:items-center md:px-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#b8864b]">
              Our Collection
            </p>

            <h3 className="mt-2 font-display text-2xl md:text-3xl">
              14 Marble &amp; Granite Varieties
            </h3>
          </div>

          <a
            href="#catalogue"
            className="group flex w-fit items-center gap-3 border border-[#f5f1e8]/30 px-6 py-3 text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#f5f1e8] hover:text-[#252525]"
          >
            Explore Collection
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

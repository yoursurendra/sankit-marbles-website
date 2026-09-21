import { useEffect, useState } from "react";
import { Search, MessageCircle, Menu } from "lucide-react";
import { navLinks, whatsappLink } from "../data/config";
import sankitLogo from "../assets/sankit-logo.png";
import MobileMenu from "./MobileMenu";
import SearchOverlay from "./SearchOverlay";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#f5f1e8]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.12)]"
              : "bg-black/20 backdrop-blur-[3px]"
          }
        `}
      >
        <div className="container-lux flex items-center justify-between">

          {/* LOGO */}
          <a
  href="#home"
  className="group flex items-center shrink-0"
  aria-label="Sankit Marbles & Granites"
>
  <img
    src={sankitLogo}
    alt="Sankit Marbles & Granites"
    className="h-20 md:h-24 w-auto object-contain transition-all duration-500"
  />
</a>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  link-underline
                  text-sm
                  tracking-wide
                  transition-colors
                  duration-500
                  ${
                    scrolled
                      ? "text-ink/80 hover:text-[#b8864b]"
                      : "text-ivory/90 hover:text-[#d4a76a]"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* SEARCH */}
            <button
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
              className={`
                hidden sm:flex
                p-2
                transition-colors
                duration-500
                ${scrolled ? "text-ink" : "text-ivory"}
              `}
            >
              <Search size={19} strokeWidth={1.5} />
            </button>

            {/* WHATSAPP */}
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={`
                hidden sm:flex
                p-2
                transition-colors
                duration-500
                ${scrolled ? "text-ink" : "text-ivory"}
              `}
            >
              <MessageCircle size={19} strokeWidth={1.5} />
            </a>

            {/* ENQUIRE NOW */}
            <a
              href="#enquiry"
              className={`
                hidden md:inline-flex
                !py-2.5
                !px-5
                text-xs
                transition-all
                duration-500
                ease-luxury
                ${
                  scrolled
                    ? "btn-primary"
                    : "btn-light"
                }
              `}
            >
              Enquire Now
            </a>

            {/* MOBILE MENU */}
            <button
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className={`
                lg:hidden
                p-1
                transition-colors
                duration-500
                ${scrolled ? "text-ink" : "text-ivory"}
              `}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />

      <SearchOverlay
        open={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </>
  );
}
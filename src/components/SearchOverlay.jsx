import { useEffect, useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { products } from "../data/products";
import Media from "./ui/Media";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery("");
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter((p) => [p.name, p.category].join(" ").toLowerCase().includes(q))
      .slice(0, 6);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-basalt/95 backdrop-blur-sm animate-fadeIn">
      <div className="container-lux pt-28 md:pt-36">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4 flex-1 border-b border-ivory/25 pb-4">
            <Search className="text-ivory/60" size={22} strokeWidth={1.5} />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search marble or granite varieties…"
              className="bg-transparent w-full text-ivory placeholder:text-ivory/40 font-display text-2xl md:text-4xl focus:outline-none"
            />
          </div>
          <button aria-label="Close search" onClick={onClose} className="text-ivory p-2 ml-4">
            <X size={26} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-h-[60vh] overflow-y-auto pb-10">
          {results.map((p) => (
            <a
              key={p.id}
              href="#catalogue"
              onClick={onClose}
              className="flex items-center gap-4 bg-ivory/5 hover:bg-ivory/10 transition-colors duration-300 p-3 group"
            >
              <Media src={p.image} alt={p.name} className="w-16 h-16 object-cover shrink-0" />
              <div className="min-w-0">
                <p className="text-ivory font-display text-lg truncate">{p.name}</p>
                <p className="text-ivory/50 text-xs tracking-wide uppercase mt-1">
                  {p.category}
                </p>
              </div>
            </a>
          ))}
          {query && results.length === 0 && (
            <p className="text-ivory/50 text-sm col-span-full">
              No stones matched "{query}". Try "marble" or "granite".
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

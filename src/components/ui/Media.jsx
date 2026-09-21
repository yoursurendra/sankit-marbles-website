import { ImageOff } from "lucide-react";
import StoneSwatch from "./StoneSwatch";

/**
 * Drop-in replacement for <img src={...} className={...} />.
 */
export default function Media({
  src,
  alt = "",
  className = "",
  loading = "lazy",
}) {
  // DEBUG: Check what image path/value is reaching Media
  console.log("MEDIA IMAGE:", alt, src);

  if (src && typeof src === "object" && src.swatch) {
    return (
      <StoneSwatch
        tone={src.tone}
        seed={src.seed}
        className={className}
      />
    );
  }

  if (!src) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-stone/50 text-ink/35 ${className}`}
      >
        <ImageOff size={22} strokeWidth={1.25} />

        <span className="text-[11px] tracking-widest2 uppercase">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
}
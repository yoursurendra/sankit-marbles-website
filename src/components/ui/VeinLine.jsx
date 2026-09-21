// The signature visual motif for the brand: a single continuous line that
// behaves like a mineral vein running through stone. Used in the hero,
// as a section divider, and echoed in the logotype's underline.
export default function VeinLine({ className = "", color = "currentColor", animate = true, style }) {
  return (
    <svg
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 C 60 5, 100 35, 160 18 S 260 2, 320 22 S 430 38, 480 15 S 560 4, 600 20"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
        pathLength="1000"
        className={animate ? "animate-vein" : ""}
        style={animate ? { strokeDasharray: 1000 } : undefined}
      />
    </svg>
  );
}

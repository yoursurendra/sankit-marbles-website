export default function Eyebrow({ children, light = false, center = false }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
      <span className={`h-px w-8 ${light ? "bg-bronze-light" : "bg-bronze-dark"}`} />
      <span className={`eyebrow ${light ? "!text-bronze-light" : ""}`}>{children}</span>
    </div>
  );
}

import { useInView } from "../../lib/useInView";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`${className} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"} transition-all duration-[900ms] ease-luxury`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

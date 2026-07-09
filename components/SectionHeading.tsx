import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal
      className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}
    >
      <p className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-white/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-navy-700 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="font-display mt-5 text-3xl font-bold leading-tight text-navy-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-navy-800/70 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
      <div
        className={`gold-divider mt-6 w-24 ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
    </Reveal>
  );
}

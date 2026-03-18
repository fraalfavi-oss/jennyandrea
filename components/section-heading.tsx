type SectionHeadingProps = {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className={`section-label ${centered ? "justify-center" : ""}`}>
        <span className="eyebrow-dot" />
        {label}
      </span>
      <h2 className="font-display text-4xl leading-tight text-ink dark:text-[#f6efe8] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-stone dark:text-[#c8bfb6] sm:text-lg">
        {description}
      </p>
    </div>
  );
}

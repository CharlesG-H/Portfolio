import FadeIn from "@/components/FadeIn";

// Standard page header used across all top-level pages for a consistent architecture:
// optional eyebrow → title → optional intro line.
export default function PageHeader({
  title,
  eyebrow,
  intro,
}: {
  title: string;
  eyebrow?: string;
  intro?: string;
}) {
  return (
    <FadeIn>
      <header className="mb-14">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-accent font-medium font-display mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-[1.05] font-display">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 text-base text-muted leading-relaxed max-w-xl">{intro}</p>
        )}
      </header>
    </FadeIn>
  );
}

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
      <header className="mb-12 md:mb-16">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-accent font-medium font-display mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="text-4xl font-bold text-foreground leading-tight font-display">
          {title}
        </h1>
        {intro && (
          <p className="mt-4 text-sm text-muted leading-relaxed max-w-xl">{intro}</p>
        )}
      </header>
    </FadeIn>
  );
}

import type { Status } from "@/lib/projects";

const styles: Record<Status, string> = {
  Done: "bg-foreground text-background",
  Live: "bg-accent text-white",
  "In Progress": "bg-subtle text-muted",
  Experiment: "border border-border text-muted",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-sm ${styles[status]}`}>
      {status}
    </span>
  );
}

import type { Status } from "@/lib/projects";

const styles: Record<Status, string> = {
  Done: "bg-[#09090b] text-[#fafafa]",
  Live: "bg-[#2563eb] text-white",
  "In Progress": "bg-[#f4f4f5] text-[#71717a]",
  Experiment: "border border-[#e4e4e7] text-[#71717a]",
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span className={`inline-flex shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-sm ${styles[status]}`}>
      {status}
    </span>
  );
}

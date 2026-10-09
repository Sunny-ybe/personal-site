import { Status } from "@/content/site-data";

export function StatusBadge({ status, note }: { status: Status; note?: string }) {
  return (
    <span className="status" data-status={status}>
      {note ? `${status} · ${note}` : status}
    </span>
  );
}

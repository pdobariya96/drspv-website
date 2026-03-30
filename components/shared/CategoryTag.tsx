type TagColor = "it-blue" | "gst-green" | "ipo-amber" | "fema-purple" | "biz-orange";

interface CategoryTagProps {
  label: string;
  color: TagColor;
}

const colorMap: Record<TagColor, { bg: string; text: string }> = {
  "it-blue":      { bg: "bg-it-blue/15",      text: "text-it-blue" },
  "gst-green":    { bg: "bg-gst-green/15",     text: "text-gst-green" },
  "ipo-amber":    { bg: "bg-ipo-amber/15",     text: "text-ipo-amber" },
  "fema-purple":  { bg: "bg-fema-purple/15",   text: "text-fema-purple" },
  "biz-orange":   { bg: "bg-biz-orange/15",    text: "text-biz-orange" },
};

export default function CategoryTag({ label, color }: CategoryTagProps) {
  const c = colorMap[color];

  return (
    <span
      className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] leading-tight ${c.bg} ${c.text}`}
    >
      {label}
    </span>
  );
}

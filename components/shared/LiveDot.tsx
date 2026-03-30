interface LiveDotProps {
  label?: string;
}

export default function LiveDot({ label }: LiveDotProps) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative flex h-[6px] w-[6px]">
        <span className="absolute inset-0 rounded-full bg-green animate-ping opacity-60" />
        <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-green" />
      </span>
      {label && (
        <span className="text-xs font-medium text-green">{label}</span>
      )}
    </span>
  );
}

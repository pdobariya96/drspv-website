interface GoldTopBorderProps {
  children: React.ReactNode;
  className?: string;
}

export default function GoldTopBorder({ children, className = "" }: GoldTopBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className="absolute top-0 left-0 right-0 h-[3px] rounded-t-lg"
        style={{
          background: "linear-gradient(90deg, #C9A84C 0%, #E8C55A 40%, #F5D98A 70%, #E8C55A 100%)",
        }}
      />
      {children}
    </div>
  );
}

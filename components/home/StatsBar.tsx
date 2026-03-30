import { Users, Award, TrendingUp, ShieldCheck } from "lucide-react";

const stats = [
  { icon: Users, number: "500+", label: "Happy Clients" },
  { icon: Award, number: "3+", label: "Yrs Experience" },
  { icon: TrendingUp, number: "10+", label: "IPOs Handled" },
  { icon: ShieldCheck, number: "100%", label: "Compliance Rate" },
];

export default function StatsBar() {
  return (
    <section className="w-full bg-bg-2 border-y border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center gap-2">
              <stat.icon className="mb-1 h-5 w-5 text-gold/60" />
              <span className="gold-gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
                {stat.number}
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

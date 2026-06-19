"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "Fair Lawn", href: "/roofing-repair-fair-lawn-nj" },
  { name: "Ridgewood", href: "/roofing-repair-ridgewood-nj" },
  { name: "Paramus", href: "/roofing-repair-paramus-nj" },
  { name: "Clifton", href: "/roofing-contractor-clifton-nj" },
];

export default function LocationBar() {
  const pathname = usePathname();

  return (
    <div className="w-full bg-gradient-to-r from-slate-100 via-white to-slate-100 border border-slate-200/80 rounded-2xl p-3 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur overflow-x-auto">
      <div className="flex justify-center gap-2 sm:gap-3 min-w-max mx-auto">
        {services.map((service) => {
          const isActive = pathname === service.href;

          return (
            <Link
              key={service.href}
              href={service.href}
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  isActive
                    ? "bg-[#e07b3b] text-white shadow-md"
                    : "bg-[#e07b3b] text-white border border-[#e07b3b] hover:bg-white hover:text-[#e07b3b] hover:border-[#e07b3b] hover:shadow-md"
                }`}
            >
              {service.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

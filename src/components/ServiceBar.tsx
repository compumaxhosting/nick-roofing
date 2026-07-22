"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const services = [
  { name: "Skylights", href: "/skylight-repair-hawthorne-nj" },
  { name: "Gutters", href: "/gutter-installation-hawthorne-nj" },
  { name: "Waterproofing", href: "/water-proofing-hawthorne-nj" },
  { name: "Roof Repair", href: "/roofing-repair-hawthorne-nj" },
  { name: "Siding", href: "/siding-services-hawthorne-nj" },
];

export default function ServiceBar() {
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
              : "bg-white text-slate-700 border border-slate-200 hover:bg-[#e07b3b] hover:text-white hover:border-[#e07b3b] hover:shadow-md"
          }`}
            >
              {service.name}

              <span className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition duration-300 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

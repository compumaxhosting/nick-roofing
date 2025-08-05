import { Award, Shield, Star } from "lucide-react";

export const TrustIndicators = () => {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center items-center gap-4 sm:gap-8 md:gap-12">
          {[
            {
              icon: (
                <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#e07b3b] mb-1 sm:mb-2" />
              ),
              label: "Years Experience",
              value: "35+",
            },
            {
              icon: (
                <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#e07b3b] mb-1 sm:mb-2" />
              ),
              label: "Customer Rating",
              value: "5-Star",
            },
            {
              icon: (
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#e07b3b] mb-1 sm:mb-2" />
              ),
              label: "& Insured",
              value: "Licensed",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center flex-1 max-w-[100px] sm:max-w-[120px] md:max-w-[140px]"
            >
              {item.icon}
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                {item.value}
              </span>
              <span className="text-slate-600 text-xs sm:text-sm leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

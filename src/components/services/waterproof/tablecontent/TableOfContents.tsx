export default function TableOfContents() {
  const items = [
    { id: "what-is-waterproofing", title: "What Is Waterproofing?" },
    { id: "why-waterproofing-matters", title: "Why Waterproofing Matters" },
    { id: "common-water-intrusion-problems", title: "Common Water Intrusion Problems" },
    { id: "signs-your-property-needs-waterproofing", title: "Signs Your Property Needs Waterproofing" },
    { id: "our-waterproofing-process", title: "Our Waterproofing Process" },
    { id: "waterproofing-vs-water-damage-repair", title: "Waterproofing vs Water Damage Repair" },
    { id: "benefits-of-professional-waterproofing", title: "Benefits of Professional Waterproofing" },
    { id: "waterproofing-and-roofing-systems", title: "Waterproofing and Roofing Systems" },
    { id: "common-waterproofing-mistakes", title: "Common Waterproofing Mistakes" },
    { id: "why-choose-nick-roofing", title: "Why Choose Nick Roofing" },
    { id: "frequently-asked-questions", title: "Frequently Asked Questions" },
    { id: "conclusion", title: "Conclusion" },
  ];

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Table of Contents</h2>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                {index + 1}. {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

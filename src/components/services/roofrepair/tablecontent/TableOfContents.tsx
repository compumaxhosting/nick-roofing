export default function TableOfContents() {
  const items = [
    {
      id: "what-is-roof-repair",
      title: "What Is Roof Repair?",
    },
    {
      id: "why-roof-repair-matters",
      title: "Why Roof Repair Matters",
    },
    {
      id: "common-roof-problems",
      title: "Common Roof Problems",
    },
    {
      id: "signs-you-need-roof-repair",
      title: "Signs You Need Roof Repair",
    },
    {
      id: "our-roof-repair-process",
      title: "Our Roof Repair Process",
    },
    {
      id: "roof-repair-vs-roof-replacement",
      title: "Roof Repair vs Roof Replacement",
    },
    {
      id: "benefits-of-professional-roof-repair",
      title: "Benefits of Professional Roof Repair",
    },
    {
      id: "roofing-materials-and-repair-solutions",
      title: "Roofing Materials and Repair Solutions",
    },
    {
      id: "common-roof-repair-mistakes",
      title: "Common Roof Repair Mistakes",
    },
    {
      id: "why-choose-nick-roofing",
      title: "Why Choose Nick Roofing",
    },
    {
      id: "frequently-asked-questions",
      title: "Frequently Asked Questions",
    },
    {
      id: "conclusion",
      title: "Conclusion",
    },
  ];

  return (
    <section className="py-8 px-4 max-w-6xl mx-auto">
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Table of Contents
        </h2>

        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
              >
                {index + 1}. {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function TableOfContents() {
  const items = [
    {
      id: "what-is-gutter-installation",
      title: "What Is Gutter Installation?",
    },
    {
      id: "why-proper-gutters-matter",
      title: "Why Proper Gutters Matter",
    },
    {
      id: "common-gutter-problems",
      title: "Common Gutter Problems",
    },
    {
      id: "signs-you-need-new-gutters",
      title: "Signs You Need New Gutters",
    },
    {
      id: "our-gutter-installation-process",
      title: "Our Gutter Installation Process",
    },
    {
      id: "gutter-repair-vs-replacement",
      title: "Gutter Repair vs Replacement",
    },
    {
      id: "benefits-of-professional-gutter-installation",
      title: "Benefits of Professional Gutter Installation",
    },
    {
      id: "types-of-gutter-systems",
      title: "Types of Gutter Systems",
    },
    {
      id: "common-installation-mistakes",
      title: "Common Installation Mistakes",
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

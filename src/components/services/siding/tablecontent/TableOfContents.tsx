export default function TableOfContents() {
  const items = [
    {
      id: "what-are-siding-services",
      title: "What Are Siding Services?",
    },
    {
      id: "why-siding-matters",
      title: "Why Siding Matters",
    },
    {
      id: "types-of-siding-materials",
      title: "Types of Siding Materials",
    },
    {
      id: "signs-your-home-needs-new-siding",
      title: "Signs Your Home Needs New Siding",
    },
    {
      id: "our-siding-installation-process",
      title: "Our Siding Installation Process",
    },
    {
      id: "siding-repair-vs-replacement",
      title: "Siding Repair vs Replacement",
    },
    {
      id: "benefits-of-professional-siding-services",
      title: "Benefits of Professional Siding Services",
    },
    {
      id: "siding-and-water-protection",
      title: "Siding and Water Protection",
    },
    {
      id: "common-siding-problems",
      title: "Common Siding Problems",
    },
    {
      id: "siding-contractor-hawthorne-nj",
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
export default function TableOfContents() {
  const items = [
    {
      id: "what-is-skylight-repair",
      title: "What Is Skylight Repair?",
    },
    {
      id: "why-skylight-repair-matters",
      title: "Why Skylight Repair Matters",
    },
    {
      id: "common-skylight-problems",
      title: "Common Skylight Problems",
    },
    {
      id: "signs-your-skylight-needs-repair",
      title: "Signs Your Skylight Needs Repair",
    },
    {
      id: "our-skylight-repair-process",
      title: "Our Skylight Repair Process",
    },
    {
      id: "skylight-repair-vs-replacement",
      title: "Skylight Repair vs. Replacement",
    },
    {
      id: "benefits-of-professional-skylight-repair",
      title: "Benefits of Professional Skylight Repair",
    },
    {
      id: "common-skylight-repair-mistakes",
      title: "Common Skylight Repair Mistakes",
    },
    {
      id: "residential-and-commercial-applications",
      title: "Residential and Commercial Applications",
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
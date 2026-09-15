import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogsData } from "@/data/BlogsData";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogsOverview } from "@/components/BlogsOverview";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: PageProps) {
  // ✅ Await params before using it (required in Next.js 15+)
  const { slug } = await params;

  const blog = BlogsData.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const tocSections = blog.sections.filter(
    (section) => section.id && section.title !== "Table of Contents"
  );

  return (
    <>
      <Header />
      <BlogsOverview />
      <main className="pt-8 border-b">
        <section className="bg-white text-black">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
            <div>
              <Link
                href="/blog"
                className="text-sm text-slate-800 hover:underline"
              >
                ← Back to Blogs
              </Link>
              <h1 className="mt-4 text-lg md:text-xl font-semibold text-[#364f4f] mb-3">
                {blog.title}
              </h1>
              <div className="mt-4 text-xl md:text-2xl text-justify text-slate-800">
                {blog.description}
              </div>
            </div>

            <div className="w-full max-w-md mx-auto">
              <div className="rounded-3xl overflow-hidden shadow-xl md:shadow-2xl border border-gray-200">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {tocSections.length > 0 && (
            <div id="table-of-contents" className="max-w-7xl mx-auto px-6 pt-8">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
                <h2 className="text-lg md:text-xl font-semibold text-[#364f4f] mb-3">
                  Table of Contents
                </h2>
                <ul className="grid gap-2 text-base text-slate-700 md:grid-cols-2">
                  {tocSections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-blue-700 hover:text-blue-900 hover:underline"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="max-w-7xl mx-auto px-6 pt-8 pb-2">
            {blog.sections
              .filter((section) => section.title !== "Table of Contents")
              .map((section, index) => (
                <article key={section.id ?? index} className="mb-10">
                  <h2
                    id={section.id}
                    className="mt-4 text-lg md:text-xl font-semibold text-[#364f4f] mb-3"
                  >
                    {section.title}
                  </h2>
                  <div className="text-slate-800 text-xl md:text-2xl leading-relaxed text-justify">
                    {section.paragraph}
                  </div>
                </article>
              ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

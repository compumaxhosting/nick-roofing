import type { Metadata } from "next";
import { ReactNode } from "react";
import { BlogsData, Blog } from "@/data/BlogsData";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

// ✅ Generate metadata dynamically for each blog
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = BlogsData.find((b) => b.slug === slug);

  if (!blog) return {};

  const baseUrl = "https://www.nickroofing.com";
  const pageUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl =
    blog.image && blog.image.startsWith("http")
      ? blog.image
      : `${baseUrl}${blog.image || "/og-image.jpg"}`;

  return {
    title: blog.title,
    description: blog.metadescription || "",
    keywords: blog.keywords
      ? blog.keywords.split(",").map((kw) => kw.trim())
      : [],
    openGraph: {
      title: blog.title,
      description: blog.metadescription || "",
      url: pageUrl,
      siteName: "Nick Roofing",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    alternates: { canonical: pageUrl },
  };
}

// ✅ Generate JSON-LD Schema
const generateSchema = (blog: Blog, slug: string) => {
  const baseUrl = "https://www.nickroofing.com";
  const pageUrl = `${baseUrl}/blog/${slug}`;
  const imageUrl =
    blog.image && blog.image.startsWith("http")
      ? blog.image
      : `${baseUrl}${blog.image || "/og-image.jpg"}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.metadescription || "",
    image: imageUrl,
    author: {
      "@type": "Organization",
      name: "Nick Roofing",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Nick Roofing",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
    datePublished: blog.date || "2025-01-01",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    url: pageUrl,
  };
};

// ✅ Layout Component
export default async function BlogLayout({ children, params }: Props) {
  const { slug } = await params;
  const blog = BlogsData.find((b) => b.slug === slug);
  if (!blog) return null;

  const schemaData = generateSchema(blog, slug);

  return (
    <>
      {children}
      <ClientOnlyJsonLd data={schemaData} />
    </>
  );
}

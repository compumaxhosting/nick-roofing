import type { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { BlogsData, Blog } from "@/data/BlogsData";
import ClientOnlyJsonLd from "@/components/ClientOnlyJsonLd";

type Props = {
  children: ReactNode;
  params: Promise<{ slug: string }>;
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

// ✅ Generate metadata dynamically for each blog
export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = BlogsData.find((b) => b.slug === slug);

  if (!blog) return {};

  const baseUrl = "https://www.nickroofing.com";
  const pageUrl = blog.canonical || `${baseUrl}/blog/${slug}`;

  const imageUrl =
    blog.image && blog.image.startsWith("http")
      ? blog.image
      : `${baseUrl}${blog.image || "/og-image.webp"}`;

  return {
    metadataBase: new URL(baseUrl),

    title: blog.metatitle,

    description: blog.metadescription || "",

    authors: [{ name: "Nick Roofing" }],

    referrer: "strict-origin-when-cross-origin",

    keywords: blog.keywords
      ? blog.keywords.split(",").map((kw) => kw.trim())
      : [],

    alternates: {
      canonical: pageUrl,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: blog.ogtitle || blog.metatitle,
      description: blog.ogdescription || blog.metadescription || "",
      url: pageUrl,
      siteName: "Nick Roofing",
      locale: "en_US",
      type: blog.ogtype || "article",
      publishedTime: blog.date,
      modifiedTime: blog.date,

      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: blog.imagealt || blog.metatitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: blog.metatitle,
      description: blog.twitterdescription || blog.metadescription || "",
      images: [
        {
          url: imageUrl,
          alt: blog.imagealt || blog.metatitle,
        },
      ],
    },
  };
}

// ✅ Static Roofing Contractor Schema
const staticSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",

  name: "Nick Roofing",
  url: "https://www.nickroofing.com/",
  telephone: "+1-973-207-0689",
  email: "nickcontractorllc@gmail.com",
  image: "https://www.nickroofing.com/blog-4.webp",

  address: {
    "@type": "PostalAddress",
    streetAddress: "525 Lafayette Ave",
    addressLocality: "Hawthorne",
    addressRegion: "NJ",
    postalCode: "07506",
    addressCountry: "US",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.9493,
    longitude: -74.1537,
  },

  priceRange: "$$",

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  sameAs: [],
};

// ✅ Dynamic BlogPosting Schema
const generateBlogSchema = (blog: Blog, slug: string) => {
  const baseUrl = "https://www.nickroofing.com";
  const pageUrl = blog.canonical || `${baseUrl}/blog/${slug}`;

  const imageUrl =
    blog.image && blog.image.startsWith("http")
      ? blog.image
      : `${baseUrl}${blog.image || "/og-image.webp"}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.metatitle,

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
        url: `${baseUrl}/logo.webp`,
      },
    },

    datePublished: blog.date || "2025-01-01",

    dateModified: blog.date || "2025-01-01",

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },

    articleSection: blog.category || "Roofing",
    inLanguage: "en-US",

    isAccessibleForFree: true,

    about: {
      "@type": "Thing",
      name: blog.category || "Roofing",
    },

    url: pageUrl,
  };
};

// ✅ Layout Component
export default async function BlogLayout({
  children,
  params,
}: Props) {
  const { slug } = await params;

  const blog = BlogsData.find((b) => b.slug === slug);

  if (!blog) return null;

  const blogSchema = generateBlogSchema(blog, slug);

  return (
    <>
      {children}

      {/* Static Business Schema */}
      <ClientOnlyJsonLd data={staticSchema} />

      {/* Dynamic BlogPosting Schema */}
      <ClientOnlyJsonLd data={blogSchema} />
    </>
  );
}

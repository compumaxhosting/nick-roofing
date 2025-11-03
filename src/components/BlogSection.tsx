"use client";

import { BlogsData } from "@/data/BlogsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-14 px-4">
      <div className="text-center mb-10">
        <h1 className="text-xl md:text-l font-semibold tracking-[2px] mb-5 text-[#364f4f]">
          Our Latest Blogs
        </h1>
        <span className="block mx-auto w-10 h-0.5 bg-[#36454F] mb-7"></span>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BlogsData.map((blog, index) => (
          <Link
            key={index}
            href={`/blog/${blog.slug}`}
            className="block group p-4 bg-white shadow-lg rounded-lg  hover:shadow-xl transition-shadow duration-300"
          >
            {/* Blog Image */}
            <div className="overflow-hidden rounded-lg">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-auto aspect-video object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Blog Details */}
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">
                {blog.date || "October 30, 2025"}
              </p>

              <h2 className="text-xl md:text-xl font-semibold text-[#364f4f] mb-2 group-hover:text-[#1f3d3d] transition-colors">
                {blog.title}
              </h2>

              {/* Description (Safe Type Handling) */}
              {typeof blog.description === "string" ? (
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {blog.description.slice(0, 60)}...
                </p>
              ) : (
                <div className="text-gray-600 text-sm leading-relaxed mb-3">
                  {blog.description}
                </div>
              )}

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;

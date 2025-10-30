import React from "react";
import BlogData from "@/components/BlogSection";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";

const Page = () => {
  return (
    <>
      <div>
        <Header />
        <BlogData />
        <Footer />
      </div>
    </>
  );
};

export default Page;

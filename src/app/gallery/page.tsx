// Force static generation + daily revalidation (keeps the page fresh without SSR)
export const dynamic = "force-static";
export const revalidate = 86400; // 24h

import { Footer } from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";

export default function Page() {
  return (
    <>
      <Header />
      <Gallery />
      <Footer />
    </>
  );
}

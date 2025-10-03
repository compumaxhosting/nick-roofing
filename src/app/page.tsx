import About from "@/components/About";
import Carausal from "@/components/Carausal";
import { ContactUs } from "@/components/ContactUs";
import { Footer } from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <Carausal />
      <About />
      <Services />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}

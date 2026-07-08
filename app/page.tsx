import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import Showcase from "@/components/Showcase";
import Gallery from "@/components/Gallery";
import EventTypes from "@/components/EventTypes";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Zones from "@/components/Zones";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <Showcase />
        <Gallery />
        <EventTypes />
        <Process />
        <Pricing />
        <Zones />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

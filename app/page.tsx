import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Products from "@/components/Products";
import PhotoBoothVariants from "@/components/PhotoBoothVariants";
import Showcase from "@/components/Showcase";
import Gallery from "@/components/Gallery";
import BrandBand from "@/components/BrandBand";
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
        <PhotoBoothVariants />
        <Showcase />
        <Gallery />
        <BrandBand />
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

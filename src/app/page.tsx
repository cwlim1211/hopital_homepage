import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Facilities from "@/components/Facilities";
import CoreValues from "@/components/CoreValues";
import Media from "@/components/Media";
import Services from "@/components/Services";
import NerveBlock from "@/components/NerveBlock";
import UltrasoundInjection from "@/components/UltrasoundInjection";
import Pricing from "@/components/Pricing";
import Location from "@/components/Location";
import BookingCTA from "@/components/BookingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Facilities />
        <CoreValues />
        <Media />
        <Services />
        <NerveBlock />
        <UltrasoundInjection />
        <Pricing />
        <Location />
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}

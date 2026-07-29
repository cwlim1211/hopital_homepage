import Hero from "@/components/Hero";
import About from "@/components/About";
import Branches from "@/components/Branches";
import Facilities from "@/components/Facilities";
import CoreValues from "@/components/CoreValues";
import Media from "@/components/Media";
import Location from "@/components/Location";
import BookingCTA from "@/components/BookingCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Facilities />
      <CoreValues />
      <Branches />
      <Media />
      <Location />
      <BookingCTA />
    </main>
  );
}

import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import AppPromotion from "@/components/AppPromotion";
import Waitlist from "@/components/waitlist";
import Footers from "@/components/Footers";


export default function Home() {
  return (
    <div className="sm:p-20 ">
      <main>
        <NavBar />
        <HeroSection />
        <AboutUs />
        <AppPromotion />
        <Waitlist />
      </main>
      <Footers />
    </div>
  );
}

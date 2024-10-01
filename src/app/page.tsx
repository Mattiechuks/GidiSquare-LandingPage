import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/components/AboutUs";
import AppPromotion from "@/components/AppPromotion";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="sm:p-20 ">
      <main>
        <NavBar />
        <HeroSection />
        <AboutUs />
        <AppPromotion />
        <JoinWaitlist />
      </main>
      <Footer />
    </div>
  );
}

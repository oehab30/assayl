
"use client";

import Banner from "../Common/Banner";
import PageBackground from "../Common/PageBackground";
import CargoJourney from "./CargoJourney";
import Coordination from "./Experience_that_knows_the_route";
import FreightRoutes from "./FreightRoutes";
import Hero from "./Hero";
import Journey from "./Journey";
import OfficesSection from "./Ouroffices";
import Services from "./Services";
import WhyAssayel from "./WhyAssayel";

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-[#F8F6F3]">
      <PageBackground />

      <Hero />
      <Coordination />
      <Services />
      <FreightRoutes />
      <WhyAssayel />
      <Journey />
      <OfficesSection />
      <CargoJourney />
      <Banner />
    </main>
  );
}

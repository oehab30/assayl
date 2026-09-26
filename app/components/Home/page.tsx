"use client"

import Banner from "../Common/Banner"
import CargoJourney from "./CargoJourney"
import Coordination from "./Coordination"
import FreightRoutes from "./FreightRoutes"
import Hero from "./Hero"
import Journey from "./Journey"
import OfficesSection from "./Ouroffices"
import Services from "./Services"
import WhySTARS from "./WhySTARS"
// import HeroFacts from "./HeroFacts"



export default function Home() {
  return (
   <>
<Hero/>
<Coordination/>
<Services/>
<FreightRoutes/>
<WhySTARS/>
<Journey/>
<OfficesSection/>
<CargoJourney/>
<Banner/>


{/* <HeroFacts/> */}
   </>

  )
}
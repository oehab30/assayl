"use client"

import Banner from "../Common/Banner"
import CargoJourney from "./CargoJourney"
import Coordination from "./Experience_that_knows_the_route"
import FreightRoutes from "./FreightRoutes"
import Hero from "./Hero"
import Journey from "./Journey"
import OfficesSection from "./Ouroffices"
import Services from "./Services"
import WhySTARS from "./WhyAssayel"
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
"use client"

import Coordination from "./Coordination"
import FreightRoutes from "./FreightRoutes"
import Hero from "./Hero"
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

{/* <HeroFacts/> */}
   </>

  )
}

"use client";

import {
  Ship,
  FileText,
  Search,
  Plane,
  Warehouse,
  ClipboardCheck,
  ShoppingBag,
  CarFront,
  Building2,
} from "lucide-react";

import ServiceGroupSection, {
  type ServiceItem,
} from "./ServiceGroupSection";

// SECTION 01 — Import, Export & Sourcing
const importExportServices: ServiceItem[] = [
  {
    id: "import-export",
    number: "01",
    image: "https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    icon: Ship,
    titleKey: "services.importExport.items.importExport.title",
    descriptionKey: "services.importExport.items.importExport.description",
    featureKey: "services.importExport.items.importExport.feature",
    imageAltKey: "services.importExport.items.importExport.imageAlt",
    href: "/quote?service=import-export",
  },
  {
    id: "import-on-behalf",
    number: "02",
    image: "/images/import-behalf.jpg",
    icon: FileText,
    titleKey: "services.importExport.items.importOnBehalf.title",
    descriptionKey: "services.importExport.items.importOnBehalf.description",
    featureKey: "services.importExport.items.importOnBehalf.feature",
    imageAltKey: "services.importExport.items.importOnBehalf.imageAlt",
    href: "/quote?service=import-on-behalf",
  },
  {
    id: "sourcing-supply",
    number: "03",
    image: "/images/sourcing-supply.jpg",
    icon: Search,
    titleKey: "services.importExport.items.sourcing.title",
    descriptionKey: "services.importExport.items.sourcing.description",
    featureKey: "services.importExport.items.sourcing.feature",
    imageAltKey: "services.importExport.items.sourcing.imageAlt",
    href: "/quote?service=sourcing-supply",
  },
];

// SECTION 02 — Freight & Logistics
const freightLogisticsServices: ServiceItem[] = [
  {
    id: "sea-freight",
    number: "01",
    image: "/images/sea-freight.jpg",
    icon: Ship,
    titleKey: "services.freightLogistics.items.seaFreight.title",
    descriptionKey: "services.freightLogistics.items.seaFreight.description",
    featureKey: "services.freightLogistics.items.seaFreight.feature",
    imageAltKey: "services.freightLogistics.items.seaFreight.imageAlt",
    href: "/quote?service=sea-freight",
  },
  {
    id: "air-freight",
    number: "02",
    image: "/images/air-freight.jpg",
    icon: Plane,
    titleKey: "services.freightLogistics.items.airFreight.title",
    descriptionKey: "services.freightLogistics.items.airFreight.description",
    featureKey: "services.freightLogistics.items.airFreight.feature",
    imageAltKey: "services.freightLogistics.items.airFreight.imageAlt",
    href: "/quote?service=air-freight",
  },
  {
    id: "warehousing",
    number: "03",
    image: "/images/warehousing.jpg",
    icon: Warehouse,
    titleKey: "services.freightLogistics.items.warehousing.title",
    descriptionKey: "services.freightLogistics.items.warehousing.description",
    featureKey: "services.freightLogistics.items.warehousing.feature",
    imageAltKey: "services.freightLogistics.items.warehousing.imageAlt",
    href: "/quote?service=warehousing",
  },
];

// SECTION 03 — Customs, Warehousing & Consolidation
const customsWarehousingServices: ServiceItem[] = [
  {
    id: "customs-clearance",
    number: "01",
    image: "/images/customs-clearance.jpg",
    icon: ClipboardCheck,
    titleKey: "services.customsWarehousing.items.customsClearance.title",
    descriptionKey: "services.customsWarehousing.items.customsClearance.description",
    featureKey: "services.customsWarehousing.items.customsClearance.feature",
    imageAltKey: "services.customsWarehousing.items.customsClearance.imageAlt",
    href: "/quote?service=customs",
  },
  {
    id: "secure-warehousing",
    number: "02",
    image: "/images/warehousing.jpg",
    icon: Warehouse,
    titleKey: "services.customsWarehousing.items.warehousing.title",
    descriptionKey: "services.customsWarehousing.items.warehousing.description",
    featureKey: "services.customsWarehousing.items.warehousing.feature",
    imageAltKey: "services.customsWarehousing.items.warehousing.imageAlt",
    href: "/quote?service=warehousing",
  },
];


// SECTION 04 — Individual, Trade & Automotive Solutions
const individualTradeAutomotiveServices: ServiceItem[] = [
  {
    id: "personal-sourcing",
    number: "01",
    image: "/images/personal-orders.jpg",
    icon: ShoppingBag,
    titleKey: "services.individualTradeAutomotive.items.personalSourcing.title",
    descriptionKey: "services.individualTradeAutomotive.items.personalSourcing.description",
    featureKey: "services.individualTradeAutomotive.items.personalSourcing.feature",
    imageAltKey: "services.individualTradeAutomotive.items.personalSourcing.imageAlt",
    href: "/quote?service=personal-supplies",
  },
  {
    id: "automotive-spare-parts",
    number: "02",
    image: "/images/auto-parts.jpg",
    icon: CarFront,
    titleKey: "services.individualTradeAutomotive.items.autoParts.title",
    descriptionKey: "services.individualTradeAutomotive.items.autoParts.description",
    featureKey: "services.individualTradeAutomotive.items.autoParts.feature",
    imageAltKey: "services.individualTradeAutomotive.items.autoParts.imageAlt",
    href: "/quote?service=auto-parts",
  },
  {
    id: "automotive-accessories",
    number: "03",
    image: "/images/inspection.jpg",
    icon: CarFront,
    titleKey: "services.individualTradeAutomotive.items.autoAccessories.title",
    descriptionKey: "services.individualTradeAutomotive.items.autoAccessories.description",
    featureKey: "services.individualTradeAutomotive.items.autoAccessories.feature",
    imageAltKey: "services.individualTradeAutomotive.items.autoAccessories.imageAlt",
    href: "/quote?service=auto-accessories",
  },
  {
    id: "individual-business-solutions",
    number: "04",
    image: "/images/client-consultation.jpg",
    icon: Building2,
    titleKey: "services.individualTradeAutomotive.items.individualBusinessSolutions.title",
    descriptionKey: "services.individualTradeAutomotive.items.individualBusinessSolutions.description",
    featureKey: "services.individualTradeAutomotive.items.individualBusinessSolutions.feature",
    imageAltKey: "services.individualTradeAutomotive.items.individualBusinessSolutions.imageAlt",
    href: "/quote?service=business-solutions",
  },
];






export default function ImportExportServices() {
  return (
    <>
        <ServiceGroupSection
        sectionNumber="01"
        eyebrowKey="services.importExport.eyebrow"
        headingKey="services.importExport.heading"
        descriptionKey="services.importExport.intro"
        services={importExportServices}
        featured={true}
      />

      <ServiceGroupSection
        sectionNumber="02"
        eyebrowKey="services.freightLogistics.eyebrow"
        headingKey="services.freightLogistics.heading"
        descriptionKey="services.freightLogistics.intro"
        services={freightLogisticsServices}
        featured={true}

      />

<ServiceGroupSection
  sectionNumber="03"
  eyebrowKey="services.customsWarehousing.eyebrow"
  headingKey="services.customsWarehousing.heading"
  descriptionKey="services.customsWarehousing.intro"
  services={customsWarehousingServices}
  featured={false}
/>


     <ServiceGroupSection
  sectionNumber="04"
  eyebrowKey="services.individualTradeAutomotive.eyebrow"
  headingKey="services.individualTradeAutomotive.heading"
  descriptionKey="services.individualTradeAutomotive.intro"
  services={individualTradeAutomotiveServices}
  featured={false}

      />
    </>
  );
}

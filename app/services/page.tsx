
import PageHero from "@/app/components/Common/PageHero";
import ImportExportServices from "../components/services/ImportExportServices";
import Banner from "../components/Common/Banner";

export default function AboutHero() {
  return (
   <>
    <PageHero
        eyebrow="Services / Assayel"
      title="Our Services"
      description="Connected presence and experience across multiple markets, delivering reliable import, export, and international freight solutions."
      backgroundImage="https://images.unsplash.com/photo-1579360826591-2c98525b8dbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
      imageAlt="Assayel team and operations"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Assayel" },
      ]}
      primaryCta={{
        label: "Request a Quote",
        href: "/contact#contact",
      }}
      secondaryCta={{
        label: "Contact Us",
        href: "/contact",
      }}
      />
      <ImportExportServices />

<Banner/>

      </>

  );
}

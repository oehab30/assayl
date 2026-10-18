
import PageHero from "@/app/components/Common/PageHero";
import OurStory from "../components/about/OurStory";
import VisionMission from "../components/about/Visson&Mission";
import OurValues from "../components/about/OurValues";
import Banner from "../components/Common/Banner";

export default function AboutHero() {
  return (
   <>
    <PageHero
      eyebrow="ASSAYEL / ABOUT"
      title="About Assayel"
      description="Connected presence and experience across multiple markets, delivering reliable import, export, and international freight solutions."
      backgroundImage="/about-team.webp"
      imageAlt="Assayel team and operations"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "About Assayel" },
      ]}
      primaryCta={{
        label: "Request a Quote",
        href: "/quote",
      }}
      secondaryCta={{
        label: "Contact Us",
        href: "/contact",
      }}
      />
<OurStory />
<VisionMission />
<OurValues />
<Banner/>

      </>

  );
}

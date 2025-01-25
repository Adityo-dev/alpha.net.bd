import Image from "next/image";

// components
import Hero from "@/components/home/hero/Hero";
import ServiceOfferings from "@/components/home/serviceOfferings/ServiceOfferings";
import OurService from "@/components/home/ourService/OurService";
import HostingPlan from "@/components/home/hostingPlan/HostingPlan";
import HostServiceFeatures from "@/components/home/hostServiceFeatures/HostServiceFeatures";
import Company from "@/components/home/company/Company";
import OurTeamMembers from "@/components/home/ourTeamMembers/OurTeamMembers";
import AdvancedFeatures from "@/components/home/advancedFeatures/AdvancedFeatures";
import TechnologySolutions from "@/components/home/technologySolutions/TechnologySolutions";
import Testimonial from "@/components/home/testimonial/Testimonial";

export default function Home() {
  return (
    <main className="space-y-6 sm:space-y-12">
      <Hero />
      <section className="block sm:hidden">
        <HostServiceFeatures />
      </section>
      <ServiceOfferings />
      <TechnologySolutions />
      <HostingPlan />
      <AdvancedFeatures />
      <Company />
      <OurService />
      <OurTeamMembers />
      <Testimonial />
    </main>
  );
}

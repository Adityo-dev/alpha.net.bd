import Image from "next/image";

// components
import Hero from "@/components/home/hero/Hero";
import ServiceOfferings from "@/components/home/serviceOfferings/ServiceOfferings";
import OurService from "@/components/home/ourService/OurService";
import HostingPlan from "@/components/home/hostingPlan/HostingPlan";
import HostServiceFeatures from "@/components/home/hostServiceFeatures/HostServiceFeatures";
import Company from "@/components/home/company/Company";
import OurTeamMembers from "@/components/home/ourTeamMembers/OurTeamMembers";
import FAQ from "@/components/home/advancedFeatures/faq/FAQ";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <HostServiceFeatures />
      <ServiceOfferings />
      <HostingPlan />
      <Company />
      <OurService />
      <OurTeamMembers />
      <FAQ />
    </main>
  );
}

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

export default function Home() {
  return (
    <main className="space-y-16">
      <section className="relative">
        <div className="w-full absolute">
          <Hero />
        </div>
        <div className="relative pt-[62vh]">
          <HostServiceFeatures />
        </div>
      </section>
      <ServiceOfferings />
      <HostingPlan />
      <AdvancedFeatures />
      <Company />
      <OurService />
      <OurTeamMembers />
    </main>
  );
}

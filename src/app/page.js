import Image from "next/image";

// components
import Hero from "@/components/home/hero/Hero";
import ServiceOfferings from "@/components/home/serviceOfferings/ServiceOfferings";
import OurService from "@/components/home/ourService/OurService";
import HostingPlan from "@/components/home/hostingPlan/HostingPlan";

export default function Home() {
  return (
    <main className="space-y-16">
      <Hero />
      <ServiceOfferings />
      <HostingPlan />
      <OurService />
    </main>
  );
}

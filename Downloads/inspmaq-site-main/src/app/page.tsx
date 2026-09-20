import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import CompanyTabs from "@/components/CompanyTabs";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <CompanyTabs />
      <CallToAction />
    </main>
  );
}
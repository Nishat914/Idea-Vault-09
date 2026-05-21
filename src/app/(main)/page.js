import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import TreandingPage from "@/components/TreandingPage";
import Image from "next/image";

export default function Home() {
  return (
    <>
      
      <Banner></Banner>
      <TreandingPage></TreandingPage>
      <StatsSection></StatsSection>
      <HowItWorks></HowItWorks>
    </>
  );
}

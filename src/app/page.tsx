import GinNavbar from "@/components/gin-navbar";
import GinHero from "@/components/gin-hero";
import WhoWeAre from "@/components/who-we-are";
import CorePillars from "@/components/core-pillars";
import FlagshipProgram from "@/components/flagship-program";
import AllPrograms from "@/components/all-programs";
import WhyPartner from "@/components/why-partner";
import VisionStatement from "@/components/vision-statement";
import FooterCTA from "@/components/footer-cta";
import GinFooter from "@/components/gin-footer";
import { createClient } from "../../supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <GinNavbar user={user} />
      <GinHero />
      <WhoWeAre />
      <CorePillars />
      <FlagshipProgram />
      <AllPrograms />
      <WhyPartner />
      <VisionStatement />
      <FooterCTA />
      <GinFooter />
    </div>
  );
}

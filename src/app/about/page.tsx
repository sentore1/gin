import GinNavbar from "@/components/gin-navbar";
import GinFooter from "@/components/gin-footer";
import { createClient } from "../../../supabase/server";

export default async function AboutPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <GinNavbar user={user} alwaysLight />
      
      <div className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-6">Who We Are</h1>
        <p className="text-lg text-navy/70 leading-relaxed mb-12">
          Global Investment Network (GIN) is a strategic investment and production platform dedicated to transforming ideas into commercially viable and socially meaningful enterprises. We mobilize capital, structure opportunities, and provide expert advisory services that enable high-growth projects to move from concept to scale.
        </p>
        <p className="text-lg text-navy/70 leading-relaxed mb-16">
          Our model blends disciplined financial management, strategic partnerships, and market-driven execution to create sustainable value for investors, creators, and institutions.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Mission</h2>
            <p className="text-navy/70 leading-relaxed">
              To invest in and venture innovative ideas that build sustainable impact across creative industries, education, environmental advocacy, and emerging markets.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Vision</h2>
            <p className="text-navy/70 leading-relaxed">
              To become a trusted global venture platform recognized for building impactful, innovative, and sustainable ventures that shape the future of creative and development-driven industries.
            </p>
          </div>
        </div>

        <div className="bg-navy text-white p-12 rounded-lg">
          <h2 className="font-display text-3xl font-bold mb-8">Creative Arts, Film & Media</h2>
          <p className="text-white/90 leading-relaxed mb-6">
            Operating within the rapidly expanding Creative Arts Industry, GIN specializes in motion picture, video, and television programme production and financing. We identify promising concepts, structure them for investment readiness, and oversee production with strong financial governance and distribution planning.
          </p>
          <p className="text-white/90 leading-relaxed">
            From cinematic productions to digital content, our platform is designed to capture opportunities emerging from streaming platforms, regional content demand, and international distribution networks. By combining industry expertise with structured capital management, we enhance project bankability, diversify risk, and unlock multiple revenue streams across theatrical, broadcast, and digital markets.
          </p>
        </div>
      </div>

      <GinFooter />
    </div>
  );
}

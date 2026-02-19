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
          Global Investment Network (GIN) is a purpose-driven investment and development company integrating capital with strategic execution to mobilize sustainable economic growth.
        </p>
        <p className="text-lg text-navy/70 leading-relaxed mb-16">
          Operating at the intersection of finance, innovation, and sustainability, GIN structures disciplined investment frameworks that unlock scalable opportunities across three core sectors: creative arts, education and market-oriented skills development, and green economy initiatives.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Mission</h2>
            <p className="text-navy/70 leading-relaxed">
              To integrate capital with innovation and strategic partnerships in order to unlock scalable opportunities, bridge skills with global market demands, and drive measurable economic and social impact across high-growth sectors.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-display text-2xl font-bold text-navy mb-4">Vision</h2>
            <p className="text-navy/70 leading-relaxed">
             To become a globally trusted investment and development platform that transforms industries, strengthens education systems, and advances sustainable economies through strategic capital integration.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="bg-white p-12 rounded-lg shadow-sm">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Creative Arts Industry</h2>
            <p className="text-navy/80 leading-relaxed mb-6">
              We transform creativity into structured and investable enterprises.
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">Our work includes:</p>
            <ul className="list-disc list-inside text-navy/70 space-y-2 mb-6">
              <li>Commercialization strategy for creatives</li>
              <li>Investment structuring for creative ventures</li>
              <li>Ecosystem development for the creative economy</li>
              <li>International market linkage and exposure platforms</li>
            </ul>
            <p className="text-navy/80 leading-relaxed">
              We position artistic excellence within sustainable business frameworks capable of scaling globally.
            </p>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-sm">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Education & Training</h2>
            <p className="text-navy/80 leading-relaxed mb-6">
              Comprehensive programs designed to equip students with practical skills and industry-relevant knowledge for career success.
            </p>
            <p className="text-navy/70 leading-relaxed mb-6">
              We collaborate with international experts and industry partners to enhance academic systems and bridge the gap between academic learning and the demands of the international labour market.
            </p>
            <p className="text-navy/70 leading-relaxed mb-6">
              Through specialized short-term training programs, professional certifications, and industry-aligned capacity-building initiatives, we equip individuals with practical, job-ready competencies that increase employability, global competitiveness, and workforce relevance.
            </p>
            <ul className="list-disc list-inside text-navy/70 space-y-2 mb-6">
              <li>Short-term professional training programs</li>
              <li>Industry-aligned certification pathways</li>
              <li>Workforce readiness and employability enhancement</li>
              <li>Academic system strengthening and curriculum alignment</li>
              <li>Skills upgrading for global competitiveness</li>
            </ul>
            <p className="text-navy/80 leading-relaxed">
              We equip individuals with practical, job-ready competencies aligned with international industry standards.
            </p>
          </div>

          <div className="bg-white p-12 rounded-lg shadow-sm">
            <h2 className="font-display text-3xl font-bold text-navy mb-4">Green Economy & Sustainability</h2>
            <p className="text-navy/80 leading-relaxed mb-6">
              We align capital with environmental responsibility and sustainable innovation.
            </p>
            <p className="text-navy/70 leading-relaxed mb-4">Our work includes:</p>
            <ul className="list-disc list-inside text-navy/70 space-y-2 mb-6">
              <li>Sustainable investment structuring</li>
              <li>Climate-aligned project development</li>
              <li>Green entrepreneurship support</li>
              <li>SDG-driven development initiatives</li>
              <li>International sustainability forums and partnerships</li>
            </ul>
            <p className="text-navy/80 leading-relaxed">
              We convert environmental responsibility into structured economic opportunity.
            </p>
          </div>

          <div className="bg-navy text-white p-12 rounded-lg">
            <h2 className="font-display text-3xl font-bold mb-4">INVESTMENT & GROWTH PORTAL</h2>
            <p className="text-xl text-white/90 mb-6">Structured Capital. Scalable Opportunities.</p>
            <p className="text-white/80 leading-relaxed mb-6">
              Strategic platform connecting investors, partners, and enterprises to high-impact opportunities.
            </p>
            <p className="text-white/80 leading-relaxed mb-4">Through disciplined capital frameworks and strategic governance, we facilitate:</p>
            <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
              <li>Investment placement and capital deployment</li>
              <li>Partnership structuring and co-investment models</li>
              <li>Impact measurement and performance tracking</li>
              <li>Scalable sector development initiatives</li>
            </ul>
            <p className="text-white/90 leading-relaxed">
              This portal is designed to ensure transparency, accountability, and measurable financial and developmental returns.
            </p>
          </div>
        </div>
      </div>

      <GinFooter />
    </div>
  );
}

import GinNavbar from "@/components/gin-navbar";
import GinFooter from "@/components/gin-footer";
import { createClient } from "../../../supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Handshake, FileText, Users, Building2, Globe } from "lucide-react";

export default async function PartnershipPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const stakeholders = [
    { icon: Building2, title: "Strategic Investors", description: "Capital partners seeking impactful returns" },
    { icon: Handshake, title: "Venture Partners", description: "Co-creators and collaborators" },
    { icon: Users, title: "Creative Professionals & Institutions", description: "Artists, educators, and organizations" },
    { icon: Globe, title: "Development & Environmental Organizations", description: "Impact-driven entities" },
    { icon: Building2, title: "Public and Private Sector Collaborators", description: "Government and corporate partners" }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <GinNavbar user={user} alwaysLight />
      
      <div className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-6">Partnership & Venturing Model</h1>
        <p className="text-lg text-navy/70 leading-relaxed mb-16 max-w-3xl">
          GIN operates through equitable, value-based partnerships, where investment, expertise, networks, and operational capacity are combined to deliver shared impact and mutual benefit.
        </p>

        <div className="bg-white p-12 rounded-lg shadow-sm mb-16">
          <h2 className="font-display text-3xl font-bold text-navy mb-8">How We Partner</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Venture Proposals</h3>
              <p className="text-navy/70">Structured project submissions and evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Venture Agreements</h3>
              <p className="text-navy/70">Clear terms and shared governance</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy mb-2">Program-Specific Annexes</h3>
              <p className="text-navy/70">Tailored frameworks for each initiative</p>
            </div>
          </div>
        </div>

        <h2 className="font-display text-3xl font-bold text-navy mb-8">Target Stakeholders</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stakeholders.map((stakeholder, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <stakeholder.icon className="w-6 h-6 text-gold mb-4" />
              <h3 className="font-display text-lg font-bold text-navy mb-2">{stakeholder.title}</h3>
              <p className="text-navy/70 text-sm">{stakeholder.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-navy to-navy/90 text-white p-12 rounded-lg text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Interested in Partnering?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in building impactful ventures that create lasting value across creative industries and sustainable development.
          </p>
          <Link href="#contact">
            <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-6 text-lg">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>

      <GinFooter />
    </div>
  );
}

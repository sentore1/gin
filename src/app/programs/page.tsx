import GinNavbar from "@/components/gin-navbar";
import GinFooter from "@/components/gin-footer";
import { createClient } from "../../../supabase/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, Leaf, Briefcase, Lightbulb } from "lucide-react";

export default async function ProgramsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const programs = [
    {
      icon: GraduationCap,
      title: "Acting for Film Academy (AFA Program)",
      description: "A professional training and production program developing film and theatre talent through industry-aligned education, productions, and international-standard certification.",
      color: "bg-gold/10 text-gold"
    },
    {
      icon: Leaf,
      title: "Arts for Green Initiative",
      description: "A national arts-based advocacy program using creative expression to promote environmental protection, climate awareness, and sustainable practices.",
      color: "bg-gold/10 text-gold"
    },
    {
      icon: Briefcase,
      title: "Career Guidance & Internship Program",
      description: "A structured mentorship and internship platform designed to bridge academic knowledge with industry demand and professional standards.",
      color: "bg-gold/10 text-gold"
    },
    {
      icon: Lightbulb,
      title: "Venture & Project Incubation",
      description: "Supporting early-stage creative, educational, and impact-driven projects through incubation, mentorship, and strategic partnerships.",
      color: "bg-gold/10 text-gold"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <GinNavbar user={user} alwaysLight />
      
      <div className="pt-32 pb-20 px-6 lg:px-20 max-w-7xl mx-auto">
        <h1 className="font-display text-4xl lg:text-5xl font-bold text-navy mb-6">Key Programs & Initiatives</h1>
        <p className="text-lg text-navy/70 leading-relaxed mb-16 max-w-3xl">
          Our programs are designed to create lasting impact across creative industries, education, environmental advocacy, and entrepreneurship through structured training, mentorship, and strategic support.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className={`w-16 h-16 rounded-lg ${program.color} flex items-center justify-center mb-6`}>
                <program.icon className="w-8 h-8" />
              </div>
              <h2 className="font-display text-2xl font-bold text-navy mb-4">{program.title}</h2>
              <p className="text-navy/70 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white p-12 rounded-lg text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to Join Our Programs?</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards transforming your creative career or bringing your innovative project to life.
          </p>
          <Link href="/apply">
            <Button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-6 text-lg">
              Apply Now
            </Button>
          </Link>
        </div>
      </div>

      <GinFooter />
    </div>
  );
}

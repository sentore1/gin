import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function GinFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white text-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/logo.png"
              alt="Global Investment Network"
              width={160}
              height={60}
              className="h-16 w-auto mb-6"
              unoptimized
            />
            <p className="text-navy/70 text-sm leading-relaxed mb-6">
              Building impactful across creativity, education, and
              sustainable development.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Partnership
                </Link>
              </li>
              <li>
                <Link
                  href="/brand"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Brand Governance
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Programs</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/apply"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Acting for Film Academy Program
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Career Guidance & Internship
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Film Making & TV Production
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Animation & Motion Graphics
                </Link>
              </li>
              <li>
                <Link
                  href="/apply"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  Photography & Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-navy/70">
                  KN 4 Ave, Kigali, Rwanda
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="mailto:info@globallinne.com"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  info@globallinne.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="tel:+250780000000"
                  className="text-navy/70 hover:text-gold transition-colors"
                >
                  +250 784 444 439
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-navy/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-navy/50 text-sm">
            © {currentYear} Global Investment Network. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="#"
              className="text-navy/50 hover:text-gold transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-navy/50 hover:text-gold transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

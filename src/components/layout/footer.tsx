"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight">Pegrio.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering exceptional strategic solutions for modern businesses. We help you navigate complexity and achieve sustainable growth.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Twitter page" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our LinkedIn page" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram page" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#hero" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary" />
                <span>4521 Westheimer Rd, Suite 200<br />Houston, TX 77027</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="tel:+17135550198" className="hover:text-white transition-colors">(713) 555-0198</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                <a href="mailto:info@pegrio.com" className="hover:text-white transition-colors">info@pegrio.com</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link></li>
            </ul>
            <div className="mt-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Business Hours</h5>
              <p className="text-sm text-gray-400">Mon-Fri: 8am-6pm</p>
              <p className="text-sm text-gray-400">Sat: 9am-2pm</p>
              <p className="text-sm text-gray-400">Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Pegrio. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
import Link from "next/link";
import { ExternalLink, Mail, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "Enterprise Software", href: "/services#enterprise" },
    { label: "AI & Automation", href: "/services#ai" },
    { label: "UI/UX Design", href: "/services#design" },
    { label: "Cloud & DevOps", href: "/services#cloud" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  regions: [
    "🇦🇪 UAE",
    "🇸🇦 Saudi Arabia",
    "🇶🇦 Qatar",
    "🇰🇼 Kuwait",
    "🇧🇭 Bahrain",
    "🇴🇲 Oman",
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-bg-deep">
      {/* Main Footer */}
      <div className="container-custom pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 xl:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-brand-blue flex items-center justify-center font-heading font-bold text-white text-sm">
                4F
              </div>
              <div>
                <span className="font-heading font-bold text-sm text-text-primary">
                  4F Studio
                </span>
              </div>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 max-w-[280px]">
              Premium custom software development, built for Gulf enterprises
              who demand precision, reliability, and results.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/company/4fstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-brand-blue hover:border-brand-blue/30 transition-all"
                aria-label="LinkedIn"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="mailto:syedansaroffical@gmail.com"
                className="w-9 h-9 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-brand-blue hover:border-brand-blue/30 transition-all"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <a
                href="tel:+971000000000"
                className="w-9 h-9 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center text-text-secondary hover:text-brand-blue hover:border-brand-blue/30 transition-all"
                aria-label="Phone"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-5 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-5 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-heading font-semibold text-sm text-text-primary mt-8 mb-5 uppercase tracking-wider">
              Serving
            </h4>
            <div className="flex flex-wrap gap-2">
              {footerLinks.regions.map((region) => (
                <span
                  key={region}
                  className="text-xs text-text-secondary bg-bg-card px-2.5 py-1 rounded-md border border-border-subtle"
                >
                  {region}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-5 uppercase tracking-wider">
              Start a Project
            </h4>
            <p className="text-sm text-text-secondary mb-5 leading-relaxed">
              Ready to build something exceptional? Let&apos;s discuss your
              project over a discovery call.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-5 py-2.5 bg-brand-blue text-white text-sm font-medium rounded-lg hover:bg-brand-blue-light transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
            >
              Get in Touch
            </Link>
            <div className="mt-6 p-3 rounded-lg bg-bg-card border border-border-subtle">
              <p className="text-xs text-text-dim mb-1">Response time</p>
              <p className="text-sm text-brand-gold font-medium">
                Within 4 business hours
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border-subtle">
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-dim">
            © {new Date().getFullYear()} 4F Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-text-dim hover:text-text-secondary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-text-dim hover:text-text-secondary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

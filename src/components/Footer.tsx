import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Shield, Award, Users, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Demandseeker</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering B2B sales teams with AI-powered prospecting and contact intelligence. 
              Transform your lead generation with verified email discovery and enrichment.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Award className="h-4 w-4 text-secondary" />
                <span>GDPR Ready</span>
              </div>
            </div>
          </div>

          {/* Products & Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Solutions</h3>
            <ul className="space-y-3">
              <li><a href="https://salescentri.com/platforms/contact-intelligence/ai-aggregator?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">AI Hunter Platform</a></li>
              <li><a href="https://salescentri.com/services/data-enrichment?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Data Enrichment</a></li>
              <li><a href="https://salescentri.com/platforms/lead-management/lead-generation?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">Lead Generation</a></li>
              <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">SDR Teams</a></li>
              <li><a href="https://salescentri.com/solutions/psa-suite?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=solutions" className="text-muted-foreground hover:text-primary transition-colors text-sm">PSA Suite</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Resources</h3>
            <ul className="space-y-3">
              <li><a href="https://salescentri.com/resources/case-studies?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">Case Studies</a></li>
              <li><a href="https://salescentri.com/resources/whitepapers-ebooks?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">Whitepapers</a></li>
              <li><a href="https://salescentri.com/docs/user-guide?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">User Guide</a></li>
              <li><a href="https://salescentri.com/docs/api-reference?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=resources" className="text-muted-foreground hover:text-primary transition-colors text-sm">API Reference</a></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Get Started</h3>
            <ul className="space-y-3 mb-6">
              <li><a href="https://salescentri.com/get-started/free-trial?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=get_started" className="text-muted-foreground hover:text-primary transition-colors text-sm">Free Trial</a></li>
              <li><a href="https://salescentri.com/get-started/book-demo?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=get_started" className="text-muted-foreground hover:text-primary transition-colors text-sm">Book Demo</a></li>
              <li><a href="https://salescentri.com/pricing?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=get_started" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pricing</a></li>
              <li><a href="https://salescentri.com/contact/support-request?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=support" className="text-muted-foreground hover:text-primary transition-colors text-sm">Support</a></li>
            </ul>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Miami, FL</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>10,000+ Active Users</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p>&copy; {currentYear} Demandseeker Solutions. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
                <a href="https://salescentri.com/trust/security-privacy?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=trust" className="hover:text-primary transition-colors">Security</a>
              </div>
            </div>
            
            {/* Strategic Backlink */}
            <div className="flex items-center space-x-2 text-sm">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <a 
                href="https://salescentri.com?utm_source=demandseeker.com&utm_medium=footer&utm_campaign=partner_network" 
                className="text-muted-foreground hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Demandseeker Solutions",
            "description": "AI-powered B2B lead intelligence and contact discovery platform",
            "url": "https://demandseeker.com",
            "logo": "https://demandseeker.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-305-XXX-XXXX",
              "contactType": "sales",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Miami",
              "addressRegion": "FL",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://linkedin.com/company/demandseeker",
              "https://twitter.com/demandseeker"
            ]
          })
        }}
      />
    </footer>
  );
};

export default Footer;
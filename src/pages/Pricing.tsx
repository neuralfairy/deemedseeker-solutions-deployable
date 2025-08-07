import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Simple</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your AI Hunter needs. All plans include verified contact discovery and enrichment.
            </p>
          </div>
          
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold mb-4">Pricing Plans Coming Soon</h2>
            <p className="text-muted-foreground mb-8">Transparent pricing for all business sizes.</p>
            <a
              href="https://salescentri.com/pricing?utm_source=demandseeker.com&utm_medium=pricing&utm_campaign=view_pricing"
              className="btn-hero"
            >
              View Current Pricing
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
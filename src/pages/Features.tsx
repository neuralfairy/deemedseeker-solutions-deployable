import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">AI Hunter</span> Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our AI-powered platform transforms B2B prospecting with advanced contact discovery and enrichment capabilities.
            </p>
          </div>
          
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold mb-4">Features Coming Soon</h2>
            <p className="text-muted-foreground mb-8">We're building amazing features for AI Hunter.</p>
            <a
              href="https://salescentri.com/get-started/book-demo?utm_source=demandseeker.com&utm_medium=features&utm_campaign=demo"
              className="btn-hero"
            >
              Book Demo
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Terms of <span className="gradient-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Terms and conditions for using Demandseeker AI Hunter platform.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Service Agreement</h2>
            <p>By using Demandseeker AI Hunter, you agree to these terms...</p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Usage Guidelines</h2>
            <p>AI Hunter must be used in compliance with applicable laws...</p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Limitations</h2>
            <p>Demandseeker Solutions provides services "as is"...</p>
            
            <div className="text-center mt-12">
              <a
                href="https://salescentri.com/trust/terms-of-service?utm_source=demandseeker.com&utm_medium=terms&utm_campaign=full_terms"
                className="btn-hero"
              >
                View Full Terms
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
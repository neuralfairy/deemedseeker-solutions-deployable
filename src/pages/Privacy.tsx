import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
            <p>Demandseeker Solutions collects data to provide AI Hunter services...</p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Data Usage</h2>
            <p>We use collected data to improve our AI prospecting capabilities...</p>
            
            <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Data Protection</h2>
            <p>Your data is protected with enterprise-grade security measures...</p>
            
            <div className="text-center mt-12">
              <a
                href="https://salescentri.com/trust/security-privacy?utm_source=demandseeker.com&utm_medium=privacy&utm_campaign=full_policy"
                className="btn-hero"
              >
                View Full Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
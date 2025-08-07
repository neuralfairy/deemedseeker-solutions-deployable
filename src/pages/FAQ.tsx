import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get answers to common questions about AI Hunter and our prospecting solutions.
            </p>
          </div>
          
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold mb-4">FAQ Section Coming Soon</h2>
            <p className="text-muted-foreground mb-8">Common questions about AI Hunter capabilities.</p>
            <a
              href="https://salescentri.com/contact/support-request?utm_source=demandseeker.com&utm_medium=faq&utm_campaign=support"
              className="btn-hero"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
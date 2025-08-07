import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your B2B prospecting? Contact our AI Hunter experts today.
            </p>
          </div>
          
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold mb-4">Contact Options</h2>
            <p className="text-muted-foreground mb-8">Multiple ways to reach our team in Miami, FL.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://salescentri.com/contact?utm_source=demandseeker.com&utm_medium=contact&utm_campaign=general"
                className="btn-hero"
              >
                Contact Sales
              </a>
              <a
                href="https://salescentri.com/contact/support-request?utm_source=demandseeker.com&utm_medium=contact&utm_campaign=support"
                className="btn-secondary"
              >
                Get Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
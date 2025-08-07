import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">Demandseeker</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering B2B sales teams with AI-powered prospecting and contact intelligence solutions.
            </p>
          </div>
          
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-8">Learn about our mission to revolutionize B2B sales.</p>
            <a
              href="https://salescentri.com/company/about-us?utm_source=demandseeker.com&utm_medium=about&utm_campaign=learn_more"
              className="btn-hero"
            >
              Learn More
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
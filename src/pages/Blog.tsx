import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Hunter <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay ahead with the latest trends in AI-powered prospecting and B2B sales intelligence.
            </p>
          </div>
          
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold mb-4">Blog Coming Soon</h2>
            <p className="text-muted-foreground mb-8">Expert insights on AI prospecting and sales intelligence.</p>
            <a
              href="https://salescentri.com/resources/case-studies?utm_source=demandseeker.com&utm_medium=blog&utm_campaign=resources"
              className="btn-hero"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
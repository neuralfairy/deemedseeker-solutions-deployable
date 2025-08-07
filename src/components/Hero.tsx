import { ArrowRight, Play, Sparkles, Target, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  const stats = [
    { label: 'Email Accuracy', value: '95%+' },
    { label: 'Time Saved', value: '80%' },
    { label: 'Lead Quality', value: '3x Higher' },
    { label: 'ROI Increase', value: '250%' }
  ];

  const trustIndicators = [
    'SOC 2 Compliant',
    'GDPR Ready',
    '10,000+ Users',
    '99.9% Uptime'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse floating animation-delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              New: AI-Powered Contact Verification
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in animation-delay-200">
            <span className="gradient-text">AI Hunter</span>
            <br />
            <span className="text-foreground">Finds Every Lead</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            Transform your B2B prospecting with AI-powered contact discovery. 
            <span className="text-primary font-semibold"> Find verified emails</span>, 
            enrich lead data, and accelerate your sales pipeline.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animation-delay-600">
            <a
              href="https://salescentri.com/get-started/book-demo?utm_source=demandseeker.com&utm_medium=hero&utm_campaign=demo"
              className="btn-hero group flex items-center space-x-2"
            >
              <span>Book Live Demo</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="https://salescentri.com/get-started/free-trial?utm_source=demandseeker.com&utm_medium=hero&utm_campaign=trial"
              className="btn-secondary group flex items-center space-x-2"
            >
              <Play className="h-5 w-5" />
              <span>Start Free Trial</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in animation-delay-600">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{indicator}</span>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-scale-in animation-delay-600">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card ai-glow text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in animation-delay-600">
          <div className="glass-card ai-glow text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Precision Targeting</h3>
            <p className="text-muted-foreground text-sm">
              AI algorithms identify high-quality prospects with 95%+ accuracy
            </p>
          </div>

          <div className="glass-card ai-glow text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Instant Verification</h3>
            <p className="text-muted-foreground text-sm">
              Real-time email verification ensures deliverability and reduces bounces
            </p>
          </div>

          <div className="glass-card ai-glow text-center group">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Smart Enrichment</h3>
            <p className="text-muted-foreground text-sm">
              Automatically enriches contacts with job titles, company data, and more
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
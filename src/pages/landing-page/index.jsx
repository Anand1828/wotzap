import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';

// Import all components
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionShowcase from './components/SolutionShowcase';
import BenefitsGrid from './components/BenefitsGrid';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import PricingSection from './components/PricingSection';
// import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import FloatingActionMenu from '../../components/ui/FloatingActionMenu';
import StickyProgressBar from '../../components/ui/StickyProgressBar';
import SectionNavigator from '../../components/ui/SectionNavigator';
import InteractiveDemoSection from './components/InteractiveDemoSection';

const LandingPage = () => {
  const [openBookDemoModal, setOpenBookDemoModal] = useState(() => () => {});
  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <Layout getOpenBookDemoModal={setOpenBookDemoModal}>
      <Helmet>
        <title>Wotzap - 10x Your Customer Engagement | Official WhatsApp Business Partner</title>
        <meta 
          name="description" 
          content="Get 98% message read rates with Wotzap. Official WhatsApp Business API integration. Demo Free - no credit card required." 
        />
        <meta name="keywords" content="Wotzap, WhatsApp Business API, customer engagement, marketing automation, bulk messaging" />
        <meta property="og:title" content="Wotzap - 10x Your Customer Engagement" />
        <meta property="og:description" content="Transform your customer engagement with 98% read rates. Official WhatsApp Business Partner. Demo Free." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wotzap.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wotzap - 10x Your Customer Engagement" />
        <meta name="twitter:description" content="Get 98% message read rates vs 2% email. Official WhatsApp Business API. Demo Free today." />
        <link rel="canonical" href="https://wotzap.com" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "WhatsApp Marketing Pro",
            "description": "WhatsApp marketing automation platform with official WhatsApp Business API integration",
            "url": "https://whatsappmarketingpro.com",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceValidUntil": "2024-12-31"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "5000"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        {/* Header is included in Layout */}
        
        {/* Progress Indicator */}
        <StickyProgressBar />
        
        {/* Section Navigator */}
        <SectionNavigator />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection openBookDemoModal={openBookDemoModal} />
          
          {/* Problem Agitation */}
          <ProblemSection />
          
          {/* Solution Showcase */}
          <SolutionShowcase />
          
          {/* Benefits Grid */}
          <BenefitsGrid />
          
          <InteractiveDemoSection openBookDemoModal={openBookDemoModal} />
          {/* Social Proof */}
          <TestimonialsCarousel />
          
          {/* Pricing */}
          <PricingSection />
          
          {/* FAQ */}
          {/* <FAQSection openBookDemoModal={openBookDemoModal} /> */}
          
          {/* Final CTA */}
          <FinalCTASection openBookDemoModal={openBookDemoModal} />
        </main>
        
        {/* Footer is included in Layout */}
        {/* Floating Action Menu is included in Layout */}
      </div>
    </Layout>
  );
};

export default LandingPage;
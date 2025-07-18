import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';

// Import all components
import Header from '../../components/ui/Header';
import HeroSection from '../landing-page/components/HeroSection';
import ProblemSection from '../landing-page/components/ProblemSection';
import BenefitsGrid from '../landing-page/components/BenefitsGrid';
import TestimonialsCarousel from '../landing-page/components/TestimonialsCarousel';
import PricingSection from '../landing-page/components/PricingSection';
import FAQSection from '../landing-page/components/FAQSection';
import FinalCTASection from '../landing-page/components/FinalCTASection';
import Footer from '../landing-page/components/Footer';
import FloatingActionMenu from '../../components/ui/FloatingActionMenu';
import StickyProgressBar from '../../components/ui/StickyProgressBar';

const HomePage = () => {
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
        {/* Navigation - included in Layout */}
        
        {/* Progress Indicator */}
        <StickyProgressBar />
        
        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <HeroSection openBookDemoModal={openBookDemoModal} />
          
          {/* Problem Agitation */}
          <ProblemSection />
          
          {/* Benefits Grid */}
          <BenefitsGrid />
          
          {/* Social Proof */}
          <TestimonialsCarousel />
          
          {/* Pricing */}
          <PricingSection />
          
          {/* FAQ */}
          <FAQSection openBookDemoModal={openBookDemoModal} />
          
          {/* Final CTA */}
          <FinalCTASection openBookDemoModal={openBookDemoModal} />
        </main>
        
        {/* Footer - included in Layout */}
        
        {/* Floating Action Menu - included in Layout */}
      </div>
    </Layout>
  );
};

export default HomePage;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Footer from '../landing-page/components/Footer';
import FloatingActionMenu from '../../components/ui/FloatingActionMenu';
import StickyProgressBar from '../../components/ui/StickyProgressBar';
import FeatureNavigation from './components/FeatureNavigation';
import FeatureDemo from './components/FeatureDemo';
import IntegrationShowcase from './components/IntegrationShowcase';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import SupportSection from './components/SupportSection';
import BookDemoForm from '../../components/ui/BookDemoForm';
import Modal from '../../components/ui/Modal';

const FeaturesPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [openBookDemoModal, setOpenBookDemoModal] = useState(false);

  const categories = [
    {
      id: 'messaging',
      name: 'Messaging',
      icon: 'MessageCircle',
      description: 'Send bulk messages, create templates, and manage conversations'
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: 'Zap',
      description: 'Create automated workflows and trigger-based messaging'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: 'BarChart',
      description: 'Track performance, measure ROI, and optimize campaigns'
    },
    {
      id: 'management',
      name: 'Management',
      icon: 'Settings',
      description: 'Organize contacts, manage teams, and configure settings'
    }
  ];

  const features = {
    messaging: [
      {
        title: 'Bulk Message Campaign',
        description: 'Send personalized messages to thousands of contacts with advanced targeting and scheduling capabilities.',
        demoType: 'bulk-messaging',
        interactive: true,
        metrics: {
          deliveryRate: '99.8%',
          readRate: '98.2%',
          responseRate: '24.7%'
        }
      },
      {
        title: 'Template Management',
        description: 'Create, manage, and optimize message templates with rich media support and variable personalization.',
        demoType: 'template-management',
        interactive: false
      },
      {
        title: 'Rich Media Messaging',
        description: 'Send images, videos, documents, and interactive buttons to create engaging customer experiences.',
        demoType: 'rich-media',
        interactive: true
      }
    ],
    automation: [
      {
        title: 'Welcome Automation',
        description: 'Automatically welcome new contacts with personalized message sequences and follow-up campaigns.',
        demoType: 'automation',
        interactive: true,
        metrics: {
          triggerRate: '100%',
          completionRate: '87.3%',
          conversionRate: '31.2%'
        }
      },
      {
        title: 'Drip Campaigns',
        description: 'Create multi-step nurture sequences that guide prospects through your sales funnel.',
        demoType: 'drip-campaigns',
        interactive: false
      },
      {
        title: 'Smart Triggers',
        description: 'Set up intelligent triggers based on customer behavior, dates, or external events.',
        demoType: 'smart-triggers',
        interactive: true
      }
    ],
    analytics: [
      {
        title: 'Real-time Dashboard',
        description: 'Monitor campaign performance with live metrics, delivery rates, and engagement analytics.',
        demoType: 'analytics',
        interactive: true,
        metrics: {
          messagesSent: '2,847',
          readRate: '98.2%',
          clickRate: '24.7%',
          revenue: '₹12,450'
        }
      },
      {
        title: 'Advanced Reports',
        description: 'Generate detailed reports with custom date ranges, filters, and export options.',
        demoType: 'advanced-reports',
        interactive: false
      },
      {
        title: 'ROI Tracking',
        description: 'Track revenue attribution and calculate return on investment for your WhatsApp campaigns.',
        demoType: 'roi-tracking',
        interactive: true
      }
    ],
    management: [
      {
        title: 'Contact Management',
        description: 'Organize contacts with custom fields, tags, and segments for targeted messaging.',
        demoType: 'contact-management',
        interactive: true,
        metrics: {
          totalContacts: '2,847',
          activeContacts: '2,652',
          segments: '12'
        }
      },
      {
        title: 'Team Collaboration',
        description: 'Manage team members with role-based permissions and shared inboxes.',
        demoType: 'team-collaboration',
        interactive: false
      },
      {
        title: 'Compliance Tools',
        description: 'Ensure GDPR compliance with opt-in management and data protection features.',
        demoType: 'compliance',
        interactive: true
      }
    ]
  };

  useEffect(() => {
    if (categories?.length > 0) {
      setActiveCategory(categories[0]);
    }
  }, []);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <Helmet>
        <title>Features - Wotzap | Complete Platform Overview</title>
        <meta 
          name="description" 
          content="Explore all features of Wotzap: bulk messaging, automation, analytics, and contact management. Interactive demos and detailed explanations." 
        />
        <meta name="keywords" content="Wotzap features, bulk messaging, automation, analytics, contact management, WhatsApp Business API" />
        <meta property="og:title" content="Features - Wotzap" />
        <meta property="og:description" content="Comprehensive platform features for WhatsApp marketing success" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://wotzap.com/features-page" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <Header openBookDemoModal={() => setOpenBookDemoModal(true)} />
        
        {/* Progress Indicator */}
        <StickyProgressBar />
        
        {/* Main Content */}
        <main className="">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-br from-primary-50 to-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon name="Zap" size={32} className="text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                  Powerful Features for
                  <span className="block text-primary">WhatsApp Marketing Success</span>
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                  Explore our comprehensive platform through interactive demonstrations and detailed explanations. 
                  See how each feature can transform your customer engagement.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    iconName="ExternalLink"
                    iconPosition="right"
                    onClick={() => setOpenBookDemoModal(true)}
                  >
                    Demo Free
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Feature Categories Navigation */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeatureNavigation 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </section>

          {/* Feature Demos */}
          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  {activeCategory?.name} Features
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  {activeCategory?.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {features[activeCategory?.id]?.map((feature, index) => (
                  <FeatureDemo
                    key={index}
                    title={feature.title}
                    description={feature.description}
                    demoType={feature.demoType}
                    interactive={feature.interactive}
                    metrics={feature.metrics}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Implementation Timeline */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                  Implementation Timeline
                </h2>
                <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                  Get up and running quickly with our streamlined setup process
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Day 1</h3>
                  <p className="text-text-secondary">Account setup and WhatsApp Business API connection</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Upload" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Day 2-3</h3>
                  <p className="text-text-secondary">Contact import and first campaign setup</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">Week 1</h3>
                  <p className="text-text-secondary">Full automation and optimization in place</p>
                </div>
              </div>
            </div>
          </section>

          {/* Integration Showcase */}
          <section className="py-10 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <IntegrationShowcase />
            </div>
          </section>

       {/* Additional Features Grid */}
       <div className="py-10 max-w-7xl mx-auto px-6 lg:px-8">
       <div className="mt-16 bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Additional Platform Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Icon name="Zap" size={32} color="#16a34a" className="mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Lightning Fast</h4>
              <p className="text-sm text-gray-600">Messages delivered in seconds</p>
            </div>
            
            <div className="text-center">
              <Icon name="Clock" size={32} color="#2563eb" className="mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">24/7 Availability</h4>
              <p className="text-sm text-gray-600">Round-the-clock service uptime</p>
            </div>
            
            <div className="text-center">
              <Icon name="Globe" size={32} color="#7c3aed" className="mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Global Reach</h4>
              <p className="text-sm text-gray-600">Available in 180+ countries</p>
            </div>
            
            <div className="text-center">
              <Icon name="HeadphonesIcon" size={32} color="#ea580c" className="mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
              <p className="text-sm text-gray-600">Dedicated customer success team</p>
            </div>
          </div>
        </div>
</div>
          {/* CTA Section */}
         <SupportSection/>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Floating Action Menu */}
        <FloatingActionMenu />
        {/* Book Demo Modal */}
        <Modal isOpen={openBookDemoModal} onClose={() => setOpenBookDemoModal(false)}>
          <BookDemoForm onSuccess={() => setOpenBookDemoModal(false)} />
        </Modal>
      </div>
    </>
  );
};

export default FeaturesPage;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const coreFeatures = [
    { category: 'Messaging', features: ['Unlimited conversations', 'Multi-media support', 'Message templates', 'Auto-replies'] },
    { category: 'Broadcasting', features: ['Bulk messaging', 'Scheduled campaigns', 'Audience segmentation', 'Campaign analytics'] },
    { category: 'Automation', features: ['Chatbot integration', 'Workflow automation', 'Smart routing', 'Auto-assignment'] },
    { category: 'Analytics', features: ['Real-time reporting', 'Performance metrics', 'ROI tracking', 'Custom dashboards'] }
  ];

  const supportFeatures = [
    { type: '24/7 Priority Support', available: true, icon: 'Clock' },
    { type: 'Dedicated Account Manager', available: true, icon: 'User' },
    { type: 'Training & Onboarding', available: true, icon: 'GraduationCap' },
    { type: 'Technical Integration Support', available: true, icon: 'Wrench' }
  ];

  const businessRequirements = [
    'Business Registration Certificate',
    'GST Registration (if applicable)',
    'Business Bank Statement',
    'Valid Business Address Proof'
  ];

  const FeatureCard = ({ category, features }) => (
    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
      <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
          <Icon name="Check" size={16} className="text-primary" />
        </div>
        {category}
      </h4>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-gray-600 text-sm flex items-center">
            <Icon name="ArrowRight" size={14} className="text-gray-400 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} className="mr-2" />
            WhatsApp Marketing Solution
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Complete{' '}
            <span className="text-gradient bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed with WhatsApp marketing and customer engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Included Features</h3>
            <p className="text-gray-600">Everything you need to succeed with WhatsApp marketing</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFeatures.map((feature, index) => (
              <FeatureCard key={index} category={feature.category} features={feature.features} />
            ))}
          </div>
        </div>

        {/* Support & Requirements */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Support */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center mr-3">
                <Icon name="HeartHandshake" size={20} className="text-success" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Premium Support</h3>
            </div>
            
            <div className="space-y-4">
              {supportFeatures.map((support, index) => (
                <div key={index} className="flex items-center p-4 bg-success-50 rounded-lg">
                  <Icon name={support.icon} size={20} className="text-success mr-3 flex-shrink-0" />
                  <span className="font-medium text-gray-800">{support.type}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                <Icon name="FileCheck" size={20} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Business Requirements</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Required documents for WhatsApp Business API verification:
            </p>
            
            <div className="space-y-3">
              {businessRequirements.map((doc, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Icon name="FileText" size={16} className="text-gray-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-primary-100 mb-6">
                Join thousands of businesses already using WhatsApp to engage customers and drive sales.
              </p>
              
              <div className="text-sm text-primary-100 space-y-2">
                <div className="flex items-center">
                  <Icon name="Shield" size={14} className="mr-2" />
                  <span>Secure and reliable platform</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Calendar" size={14} className="mr-2" />
                  <span>Get started today with our expert team</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Globe" size={14} className="mr-2" />
                  <span>Global reach with local support</span>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">Get Started</div>
                <div className="text-primary-100">Transform your customer engagement</div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  className="bg-Priority text-primary hover:bg-primary-50"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
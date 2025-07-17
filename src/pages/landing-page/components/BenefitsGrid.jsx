import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsGrid = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null);

  const benefits = [
    {
      id: 'bulk-messaging',
      title: 'Bulk Messaging',
      description: 'Send personalized messages to thousands of customers instantly with smart contact segmentation.',
      icon: 'Send',
      color: 'primary',
      features: [
        'Send up to 10,000 messages per day',
        'Smart contact segmentation',
        'Personalized message variables',
        'Scheduled message delivery'
      ],
      demo: {
        title: 'Bulk Campaign Demo',
        content: 'Hi {{name}}! 🎉\n\nYour favorite items are back in stock!\n\nGet 15% off with code BACK15\n\nShop now: {{store_link}}'
      }
    },
    {
      id: 'automation',
      title: 'Smart Automation',
      description: 'Set up intelligent workflows that respond to customer actions and trigger personalized messages.',
      icon: 'Zap',
      color: 'secondary',
      features: [
        'Trigger-based workflows',
        'Customer journey mapping',
        'Behavioral targeting',
        'A/B testing automation'
      ],
      demo: {
        title: 'Automation Workflow',
        content: 'New Customer → Welcome Message → Product Recommendations → Follow-up Survey'
      }
    },
    {
      id: 'analytics',
      title: 'Real-Time Analytics',
      description: 'Track message delivery, read rates, and conversions with comprehensive reporting dashboard.',
      icon: 'BarChart3',
      color: 'accent',
      features: [
        '98% message delivery rate',
        'Real-time read receipts',
        'Conversion tracking',
        'ROI measurement'
      ],
      demo: {
        title: 'Analytics Overview',
        content: 'Messages Sent: 5,247\nRead Rate: 98.2%\nClick Rate: 34.5%\nConversions: 456'
      }
    },
    {
      id: 'contact-management',
      title: 'Contact Management',
      description: 'Organize and segment your customer database with advanced filtering and tagging capabilities.',
      icon: 'Users',
      color: 'success',
      features: [
        'Unlimited contact storage',
        'Advanced segmentation',
        'Custom tags and fields',
        'Import/export capabilities'
      ],
      demo: {
        title: 'Contact Segments',
        content: 'VIP Customers: 1,247\nNew Subscribers: 3,456\nActive Buyers: 2,891\nWin-back Targets: 567'
      }
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      primary: {
        bg: 'bg-primary-50',
        border: 'border-primary-200',
        icon: 'text-primary',
        accent: 'bg-primary'
      },
      secondary: {
        bg: 'bg-secondary-50',
        border: 'border-secondary-200',
        icon: 'text-secondary',
        accent: 'bg-secondary'
      },
      accent: {
        bg: 'bg-accent-50',
        border: 'border-accent-200',
        icon: 'text-accent',
        accent: 'bg-accent'
      },
      success: {
        bg: 'bg-success-50',
        border: 'border-success-200',
        icon: 'text-success',
        accent: 'bg-success'
      }
    };
    return colorMap[color];
  };

  return (
    <section id="features" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Everything You Need to{' '}
            <span className="text-gradient">Succeed</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Powerful features designed to help you create, automate, and optimize your WhatsApp marketing campaigns 
            with professional results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const colors = getColorClasses(benefit.color);
            const isHovered = hoveredBenefit === benefit.id;
            
            return (
              <div
                key={benefit.id}
                onMouseEnter={() => setHoveredBenefit(benefit.id)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className={`relative bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                  isHovered 
                    ? `${colors.border} shadow-xl scale-105` 
                    : 'border-border shadow-sm hover:shadow-md'
                }`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  isHovered ? 'scale-110' : ''
                }`}>
                  <Icon name={benefit.icon} size={32} className={colors.icon} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {benefit.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="Check" size={16} className={colors.icon} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Demo */}
                {isHovered && (
                  <div className="absolute inset-0 bg-white rounded-2xl p-6 border-2 border-primary shadow-2xl z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`w-12 h-12 ${colors.accent} rounded-lg flex items-center justify-center`}>
                        <Icon name={benefit.icon} size={24} className="text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-text-primary">{benefit.demo.title}</h4>
                        <div className="text-xs text-text-secondary">Live Demo</div>
                      </div>
                    </div>

                    <div className={`${colors.bg} rounded-lg p-4 mb-4`}>
                      <div className="text-sm text-text-primary whitespace-pre-line font-mono">
                        {benefit.demo.content}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-success">
                        <Icon name="Play" size={12} />
                        <span>Interactive Demo</span>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-text-secondary">
                        <Icon name="MousePointer" size={12} />
                        <span>Click to explore</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Hover Indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full transition-all duration-300 ${
                  isHovered ? colors.accent : 'bg-surface'
                }`}></div>
              </div>
            );
          })}
        </div>

        {/* Success Metrics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Proven Results Across Industries
            </h3>
            <p className="text-text-secondary">
              See how businesses like yours are succeeding with WhatsApp marketing
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-text-secondary">Message Delivery Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">10x</div>
              <div className="text-sm text-text-secondary">Higher Engagement vs Email</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">300%</div>
              <div className="text-sm text-text-secondary">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15min</div>
              <div className="text-sm text-text-secondary">Setup Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
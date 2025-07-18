import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EnterpriseSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    messageVolume: '',
    requirements: ''
  });

  const [showCalendar, setShowCalendar] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Enterprise form submitted:', formData);
  };

  const enterpriseFeatures = [
    {
      icon: 'Users',
      title: 'Unlimited Team Members',
      description: 'Add unlimited team members with granular role-based permissions'
    },
    {
      icon: 'Zap',
      title: 'Advanced Automation',
      description: 'Complex workflows with AI-powered triggers and multi-step sequences'
    },
    {
      icon: 'Shield',
      title: 'Enhanced Security',
      description: 'Enterprise-grade security with SSO, audit logs, and compliance features'
    },
    {
      icon: 'Database',
      title: 'Custom Integrations',
      description: 'Connect with your CRM, ERP, and other business systems via API'
    },
    {
      icon: 'Headphones',
      title: 'Dedicated Support',
      description: '24/7 priority support with dedicated account manager'
    },
    {
      icon: 'BarChart',
      title: 'Advanced Analytics',
      description: 'Custom dashboards, white-label reports, and data export options'
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Enterprise Solutions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Scalable WhatsApp marketing for large organizations with custom requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Enterprise Features
            </h3>
            
            <div className="space-y-6">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-text-secondary">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-background rounded-lg p-6 border border-border">
              <div className="flex items-center mb-4">
                <Icon name="Award" size={24} className="text-primary mr-2" />
                <h4 className="text-lg font-semibold text-text-primary">
                  Enterprise SLA
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <Icon name="Clock" size={16} className="text-success mr-2" />
                  <span>99.99% uptime guarantee</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MessageCircle" size={16} className="text-success mr-2" />
                  <span>1-hour response time</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Shield" size={16} className="text-success mr-2" />
                  <span>SOC 2 Type II compliant</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Globe" size={16} className="text-success mr-2" />
                  <span>Global infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Get Custom Pricing
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Acme Corp"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Expected Monthly Message Volume *
                </label>
                <select
                  value={formData.messageVolume}
                  onChange={(e) => handleInputChange('messageVolume', e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select volume range</option>
                  <option value="100k-500k">100K - 500K messages</option>
                  <option value="500k-1m">500K - 1M messages</option>
                  <option value="1m-5m">1M - 5M messages</option>
                  <option value="5m+">5M+ messages</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">
                  Additional Requirements
                </label>
                <textarea
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  rows="4"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your specific needs, integrations, or compliance requirements..."
                />
              </div>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Button
                  type="submit"
                  variant="primary"
                  className="flex-1 shadow-cta"
                  iconName="Send"
                  iconPosition="left"
                >
                  Get Custom Quote
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSection;
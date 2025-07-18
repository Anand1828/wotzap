import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationShowcase = () => {
  const [activeIntegration, setActiveIntegration] = useState(null);

  const integrations = [
    {
      id: 'salesforce',
      name: 'Salesforce',
      description: 'Sync contacts and track customer interactions',
      icon: 'Database',
      color: 'bg-blue-500',
      features: ['Contact Sync', 'Lead Management', 'Sales Pipeline', 'Custom Fields'],
      setupTime: '15 minutes'
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      description: 'Integrate with your CRM and marketing workflows',
      icon: 'Target',
      color: 'bg-orange-500',
      features: ['CRM Integration', 'Marketing Automation', 'Deal Tracking', 'Analytics'],
      setupTime: '10 minutes'
    },
    {
      id: 'shopify',
      name: 'Shopify',
      description: 'Connect your e-commerce store for order updates',
      icon: 'ShoppingCart',
      color: 'bg-green-500',
      features: ['Order Notifications', 'Customer Sync', 'Abandoned Cart', 'Product Updates'],
      setupTime: '20 minutes'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Connect with 5000+ apps through automation',
      icon: 'Zap',
      color: 'bg-purple-500',
      features: ['5000+ Apps', 'Custom Workflows', 'Trigger Actions', 'Data Mapping'],
      setupTime: '5 minutes'
    },
    {
      id: 'api',
      name: 'REST API',
      description: 'Build custom integrations with our API',
      icon: 'Code',
      color: 'bg-gray-500',
      features: ['Full API Access', 'Webhooks', 'Custom Endpoints', 'Real-time Updates'],
      setupTime: '30 minutes'
    },
    {
      id: 'wordpress',
      name: 'WordPress',
      description: 'Add WhatsApp marketing to your WordPress site',
      icon: 'Globe',
      color: 'bg-indigo-500',
      features: ['Contact Forms', 'Widget Integration', 'User Sync', 'Auto-messaging'],
      setupTime: '12 minutes'
    }
  ];

  const handleIntegrationClick = (integration) => {
    setActiveIntegration(activeIntegration?.id === integration.id ? null : integration);
  };

  return (
    <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          Seamless Integrations
        </h3>
        <p className="text-text-secondary">
          Connect WhatsApp Marketing Pro with your existing tools and workflows
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations?.map((integration) => (
          <div
            key={integration.id}
            className={`relative p-6 rounded-lg border transition-all duration-200 cursor-pointer ${
              activeIntegration?.id === integration.id
                ? 'border-primary bg-primary-50 shadow-lg scale-105'
                : 'border-border bg-surface hover:border-primary-200 hover:shadow-md'
            }`}
            onClick={() => handleIntegrationClick(integration)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${integration.color}`}>
                <Icon name={integration.icon} size={24} className="text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-text-primary">{integration.name}</h4>
                <p className="text-sm text-text-secondary">{integration.description}</p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-text-secondary" />
                <span className="text-sm text-text-secondary">{integration.setupTime}</span>
              </div>
              <Icon 
                name={activeIntegration?.id === integration.id ? "ChevronUp" : "ChevronDown"} 
                size={16} 
                className="text-text-secondary" 
              />
            </div>

            {activeIntegration?.id === integration.id && (
              <div className="mt-4 pt-4 border-t border-border">
                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-medium text-text-primary mb-2">Key Features:</h5>
                    <div className="space-y-2">
                      {integration.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={16} className="text-success-600" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="primary" 
                      size="sm" 
                      className="flex-1"
                      iconName="ExternalLink"
                      iconPosition="right"
                    >
                      Connect
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      iconName="Book"
                      iconPosition="left"
                    >
                      Guide
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-surface rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-2">
              Need a Custom Integration?
            </h4>
            <p className="text-text-secondary">
              Our team can help you build custom integrations for your specific needs
            </p>
          </div>
          <Button 
            variant="primary"
            iconName="MessageCircle"
            iconPosition="right"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IntegrationShowcase;
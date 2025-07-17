import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeatureComparison = ({ isAnnual, openBookDemoModal }) => {
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [showDemoForm, setShowDemoForm] = useState(false);

  const toggleFeature = (featureId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const features = [
    {
      id: 'messaging',
      category: 'Messaging Features',
      items: [
        {
          name: 'Message Templates',
          description: 'Pre-approved message templates for business communications',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Bulk Messaging',
          description: 'Send messages to multiple contacts simultaneously',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'Rich Media Support',
          description: 'Send images, videos, documents, and audio messages',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'Message Scheduling',
          description: 'Schedule messages to be sent at optimal times',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Attachments',
          description: 'PDF, Audio, Video, Photos, Documents', // keep for tooltip
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        }
      ]
    },
    {
      id: 'automation',
      category: 'Automation & Workflows',
      items: [
        {
          name: 'Auto-reply',
          description: 'Automatically respond to customer messages',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Workflow Automation',
          description: 'Create complex automated message sequences',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'Trigger-based Messaging',
          description: 'Send messages based on customer actions or events',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Chatbot Integration',
          description: 'Integrate with popular chatbot platforms',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        }
      ]
    },
    {
      id: 'analytics',
      category: 'Analytics & Reporting',
      items: [
        {
          name: 'Message Analytics',
          description: 'Track delivery, read rates, and engagement metrics',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'Custom Reports',
          description: 'Create custom reports with specific metrics',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Real-time Dashboard',
          description: 'Monitor campaign performance in real-time',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'ROI Tracking',
          description: 'Track return on investment for campaigns',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        }
      ]
    },
    {
      id: 'management',
      category: 'Contact & Team Management',
      items: [
        {
          name: 'Contact Limit',
          description: 'Maximum number of contacts you can store',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'Contact Segmentation',
          description: 'Organize contacts into targeted groups',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Team Members',
          description: 'Number of team members who can access the platform',
          starter: '3',
          professional: '5',
          enterprise: 'Custom',
          hasTooltip: false
        },
        {
          name: 'Role-based Access',
          description: 'Control team member permissions and access levels',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Bulk import',
          description: 'Import contacts in bulk via CSV or Excel',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        }
      ]
    },
    {
      id: 'support',
      category: 'Support & Integration',
      items: [
        {
          name: 'Customer Support',
          description: 'Access to customer support team',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'API Access',
          description: 'Integrate with your existing systems',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        },
        {
          name: 'Training & Onboarding',
          description: 'Get help setting up and using the platform',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: false
        },
        {
          name: 'SLA',
          description: 'Service level agreement for uptime and support',
          starter: 'Yes',
          professional: 'Yes',
          enterprise: 'Yes',
          hasTooltip: true
        }
      ]
    }
  ];

  const renderFeatureValue = (value, plan) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={20} className="text-success mx-auto" />
      ) : (
        <Icon name="X" size={20} className="text-text-secondary mx-auto" />
      );
    }
    
    return (
      <span className={`text-sm ${plan === 'enterprise' ? 'font-semibold text-primary' : 'text-text-secondary'}`}>
        {value}
      </span>
    );
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Feature Comparison
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Compare all features across our pricing plans to find the perfect fit
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-surface border-b border-border px-6 py-4">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-text-primary">Features</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary">Starter</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary">Professional</h3>
                <div className="inline-flex items-center bg-primary-100 text-primary-800 text-xs font-medium px-2 py-1 rounded-full mt-1">
                  <Icon name="Star" size={12} className="mr-1" />
                  Popular
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-text-primary">Enterprise</h3>
              </div>
            </div>
            {/* Platform Fee Row */}
            <div className="grid grid-cols-4 gap-4 items-center bg-gray-50 border-t border-border mt-2 py-3 rounded">
              <div className="text-left font-semibold text-text-primary">Platform Fee</div>
              <div className="text-center">
                <span className="font-semibold text-success">₹999</span>
                <div className="text-xs text-gray-400">Fewer than 5,000 messages/month</div>
              </div>
              <div className="text-center">
                <span className="font-semibold text-success">₹499</span>
                <div className="text-xs text-gray-400">5,000–10,000 messages/month</div>
              </div>
              <div className="text-center">
                <span className="font-semibold text-success">—</span>
                <div className="text-xs text-gray-400">Only per-message charges</div>
              </div>
            </div>
          </div>

          {/* Feature Categories */}
          <div className="divide-y divide-border">
            {features.map((category) => (
              <div key={category.id} className="px-6 py-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
                  <Icon name="Folder" size={18} className="mr-2 text-primary" />
                  {category.category}
                </h4>
                
                <div className="space-y-3">
                  {category.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-border last:border-b-0">
                      <div className="text-left">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-text-primary">
                            {item.name}
                          </span>
                          {item.hasTooltip && (
                            <button
                              onClick={() => toggleFeature(`${category.id}-${index}`)}
                              className="ml-2 text-text-secondary hover:text-primary"
                            >
                              <Icon name="Info" size={16} />
                            </button>
                          )}
                        </div>
                        {expandedFeatures[`${category.id}-${index}`] && (
                          <div className="mt-2 text-xs text-text-secondary bg-surface p-2 rounded">
                            {item.description}
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(item.starter, 'starter')}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(item.professional, 'professional')}
                      </div>
                      <div className="text-center">
                        {renderFeatureValue(item.enterprise, 'enterprise')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="bg-surface border-t border-border px-6 py-6">
            <div className="grid grid-cols-4 gap-4 items-center">
              <div className="text-left">
                <span className="text-sm text-text-secondary">Ready to get started?</span>
              </div>
           
              <div className="text-center">
                <Button variant="primary" size="sm" fullWidth className="shadow-cta" onClick={openBookDemoModal}>
                  Demo Free
                </Button>
              </div>
              <div className="text-center">
                <Button variant="outline" size="sm" fullWidth>
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Demo Form Modal */}
        {showDemoForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                onClick={() => setShowDemoForm(false)}
                aria-label="Close"
              >
                <Icon name="X" size={20} />
              </button>
              <h3 className="text-xl font-bold mb-4 text-text-primary text-center">Book a Demo</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full border border-border rounded-lg px-3 py-2" placeholder="Your Name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full border border-border rounded-lg px-3 py-2" placeholder="you@email.com" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Phone</label>
                  <input type="tel" className="w-full border border-border rounded-lg px-3 py-2" placeholder="Phone Number" />
                </div>
                <Button type="submit" variant="primary" fullWidth>Submit</Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureComparison;
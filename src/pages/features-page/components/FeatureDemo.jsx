import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const FeatureDemo = ({ title, description, demoType, interactive = false }) => {
  const [isActive, setIsActive] = useState(false);

  const renderDemo = () => {
    switch (demoType) {
      case 'bulk-messaging':
        return (
          <div className="bg-surface rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-text-primary">Bulk Message Campaign</h4>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Status:</span>
                <span className="px-2 py-1 rounded-full text-xs bg-success-100 text-success-600">Active</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Users" size={20} className="text-primary" />
                  <span className="text-sm font-medium">Target Audience</span>
                </div>
                <span className="text-sm text-text-secondary">2,847 contacts</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="MessageSquare" size={20} className="text-primary" />
                  <span className="text-sm font-medium">Message Template</span>
                </div>
                <span className="text-sm text-text-secondary">Holiday Sale 2024</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-primary" />
                  <span className="text-sm font-medium">Schedule</span>
                </div>
                <span className="text-sm text-text-secondary">Dec 25, 2024 - 9:00 AM</span>
              </div>
              
              {interactive && (
                <Button
                  variant={isActive ? "success" : "primary"}
                  onClick={() => setIsActive(!isActive)}
                  className="w-full"
                  iconName={isActive ? "Check" : "Send"}
                  iconPosition="right"
                >
                  {isActive ? "Campaign Sent Successfully" : "Send Campaign"}
                </Button>
              )}
            </div>
          </div>
        );
        
      case 'automation':
        return (
          <div className="bg-surface rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-text-primary">Welcome Automation Flow</h4>
              <div className="flex items-center space-x-2">
                <Icon name="Play" size={16} className="text-success-600" />
                <span className="text-sm text-success-600">Running</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Icon name="UserPlus" size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-text-primary">New Contact Added</div>
                  <div className="text-xs text-text-secondary">Trigger: User signs up</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-1 h-8 bg-border ml-5"></div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-warning-100 rounded-full flex items-center justify-center">
                  <Icon name="Clock" size={20} className="text-warning-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-text-primary">Wait 2 Minutes</div>
                  <div className="text-xs text-text-secondary">Delay before first message</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-1 h-8 bg-border ml-5"></div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-success-100 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} className="text-success-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-text-primary">Send Welcome Message</div>
                  <div className="text-xs text-text-secondary">Template: Welcome to WhatsApp Marketing Pro</div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'analytics':
        return (
          <div className="bg-surface rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-text-primary">Campaign Analytics</h4>
              <div className="flex items-center space-x-2">
                <Icon name="RefreshCw" size={16} className="text-text-secondary" />
                <span className="text-sm text-text-secondary">Live</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-background p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Send" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Messages Sent</span>
                </div>
                <div className="text-2xl font-bold text-text-primary">2,847</div>
                <div className="text-xs text-success-600">+12% from last week</div>
              </div>
              
              <div className="bg-background p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Eye" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Read Rate</span>
                </div>
                <div className="text-2xl font-bold text-text-primary">98.2%</div>
                <div className="text-xs text-success-600">+2.1% from last week</div>
              </div>
              
              <div className="bg-background p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="MousePointer" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Click Rate</span>
                </div>
                <div className="text-2xl font-bold text-text-primary">24.7%</div>
                <div className="text-xs text-success-600">+5.2% from last week</div>
              </div>
              
              <div className="bg-background p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="DollarSign" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-secondary">Revenue</span>
                </div>
                <div className="text-2xl font-bold text-text-primary">₹12,450</div>
                <div className="text-xs text-success-600">+18.5% from last week</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-sm text-text-secondary">Last updated: 2 min ago</span>
              <Button variant="outline" size="sm" iconName="Download" iconPosition="right">
                Export Report
              </Button>
            </div>
          </div>
        );
        
      case 'contact-management':
        return (
          <div className="bg-surface rounded-lg p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-text-primary">Contact Management</h4>
              <Button variant="outline" size="sm" iconName="Plus" iconPosition="left">
                Add Contact
              </Button>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">John Smith</div>
                    <div className="text-xs text-text-secondary">Premium Customer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-success-100 text-success-600">Active</span>
                  <Icon name="MoreHorizontal" size={16} className="text-text-secondary" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Sarah Johnson</div>
                    <div className="text-xs text-text-secondary">VIP Customer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-success-100 text-success-600">Active</span>
                  <Icon name="MoreHorizontal" size={16} className="text-text-secondary" />
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <Icon name="User" size={16} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Mike Wilson</div>
                    <div className="text-xs text-text-secondary">Regular Customer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 rounded-full text-xs bg-warning-100 text-warning-600">Inactive</span>
                  <Icon name="MoreHorizontal" size={16} className="text-text-secondary" />
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Total Contacts: 2,847</span>
                <span className="text-text-secondary">Active: 2,652 (93.2%)</span>
              </div>
            </div>
          </div>
        );
        
  
        
      default:
        return (
          <div className="bg-surface rounded-lg p-6 border border-border">
            <div className="text-center py-8">
              <Icon name="Play" size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-text-primary mb-2">Interactive Demo</h4>
              <p className="text-text-secondary">Experience the power of WhatsApp Marketing Pro</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-background rounded-xl p-6 border border-border shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary">{description}</p>
      </div>
      
      {renderDemo()}
    </div>
  );
};

// Add this helper component inside the file (above export default):
// AnimatedTemplateManager component
const AnimatedTemplateManager = () => {
  const [step, setStep] = useState(0);
  const [template, setTemplate] = useState({ name: '', content: '' });
  const [showPreview, setShowPreview] = useState(false);

  const steps = [
    {
      label: 'Create',
      icon: 'PlusCircle',
      content: (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Template Name</label>
            <input
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g. Holiday Offer"
              value={template.name}
              onChange={e => setTemplate({ ...template, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">Message Content</label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Type your message..."
              rows={3}
              value={template.content}
              onChange={e => setTemplate({ ...template, content: e.target.value })}
            />
          </div>
          <Button
            variant="primary"
            className="w-full mt-2 animate-bounce"
            iconName="Eye"
            iconPosition="right"
            onClick={() => setShowPreview(true)}
            disabled={!template.name || !template.content}
          >
            Preview
          </Button>
        </div>
      )
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-center mb-6 space-x-8">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-primary text-white shadow-lg`}
          >
            <Icon name="PlusCircle" size={24} />
          </motion.div>
          <span className={`text-xs font-semibold text-primary`}>Create</span>
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={showPreview ? 'preview' : 'form'}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          {showPreview ? (
            <div>
              <div className="text-sm font-semibold text-text-primary mb-1">{template.name}</div>
              <div className="flex justify-center">
                <div className="w-80 bg-[#ece5dd] rounded-2xl shadow-lg border border-gray-200 flex flex-col overflow-hidden">
                  {/* Chat Header */}
                  <div className="flex items-center bg-[#075e54] px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center text-white font-bold mr-3">A</div>
                    <div>
                      <div className="text-white font-semibold text-sm">Alexandra</div>
                      <div className="text-xs text-green-100">online</div>
                    </div>
                  </div>
                  {/* Chat Body */}
                  <div className="flex-1 px-3 py-4 flex flex-col justify-end bg-chat-pattern" style={{minHeight: '180px'}}>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center mb-1">
                        <span className="text-xs text-gray-400 mr-2">You</span>
                        <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">Y</div>
                      </div>
                      <div className="relative max-w-[75%] bg-green-100 text-gray-900 rounded-2xl px-4 py-3 shadow border border-green-200 whitespace-pre-line text-sm">
                        {template.content}
                        <span className="absolute right-2 bottom-1 text-xs text-gray-400">09:41</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full mt-4"
                iconName="ArrowLeft"
                onClick={() => setShowPreview(false)}
              >
                Back
              </Button>
              <Button
                variant="primary"
                className="w-full mt-2"
                iconName="CheckCircle"
                onClick={() => { setShowPreview(false); setStep(0); setTemplate({ name: '', content: '' }); }}
              >
                Save Template
              </Button>
            </div>
          ) : (
            steps[step].content
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default FeatureDemo;
import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const InteractiveDemoSection = ({ openBookDemoModal }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('welcome');
  const [isPreviewActive, setIsPreviewActive] = useState(false);

  const templates = [
    {
      id: 'welcome',
      name: 'Welcome Series',
      description: 'Onboard new customers',
      icon: 'UserPlus'
    },
    {
      id: 'cart',
      name: 'Cart Recovery',
      description: 'Recover abandoned carts',
      icon: 'ShoppingCart'
    },
    {
      id: 'birthday',
      name: 'Birthday Offers',
      description: 'Celebrate customer birthdays',
      icon: 'Gift'
    },
    {
      id: 'feedback',
      name: 'Feedback Request',
      description: 'Collect customer reviews',
      icon: 'Star'
    }
  ];

  const messageTemplates = {
    welcome: {
      title: 'Welcome to {{business_name}}! 🎉',
      message: `Hi {{customer_name}}! 👋\n\nWelcome to {{business_name}}! We're thrilled to have you as part of our community.\n\nHere's what you can expect:\n✅ Exclusive offers and discounts\n✅ Early access to new products\n✅ Personalized recommendations\n\nReply STOP to unsubscribe anytime.\n\nLet's get started! 🚀`,automation: 'Sent immediately after signup'
    },
    cart: {
      title: 'Your items are waiting! 🛒',
      message: `Hi {{customer_name}}! 👋\n\nYou left some amazing items in your cart at {{business_name}}:\n\n{{cart_items}}\n\nTotal: {{cart_total}}\n\nComplete your purchase now and get FREE shipping! 🚚\n\nYour cart expires in 2 hours.\n\n[Complete Purchase]`,
      automation: 'Sent 1 hour after cart abandonment'
    },
    birthday: {
      title: 'Happy Birthday from {{business_name}}! 🎂',
      message: `Happy Birthday {{customer_name}}! 🎉🎂\n\nWishing you a fantastic day filled with joy and celebration!\n\nAs a birthday gift, here's a special 25% discount code just for you:\n\n🎁 Code: BIRTHDAY25\n\nValid for the next 7 days on all products.\n\nTreat yourself - you deserve it! ✨`,
      automation: 'Sent on customer birthday'
    },
    feedback: {
      title: 'How was your experience? ⭐',
      message: `Hi {{customer_name}}! 👋\n\nThank you for your recent purchase from {{business_name}}!\n\nWe'd love to hear about your experience. Could you take 30 seconds to rate us?\n\n⭐⭐⭐⭐⭐\n\n[Rate Your Experience]\n\nYour feedback helps us serve you better! 💙`,
      automation: 'Sent 3 days after purchase'
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('demo');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handlePreview = () => {
    if (!businessName.trim()) {
      setBusinessName('Your Business');
    }
    setIsPreviewActive(true);
  };

  const currentTemplate = messageTemplates[selectedTemplate];
  const displayBusinessName = businessName || 'Your Business';

  return (
    <section id="demo" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Try Our
            <span className="text-green-600 block mt-2">Interactive Demo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how your WhatsApp campaigns will look. Customize messages with your business name 
            and watch the automation in action.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo Controls */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Customize Your Demo</h3>
              
              {/* Business Name Input */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Business Name
                </label>
                <Input
                  type="text"
                  placeholder="Enter your business name"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Template Selection */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  Choose Campaign Type
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {templates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => setSelectedTemplate(template.id)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                        selectedTemplate === template.id
                          ? 'border-green-500 bg-green-50' :'border-gray-200 hover:border-green-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Icon 
                          name={template.icon} 
                          size={20} 
                          color={selectedTemplate === template.id ? '#16a34a' : '#6b7280'} 
                        />
                        <span className={`font-semibold text-sm ${
                          selectedTemplate === template.id ? 'text-green-700' : 'text-gray-700'
                        }`}>
                          {template.name}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600">{template.description}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview Button */}
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handlePreview}
                iconName="Eye"
                iconPosition="left"
                className="mb-6"
              >
                Preview Your Campaign
              </Button>

              {/* Automation Info */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Zap" size={16} color="#2563eb" />
                  <span className="text-sm font-semibold text-blue-800">Automation Trigger</span>
                </div>
                <p className="text-sm text-blue-700">{currentTemplate.automation}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Preview */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-gray-100 rounded-2xl p-6 max-w-md mx-auto">
              {/* WhatsApp Header */}
              <div className="bg-green-600 text-white p-4 rounded-t-xl flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Icon name="Store" size={20} color="#16a34a" />
                </div>
                <div>
                  <h4 className="font-semibold">{displayBusinessName}</h4>
                  <p className="text-xs opacity-90">Business Account</p>
                </div>
                <div className="ml-auto">
                  <Icon name="MoreVertical" size={20} color="white" />
                </div>
              </div>

              {/* Message Preview */}
              <div className="bg-white p-4 min-h-[400px]">
                {isPreviewActive ? (
                  <div className="animate-fade-in">
                    <div className="bg-gray-100 rounded-lg p-4 mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {currentTemplate.title.replace('{{business_name}}', displayBusinessName)}
                      </h4>
                      <p className="text-sm text-gray-800 whitespace-pre-line">
                        {currentTemplate.message
                          .replace(/{{business_name}}/g, displayBusinessName)
                          .replace('{{customer_name}}', 'Sarah')
                          .replace('{{cart_items}}', '• Wireless Headphones - $89\n• Phone Case - $24')
                          .replace('{{cart_total}}', '$113.00')}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-gray-500">2:34 PM</span>
                        <div className="flex gap-1">
                          <Icon name="Check" size={12} color="#16a34a" />
                          <Icon name="Check" size={12} color="#16a34a" />
                        </div>
                      </div>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="TrendingUp" size={16} color="#16a34a" />
                        <span className="text-sm font-semibold text-green-800">Live Metrics</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div>
                          <div className="text-lg font-bold text-green-600">98%</div>
                          <div className="text-xs text-green-700">Delivered</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-blue-600">67%</div>
                          <div className="text-xs text-blue-700">Opened</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-purple-600">23%</div>
                          <div className="text-xs text-purple-700">Clicked</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <div className="text-center">
                      <Icon name="MessageCircle" size={48} color="#d1d5db" className="mx-auto mb-4" />
                      <p className="text-sm">Click "Preview Your Campaign" to see your message</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Message Input */}
              <div className="bg-gray-50 p-3 rounded-b-xl flex items-center gap-2">
                <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500">
                  Automated message - no manual input needed
                </div>
                <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Icon name="Zap" size={16} color="white" />
                </button>
              </div>
            </div>

            {/* Demo Features */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Icon name="Check" size={16} color="#16a34a" />
                <span>Personalized with customer data</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Icon name="Check" size={16} color="#16a34a" />
                <span>Automatically triggered by customer actions</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Icon name="Check" size={16} color="#16a34a" />
                <span>Real-time delivery and engagement tracking</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to automate your WhatsApp marketing?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your free trial and create campaigns like this in minutes, not hours.
            </p>
            <Button 
              variant="primary" 
              size="xl"
              iconName="ArrowRight"
              iconPosition="right"
              className="shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              onClick={openBookDemoModal}
            >
              Demo Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemoSection;
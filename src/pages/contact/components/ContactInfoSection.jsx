import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactInfoSection = () => {
  const contactMethods = [
    {
      title: 'Sales Inquiries',
      description: 'Ready to get started? Our sales team is here to help you find the perfect plan.',
      icon: 'ShoppingCart',
      details: [
        { label: 'Email', value: 'sales@whatsappmarketingpro.com', icon: 'Mail' },
        { label: 'Phone', value: '+1 (555) 123-4567', icon: 'Phone' },
        { label: 'Hours', value: 'Mon-Fri 9AM-6PM PST', icon: 'Clock' }
      ]
    },
    {
      title: 'Technical Support',
      description: 'Having technical issues? Our support team is available 24/7 to help.',
      icon: 'Settings',
      details: [
        { label: 'Email', value: 'support@wotzapmsg.com', icon: 'Mail' },
        { label: 'Live Chat', value: 'Available 24/7', icon: 'MessageCircle' },
        { label: 'Phone', value: '+1 (555) 123-4568', icon: 'Phone' }
      ]
    },
    {
      title: 'Partnership',
      description: 'Interested in becoming a partner? Let\'s discuss collaboration opportunities.',
      icon: 'Handshake',
      details: [
        { label: 'Email', value: 'partners@whatsappmarketingpro.com', icon: 'Mail' },
        { label: 'Phone', value: '+1 (555) 123-4569', icon: 'Phone' },
        { label: 'Hours', value: 'Mon-Fri 9AM-5PM PST', icon: 'Clock' }
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the best way to reach us based on your needs. We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={method.icon} size={24} color="#16a34a" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600">
                  {method.description}
                </p>
              </div>
              
              <div className="space-y-4">
                {method.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center gap-3">
                    <Icon name={detail.icon} size={16} color="#6b7280" />
                    <div>
                      <span className="text-sm font-medium text-gray-900">{detail.label}: </span>
                      <span className="text-sm text-gray-600">{detail.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-card p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How quickly can I get started?
                </h4>
                <p className="text-gray-600">
                  You can start sending WhatsApp messages within 24 hours of signing up. Our team will help you set up your account and get your first campaign running.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer custom integrations?
                </h4>
                <p className="text-gray-600">
                  Yes! We offer custom API integrations for enterprise customers. Contact our technical team to discuss your specific requirements.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  What support do you provide?
                </h4>
                <p className="text-gray-600">
                  We offer 24/7 live chat support, email support, phone support, and a comprehensive knowledge base with tutorials and guides.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Is there a free trial?
                </h4>
                <p className="text-gray-600">
                  Yes! We offer a 14-day free trial with full access to all features. No credit card required to get started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
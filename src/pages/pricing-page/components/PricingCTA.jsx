import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingCTA = ({ openBookDemoModal }) => {
  const guarantees = [
    {
      icon: 'Shield',
      title: 'Risk-Free Trial',
      description: '14-day free trial with no credit card required'
    },
    {
      icon: 'RefreshCw',
      title: 'Money-Back Guarantee',
      description: '30-day money-back guarantee if not satisfied'
    },
    {
      icon: 'X',
      title: 'Cancel Anytime',
      description: 'No long-term contracts or cancellation fees'
    },
    {
      icon: 'Headphones',
      title: 'Expert Support',
      description: 'Dedicated support team to help you succeed'
    }
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'CreditCard' },
    { name: 'Mastercard', icon: 'CreditCard' },
    { name: 'American Express', icon: 'CreditCard' },
    { name: 'PayPal', icon: 'Wallet' },
    { name: 'Bank Transfer', icon: 'Banknote' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary-50 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Start Your WhatsApp Marketing Journey Today
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Join thousands of successful businesses and transform your customer engagement with WhatsApp Marketing Pro
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Guarantees */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Our Commitment to You
            </h3>
            
            <div className="space-y-6">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={guarantee.icon} size={20} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">
                      {guarantee.title}
                    </h4>
                    <p className="text-text-secondary text-sm">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-border">
              <div className="flex items-center mb-4">
                <Icon name="Award" size={20} className="text-primary mr-2" />
                <h4 className="font-semibold text-text-primary">
                  Industry Recognition
                </h4>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-text-secondary">
                <div>✓ SOC 2 Type II Certified</div>
                <div>✓ GDPR Compliant</div>
                <div>✓ ISO 27001 Certified</div>
                <div>✓ WhatsApp Business Partner</div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Rocket" size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-text-secondary">
                Choose your plan and start your demo free in minutes
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                iconName="Zap"
                iconPosition="left"
                className="shadow-cta"
                onClick={openBookDemoModal}
              >
                Demo Free - No Credit Card Required
              </Button>
              
              <div className="flex items-center justify-center space-x-4">
                <Button
                  variant="ghost"
                  iconName="MessageCircle"
                  iconPosition="left"
                >
                  Chat with Sales
                </Button>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-text-primary mb-2">
                  Secure Payment Methods
                </h4>
                <p className="text-sm text-text-secondary">
                  Your information is protected with bank-level security
                </p>
              </div>
              
              <div className="flex items-center justify-center space-x-4">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="w-12 h-8 bg-surface border border-border rounded flex items-center justify-center"
                    title={method.name}
                  >
                    <Icon name={method.icon} size={16} className="text-text-secondary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-text-secondary">
            <div className="flex items-center">
              <Icon name="Users" size={16} className="mr-2" />
              <span className="text-sm">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center">
              <Icon name="Star" size={16} className="mr-2" />
              <span className="text-sm">4.9/5 Customer Rating</span>
            </div>
            <div className="flex items-center">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              <span className="text-sm">1B+ Messages Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
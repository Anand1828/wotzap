import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PricingFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the Demo Free work?",
      answer: "Our Demo Free gives you full access to all features of the Professional plan. No credit card required to start. You can send up to 1,000 messages during the demo period to test our platform."
    },
    {
      question: "What happens if I exceed my message limit?",
      answer: "If you exceed your monthly message limit, you'll be charged based on our overage rates: ₹0.05 per additional message for Starter, ₹0.04 for Professional, and ₹0.03 for Enterprise. You'll receive notifications when approaching your limit."
    },
    {
      question: "Can I change my plan at any time?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly. Downgrades will take effect at the start of your next billing cycle."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes! Save 20% when you choose annual billing. This discount applies to all plans and is automatically applied when you select annual billing during checkout."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, there are no setup fees for any of our plans. You can start using WhatsApp Marketing Pro immediately after signing up, and we'll help you get started with free onboarding resources."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for annual plans. For Enterprise customers, we also offer invoice billing with NET30 terms."
    },
    {
      question: "How does WhatsApp Business API pricing work?",
      answer: "WhatsApp charges conversation-based pricing, which is separate from our platform fees. We'll handle all WhatsApp API costs and provide transparent reporting. Conversation costs vary by country and typically range from ₹0.005 to ₹0.09 per conversation."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no cancellation fees. Your account will remain active until the end of your current billing period, and you\'ll continue to have access to all features."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all new subscriptions. If you're not satisfied within the first 30 days, we'll provide a full refund. For annual plans, we offer prorated refunds within the first 90 days."
    },
    {
      question: "Is my data secure and compliant?",
      answer: "Yes, we're SOC 2 Type II compliant and GDPR ready. All data is encrypted in transit and at rest, and we undergo regular security audits. We also provide data processing agreements for enterprise customers."
    },
    {
      question: "How do I verify my business for WhatsApp Business API?",
      answer: "We'll guide you through the WhatsApp Business verification process, which typically takes 1-3 business days. You'll need to provide business documentation, and we'll handle the technical integration once approved."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Starter plans include email support with 24-hour response time. Professional plans get priority support with 4-hour response. Enterprise customers receive dedicated account management and 1-hour response time with phone support."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Everything you need to know about our pricing and plans
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-border overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-surface transition-colors"
              >
                <span className="font-medium text-text-primary pr-4">
                  {faq.question}
                </span>
                <Icon
                  name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className="text-text-secondary flex-shrink-0"
                />
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <div className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-surface rounded-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-4">
              Our team is here to help you find the perfect plan for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex items-center text-text-secondary">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                <span>Live chat support</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Icon name="Mail" size={16} className="mr-2" />
                <a href="mailto:zanand1828@gmail.com" className="underline mr-2">zanand1828@gmail.com</a>
                <a href="mailto:support@wotzapmsg.com" className="underline">support@wotzapmsg.com</a>
              </div>
              <div className="flex items-center text-text-secondary">
                <Icon name="Phone" size={16} className="mr-2" />
                <span>9316360039</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
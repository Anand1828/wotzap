import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = ({ openBookDemoModal }) => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Is WhatsApp marketing legal and compliant?",
      answer: `Yes, absolutely! WhatsApp Marketing Pro is fully compliant with WhatsApp Business API policies and international regulations including GDPR, CCPA, and LGPD.\n\nWe only work with the official WhatsApp Business API, which means:\n• All messages are sent through approved channels\n• Customers must opt-in to receive messages\n• Easy opt-out options are always provided\n• We maintain strict data protection standards\n\nOur compliance team ensures all features meet WhatsApp's terms of service and local regulations in your country.`,
      category: "Compliance"
    },
    {
      id: 2,
      question: "How difficult is it to set up WhatsApp marketing?",
      answer: `Setting up WhatsApp Marketing Pro is surprisingly simple - most businesses are up and running in under 15 minutes!\n\nHere's what the setup process looks like:\n1. Sign up for your free trial (2 minutes)\n2. Connect your WhatsApp Business account (5 minutes)\n3. Import your contacts or connect your CRM (3 minutes)\n4. Choose from our pre-built templates (2 minutes)\n5. Send your first campaign (3 minutes)\n\nOur setup wizard guides you through each step, and our support team is available 24/7 if you need any help. No technical skills required!`,
      category: "Setup"
    },
    {
      id: 3,
      question: "Will my customers be annoyed by WhatsApp messages?",
      answer: `This is a common concern, but the data shows the opposite! WhatsApp messages have a 98% read rate and 45% response rate because customers prefer this channel.\n\nHere's why customers love WhatsApp marketing:\n• It's personal and conversational\n• They can respond directly and get immediate help\n• Messages are relevant and timely\n• Easy to opt-out if they change their mind\n\nThe key is sending valuable, relevant messages. Our platform includes smart frequency controls and engagement tracking to ensure you're providing value, not spam. Most businesses see improved customer relationships, not complaints.`,
      category: "Customer Experience"
    },
    {
      id: 4,
      question: "How much does WhatsApp Business API cost?",
      answer: `WhatsApp Business API costs are included in all our plans - no additional fees!\n\nHere's what's included:\n• WhatsApp Business API access\n• Message delivery (conversation-based pricing)\n• Template message approvals\n• 24/7 API support\n\nWhatsApp charges per conversation (not per message), and we've negotiated volume discounts that we pass on to you. Most businesses find WhatsApp marketing 60% more cost-effective than email marketing when you factor in the higher engagement rates.`,
      category: "Pricing"
    },
    {
      id: 5,
      question: "Can I integrate with my existing CRM or e-commerce platform?",
      answer: `Yes! WhatsApp Marketing Pro integrates with 50+ popular platforms including:\n\n**CRM Systems:**\n• Salesforce, HubSpot, Pipedrive\n• Zoho CRM, Freshworks\n\n**E-commerce Platforms:**\n• Shopify, WooCommerce, Magento\n• BigCommerce, Squarespace\n\n**Other Tools:**\n• Zapier (connects to 3,000+ apps)\n• Google Sheets, Mailchimp\n• Calendly, Stripe\n\nOur API and webhook system makes it easy to sync customer data, trigger automated messages based on actions, and track conversions back to your existing tools. Most integrations take less than 10 minutes to set up.`,
      category: "Integrations"
    },
    {
      id: 6,
      question: "What kind of results can I expect?",
      answer: `Based on data from 5,000+ businesses using our platform, here are typical results:\n\n**Engagement Improvements:**\n• 98% message read rate (vs 2-5% email)\n• 45% response rate (vs 1-3% email)\n• 10x higher click-through rates\n\n**Business Impact:**\n• 300% average increase in customer engagement\n• 156% increase in repeat purchases\n• 85% improvement in customer retention\n• 22% reduction in no-shows (for appointment-based businesses)\n\n**Timeline:**\n• Week 1: Setup complete, first campaigns sent\n• Week 2-4: Engagement patterns established\n• Month 2-3: Significant ROI improvements visible\n\nResults vary by industry and implementation, but 94% of our customers see positive ROI within 60 days.`,
      category: "Results"
    }
  ];

  const categories = ["All", "Compliance", "Setup", "Customer Experience", "Pricing", "Integrations", "Results"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredFAQs = selectedCategory === "All"
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Frequently Asked{' '}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get answers to common questions about WhatsApp marketing, compliance,
            and how our platform can help your business grow.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-surface text-text-secondary hover:bg-surface-100 hover:text-text-primary'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-surface rounded-2xl border-2 transition-all duration-200 ${openFAQ === index ? 'border-primary shadow-lg' : 'border-border'
                }`}
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface-50 rounded-2xl transition-colors"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${openFAQ === index ? 'bg-primary text-primary-foreground' : 'bg-surface-200'
                    }`}>
                    <span className="text-sm font-bold">{faq.id}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {faq.question}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 bg-primary-100 text-primary text-xs rounded-full">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                </div>
                <Icon
                  name="ChevronDown"
                  size={24}
                  className={`text-text-secondary transition-transform duration-200 ${openFAQ === index ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Answer */}
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="ml-12 space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                        {faq.answer}
                      </div>
                    </div>

                    {/* Related Actions */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-border">
                      <button className="flex items-center space-x-2 text-primary hover:text-primary-600 transition-colors">
                        <Icon name="MessageCircle" size={16} />
                        <span className="text-sm">Ask follow-up question</span>
                      </button>
                      <button className="flex items-center space-x-2 text-text-secondary hover:text-text-primary transition-colors">
                        <Icon name="ThumbsUp" size={16} />
                        <span className="text-sm">Helpful</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center bg-surface rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Still Have Questions?
          </h3>
          <p className="text-text-secondary mb-6">
            Our WhatsApp marketing experts are here to help you succeed.
            Get personalized answers to your specific questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors">
              <Icon name="MessageCircle" size={20} />
              <span>Live Chat Support</span>
            </button>
            <button
              className="flex items-center justify-center space-x-2 bg-white text-text-primary border border-border px-6 py-3 rounded-lg hover:bg-surface transition-colors"
              onClick={openBookDemoModal}
            >
              <Icon name="Calendar" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
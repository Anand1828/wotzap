import React from 'react';
import Layout from '../components/Layout';
import { FaRobot, FaBolt, FaClock, FaUserCheck, FaTags, FaUsers, FaCogs, FaChartLine, FaPlug, FaCheckCircle } from 'react-icons/fa';

const stats = [
  { value: '64%', label: 'of consumers say 24/7 self-service is important' },
  { value: '70%', label: 'Faster lead qualification times vs. sales agent' },
  { value: '72%', label: 'Customers expect a response within an hour' },
];

const useCases = [
  {
    icon: <FaChartLine className="text-primary text-3xl mb-2" />, 
    title: 'Order Tracking',
    description: 'Automate order tracking, management, and notifications on WhatsApp. Handle notifications, track abandoned carts, and provide engagement analytics.'
  },
  {
    icon: <FaUsers className="text-primary text-3xl mb-2" />, 
    title: 'Webinar Registration',
    description: 'Register participants for events via WhatsApp automatically. Monitor messages, sends, opens, and clicks to manage your webinars effectively.'
  },
  {
    icon: <FaClock className="text-primary text-3xl mb-2" />, 
    title: 'Drip Campaigns',
    description: 'Create engaging drip campaigns to nurture leads. Tailor each step to the leads journey, optimize conversions, and track performance.'
  },
  {
    icon: <FaUserCheck className="text-primary text-3xl mb-2" />, 
    title: 'Lead Qualification',
    description: 'Qualify leads with targeted questions, segment them by quality and intent, and focus your sales team on high-potential opportunities.'
  }
];

const features = [
  { icon: <FaRobot className="text-primary text-xl" />, text: 'No-code chatbot builder' },
  { icon: <FaBolt className="text-primary text-xl" />, text: 'Instant replies to customer inquiries' },
  { icon: <FaCogs className="text-primary text-xl" />, text: 'Automates repetitive tasks' },
  { icon: <FaPlug className="text-primary text-xl" />, text: 'Seamless integration with your systems' },
  { icon: <FaCheckCircle className="text-primary text-xl" />, text: 'Easy to set up and customize' },
  { icon: <FaUsers className="text-primary text-xl" />, text: 'Assign chats to team members' },
  { icon: <FaTags className="text-primary text-xl" />, text: 'Use tags for segmentation' },
  { icon: <FaClock className="text-primary text-xl" />, text: 'Welcome messages and time delays' },
];

const integrations = [
  'Zoho', 'OpenAI', 'QuickSell', 'Shopify', 'Razorpay', 'Google Sheets'
];



const ChatbotFeatures = () => (
  <Layout>
    {/* Hero Section */}
    <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Automate Your Business with WhatsApp Chatbot</h1>
        <p className="text-lg text-text-secondary mb-6">Streamline responses, manage inquiries 24/7, and enhance user engagement with smart, automated communication.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <a href="/pricing-page" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary-dark transition">View Plans</a>
          <a href="/contact" className="px-8 py-3 bg-white border border-primary text-primary rounded-lg font-semibold shadow hover:bg-primary/10 transition">Get a Demo</a>
          <a href="tel:9429065064" className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold shadow hover:bg-green-600 transition flex items-center justify-center">
            Call: 9429065064
          </a>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-10 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl shadow p-8 text-center bg-gradient-to-br from-primary/5 to-white">
            <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-text-secondary text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Use Cases */}
    <section className="py-16 bg-gradient-to-b from-background to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-10 text-center">Transformative Chatbot Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {useCases.map((use) => (
            <div key={use.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100 hover:shadow-xl transition">
              {use.icon}
              <h3 className="text-xl font-bold text-primary mb-2 mt-2">{use.title}</h3>
              <p className="text-text-secondary">{use.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Features */}
    <section className="py-16 bg-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-10 text-center">Build a chatbot in 2min with our no-code builder</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <li key={feature.text} className="flex items-center space-x-4 bg-white rounded-lg p-5 border border-gray-100 shadow-sm">
              {feature.icon}
              <span className="text-base text-text-primary font-medium">{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Integrations */}
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-text-primary mb-8 text-center">Powerful Integrations</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {integrations.map((integration) => (
            <span key={integration} className="bg-primary/10 text-primary px-5 py-2 rounded-full font-medium text-sm shadow">
              {integration}
            </span>
          ))}
        </div>
      </div>
    </section>

  </Layout>
);

export default ChatbotFeatures; 
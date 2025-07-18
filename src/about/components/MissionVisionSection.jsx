import React from 'react';
import Icon from '../../../components/AppIcon';

const MissionVisionSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're driven by a clear purpose and ambitious vision for the future of business communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Icon name="Target" size={24} color="#16a34a" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To empower businesses worldwide with the most effective WhatsApp marketing platform, 
              enabling them to build authentic relationships with their customers, drive meaningful 
              engagement, and achieve sustainable growth through the power of conversational commerce.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-card p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Icon name="Eye" size={24} color="#2563eb" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              To become the world's leading conversational marketing platform, where every business 
              can effortlessly connect with their customers through personalized, AI-driven WhatsApp 
              experiences that feel natural, valuable, and genuinely helpful.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} color="#7c3aed" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Customer First</h4>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our customers and their success.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} color="#ea580c" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation</h4>
              <p className="text-gray-600">
                We constantly push boundaries to deliver cutting-edge solutions that drive results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} color="#16a34a" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Trust</h4>
              <p className="text-gray-600">
                We build trust through transparency, reliability, and unwavering commitment to privacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const ProblemSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailDecline, setEmailDecline] = useState(0);
  const [whatsappGrowth, setWhatsappGrowth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate email decline
          const emailTimer = setInterval(() => {
            setEmailDecline(prev => {
              if (prev > -45) return prev - 2;
              clearInterval(emailTimer);
              return -45;
            });
          }, 50);

          // Animate WhatsApp growth
          const whatsappTimer = setInterval(() => {
            setWhatsappGrowth(prev => {
              if (prev < 340) return prev + 8;
              clearInterval(whatsappTimer);
              return 340;
            });
          }, 50);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('problem-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      icon: "TrendingDown",
      title: "Email Open Rates Plummeting",
      description: "Your carefully crafted emails are landing in spam folders. Open rates have dropped 45% in the last 2 years.",
      stat: "20% avg open rate",
      color: "red"
    },
    {
      icon: "DollarSign",
      title: "Facebook Ads Getting Expensive",
      description: "Customer acquisition costs are skyrocketing. You're paying 3x more for the same results you got last year.",
      stat: "₹47 avg CPC",
      color: "orange"
    },
    {
      icon: "Users",
      title: "Customers Ignore Your Messages",
      description: "Your audience has notification fatigue. They're overwhelmed by marketing messages and tune everything out.",
      stat: "2.3% engagement",
      color: "red"
    }
  ];

  return (
    <section id="problem-section" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Marketing Channels Are
            <span className="text-red-600 block mt-2">Failing You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While you're struggling with declining performance, your competitors are discovering the power of direct messaging.
          </p>
        </div>

        {/* Split Screen Comparison */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Email Marketing Decline */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Icon name="Mail" size={24} color="#dc2626" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email Marketing</h3>
                  <p className="text-red-600 font-semibold">Declining Performance</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Open Rate Trend</span>
                  <span className="text-red-600 font-bold">{emailDecline}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.max(0, 100 + emailDecline)}%` }}
                  ></div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="X" size={16} color="#dc2626" />
                  <span>Emails land in spam folders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="X" size={16} color="#dc2626" />
                  <span>Low engagement rates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="X" size={16} color="#dc2626" />
                  <span>Difficult to personalize at scale</span>
                </li>
              </ul>
            </div>
          </div>

          {/* WhatsApp Growth */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Icon name="MessageCircle" size={24} color="#16a34a" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">WhatsApp Marketing</h3>
                  <p className="text-green-600 font-semibold">Explosive Growth</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Engagement Growth</span>
                  <span className="text-green-600 font-bold">+{whatsappGrowth}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min(100, whatsappGrowth / 3.4)}%` }}
                  ></div>
                </div>
              </div>

              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} color="#16a34a" />
                  <span>98% message open rate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} color="#16a34a" />
                  <span>Direct customer communication</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={16} color="#16a34a" />
                  <span>Rich media & automation support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${700 + index * 200}ms` }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-${problem.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon name={problem.icon} size={24} color={problem.color === 'red' ? '#dc2626' : '#ea580c'} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4">{problem.description}</p>

                <div className={`inline-block px-3 py-1 bg-${problem.color}-100 text-${problem.color}-700 rounded-full text-sm font-semibold`}>
                  {problem.stat}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl text-gray-700 mb-2">
            <strong>Sound familiar?</strong> You're not alone.
          </p>
          <p className="text-gray-600">
            Thousands of businesses are making the switch to WhatsApp marketing every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
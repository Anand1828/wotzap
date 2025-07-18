import React from 'react';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Co-Founder',
      description: 'Former WhatsApp product manager with 10+ years in messaging platforms.',
      image: '/assets/images/team/sarah-johnson.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Co-Founder',
      description: 'Ex-Google engineer specializing in scalable messaging infrastructure.',
      image: '/assets/images/team/michael-chen.jpg',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Marketing',
      description: 'Marketing automation expert with a passion for customer success.',
      image: '/assets/images/team/emily-rodriguez.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      description: 'Full-stack developer with expertise in real-time messaging systems.',
      image: '/assets/images/team/david-kim.jpg',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Lisa Thompson',
      role: 'Customer Success Manager',
      description: 'Dedicated to helping customers achieve their marketing goals.',
      image: '/assets/images/team/lisa-thompson.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Alex Martinez',
      role: 'Product Manager',
      description: 'User experience advocate focused on intuitive product design.',
      image: '/assets/images/team/alex-martinez.jpg',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The passionate individuals behind WhatsApp Marketing Pro, dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-card p-6 border border-gray-100 hover:shadow-lg transition-all group">
              <div className="text-center">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-400 hidden items-center justify-center">
                    <Icon name="User" size={32} color="white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                
                <p className="text-green-600 font-semibold mb-3">
                  {member.role}
                </p>
                
                <p className="text-gray-600 mb-4">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Icon name="Linkedin" size={18} color="#0077b5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Icon name="Twitter" size={18} color="#1da1f2" />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <Icon name="Github" size={18} color="#333" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Join Our Growing Team
            </h3>
            <p className="text-lg mb-6 opacity-90">
              We're always looking for talented individuals who share our passion for innovation.
            </p>
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
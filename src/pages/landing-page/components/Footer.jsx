import React from 'react';
import { Link } from 'react-router-dom'; 
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features-page" },
        { name: "Chatbot Features", href: "/chatbot-features" },
        { name: "Pricing", href: "/pricing-page" },
        // { name: "API Documentation", href: "#" },
        // { name: "Integrations", href: "#" },
        // { name: "Templates", href: "#" },
        // { name: "Analytics", href: "#" }
      ]
    },
    // {
    //   title: "Resources",
    //   links: [
    //     { name: "Help Center", href: "#" },
    //     { name: "WhatsApp Compliance Guide", href: "#" },
    //     { name: "Best Practices", href: "#" },
    //     { name: "Case Studies", href: "#" },
    //     { name: "Webinars", href: "#" },
    //     { name: "Blog", href: "#" }
    //   ]
    // },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        // { name: "Careers", href: "/careers" },
        // { name: "Press", href: "/press" },
        // { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        // { name: "Status", href: "/status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms of Service", href: "/terms-conditions" },
        { name: "Refund & Cancellation Policy", href: "/refund-cancellation-policy" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", href: "#" },
    { name: "LinkedIn", icon: "Linkedin", href: "#" },
    { name: "Facebook", icon: "Facebook", href: "#" },
    { name: "YouTube", icon: "Youtube", href: "#" },
    { name: "Instagram", icon: "Instagram", href: "#" }
  ];

  const contactInfo = {
    email: ["zanand1828@gmail.com", "support@wotzapmsg.com"],
    phone: "9316360039",
    address: "Near Hanuman Mandir, Patel Samaj Road, Sultanabad, Manaveder, Junagadh, Gujarat",
    hours: "24/7 Support Available"
  };

  return (
    <footer id="footer" className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Logo Row */}
        <div className="flex items-start justify-start pb-6 border-b border-gray-700 mb-8">
          <img src="/assets/images/img-bg.png" alt="Wotzap Digital Solution S Logo" className="h-36 w-auto max-w-[22rem] object-contain" />
        </div>
        {/* Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <p className="text-gray-300 mb-6 leading-relaxed max-w-xs">
              The complete Wotzap marketing automation platform trusted by 5,000+ businesses worldwide.
              Increase engagement, automate campaigns, and grow your business with official WhatsApp Business API.
            </p>
            <div className="space-y-3 mb-6 w-full">
              {Array.isArray(contactInfo.email) ? (
                contactInfo.email.map((email, idx) => (
                  <div className="flex items-center space-x-3 justify-center md:justify-start" key={email}>
                    <Icon name="Mail" size={16} className="text-primary" />
                    <a href={`mailto:${email}`} className="text-gray-300 hover:text-white transition-colors">
                      {email}
                    </a>
                  </div>
                ))
              ) : (
                <div className="flex items-center space-x-3 justify-center md:justify-start">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-white transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
              )}
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Icon name="Phone" size={16} className="text-primary" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3 justify-center md:justify-start">
                <Icon name="MapPin" size={16} className="text-primary mt-1" />
                <div className="text-gray-300 whitespace-pre-line">{contactInfo.address}</div>
              </div>
              <div className="flex items-center space-x-3 justify-center md:justify-start">
                <Icon name="Clock" size={16} className="text-primary" />
                <span className="text-gray-300">{contactInfo.hours}</span>
              </div>
            </div>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Wotzap. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Made with ❤️ for businesses worldwide</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

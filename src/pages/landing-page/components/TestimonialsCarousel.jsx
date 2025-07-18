import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "Owner, Bella\'s Boutique",
      company: "Fashion E-commerce",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `WhatsApp Marketing Pro transformed our customer engagement completely. We went from 2% email open rates to 98% WhatsApp read rates. Our sales increased by 340% in just 3 months!`,
      metrics: {
        before: "2% email open rate",
        after: "98% WhatsApp read rate",
        improvement: "340% sales increase"
      },
      industry: "E-commerce",
      businessSize: "Small Business",
      verified: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Marketing Director",
      company: "Taste of Mexico Restaurant Chain",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `The automation features are incredible. We set up birthday campaigns, order confirmations, and promotional messages that run automatically. Our customer retention improved by 85% and we save 20 hours per week.`,
      metrics: {
        before: "Manual messaging chaos",
        after: "Fully automated workflows",
        improvement: "85% retention increase"
      },
      industry: "Restaurant",
      businessSize: "Medium Business",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Amanda Foster",
      title: "Practice Manager",
      company: "Foster Family Dental",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `Appointment reminders via WhatsApp reduced our no-show rate from 25% to just 3%. Patients love the convenience and we love the efficiency. The ROI was immediate and substantial.`,
      metrics: {
        before: "25% no-show rate",
        after: "3% no-show rate",
        improvement: "22% efficiency gain"
      },
      industry: "Healthcare",
      businessSize: "Small Practice",
      verified: true
    },
    {
      id: 4,
      name: "James Thompson",
      title: "CEO",
      company: "TechGear Solutions",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `As a B2B company, we were skeptical about WhatsApp marketing. But the results speak for themselves - 67% response rate on our product announcements compared to 8% with email. Game changer!`,
      metrics: {
        before: "8% email response rate",
        after: "67% WhatsApp response rate",
        improvement: "8x better engagement"
      },
      industry: "B2B Technology",
      businessSize: "Medium Business",
      verified: true
    },
    {
      id: 5,
      name: "Lisa Park",
      title: "Founder",
      company: "Organic Beauty Co.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: `The personal touch of WhatsApp marketing helped us build stronger relationships with our customers. Our repeat purchase rate increased by 156% and customer lifetime value doubled.`,
      metrics: {
        before: "Low customer retention",
        after: "Strong customer relationships",
        improvement: "156% repeat purchases"
      },
      industry: "Beauty & Wellness",
      businessSize: "Small Business",
      verified: true
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Success Stories from{' '}
            <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their customer engagement 
            and increased sales with WhatsApp marketing.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-surface rounded-3xl p-8 lg:p-12 mb-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl"></div>
          
          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div>
              {/* Quote */}
              <div className="mb-8">
                <Icon name="Quote" size={48} className="text-primary mb-6" />
                <blockquote className="text-xl lg:text-2xl text-text-primary leading-relaxed font-medium">
                  "{current.quote}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  {current.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={12} className="text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-bold text-text-primary text-lg">{current.name}</div>
                  <div className="text-text-secondary">{current.title}</div>
                  <div className="text-primary font-medium">{current.company}</div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon
                      key={star}
                      name="Star"
                      size={20}
                      className={`${
                        star <= current.rating ? 'text-accent fill-current' : 'text-surface-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-text-secondary">({current.rating}/5)</span>
              </div>

              {/* Business Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-50 text-primary text-sm rounded-full">
                  {current.industry}
                </span>
                <span className="px-3 py-1 bg-secondary-50 text-secondary text-sm rounded-full">
                  {current.businessSize}
                </span>
                {current.verified && (
                  <span className="px-3 py-1 bg-success-50 text-success text-sm rounded-full flex items-center space-x-1">
                    <Icon name="Shield" size={12} />
                    <span>Verified</span>
                  </span>
                )}
              </div>
            </div>

            {/* Metrics Card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-border">
              <h4 className="text-xl font-bold text-text-primary mb-6 text-center">
                Results Achieved
              </h4>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-error-50 rounded-lg">
                  <div>
                    <div className="text-sm text-error-700 font-medium">Before</div>
                    <div className="text-error text-lg font-bold">{current.metrics.before}</div>
                  </div>
                  <Icon name="TrendingDown" size={24} className="text-error" />
                </div>
                
                <div className="flex items-center justify-center">
                  <Icon name="ArrowDown" size={24} className="text-text-secondary" />
                </div>
                
                <div className="flex items-center justify-between p-4 bg-success-50 rounded-lg">
                  <div>
                    <div className="text-sm text-success-700 font-medium">After</div>
                    <div className="text-success text-lg font-bold">{current.metrics.after}</div>
                  </div>
                  <Icon name="TrendingUp" size={24} className="text-success" />
                </div>
                
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="text-sm text-primary-700 font-medium mb-1">Improvement</div>
                  <div className="text-primary text-xl font-bold">{current.metrics.improvement}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-6">
          {/* Previous Button */}
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-md border border-border flex items-center justify-center hover:bg-surface transition-colors"
            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125' :'bg-surface-200 hover:bg-surface-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-md border border-border flex items-center justify-center hover:bg-surface transition-colors"
            aria-label="Next testimonial"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Auto-play Control */}
        <div className="flex items-center justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors"
          >
            <Icon name={isAutoPlaying ? "Pause" : "Play"} size={16} />
            <span className="text-sm">{isAutoPlaying ? 'Pause' : 'Play'} Auto-rotation</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FeatureNavigation = ({ categories, activeCategory, onCategoryChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onCategoryChange(category);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="mb-12">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center space-x-8">
        {categories?.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-200 ${
              activeCategory?.id === category.id
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-background text-text-secondary hover:bg-surface hover:text-primary border border-border'
            }`}
          >
            <Icon name={category.icon} size={20} />
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-between w-full px-6 py-4 bg-background border border-border rounded-lg"
        >
          <div className="flex items-center space-x-3">
            <Icon name={activeCategory?.icon} size={20} className="text-primary" />
            <span className="font-medium text-text-primary">{activeCategory?.name}</span>
          </div>
          <Icon 
            name={isMobileMenuOpen ? "ChevronUp" : "ChevronDown"} 
            size={20} 
            className="text-text-secondary" 
          />
        </button>

        {isMobileMenuOpen && (
          <div className="mt-2 bg-background border border-border rounded-lg shadow-lg">
            {categories?.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`flex items-center space-x-3 w-full px-6 py-4 transition-colors ${
                  activeCategory?.id === category.id
                    ? 'bg-primary text-white' :'text-text-secondary hover:bg-surface hover:text-primary'
                } ${category.id === categories[0].id ? 'rounded-t-lg' : ''} ${
                  category.id === categories[categories.length - 1].id ? 'rounded-b-lg' : ''
                }`}
              >
                <Icon name={category.icon} size={20} />
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureNavigation;
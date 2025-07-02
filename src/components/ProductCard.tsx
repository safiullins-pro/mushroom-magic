import React, { useState } from 'react';
import { Button } from './ui/button';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  benefits: string[];
  image: string;
  options?: {
    label: string;
    values: string[];
  };
  showDetails?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  benefits,
  image,
  options,
  showDetails = false
}) => {
  const [selectedOption, setSelectedOption] = useState(options?.values[0] || '');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mario-card max-w-sm mx-auto">
      {/* Product Image */}
      <div className="relative mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Product Title */}
      <h3 className="mario-product-title">{title}</h3>

      {/* Price */}
      <div className="mario-price">{price.toLocaleString()} р.</div>

      {/* Benefits */}
      <div className="mario-benefits">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-center justify-center space-x-1">
            <span className="text-secondary font-semibold">➕</span>
            <span>{benefit}</span>
            {index < benefits.length - 1 && <span className="mx-1">|</span>}
          </div>
        ))}
      </div>

      {/* Options */}
      {options && (
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-center">
            {options.label}
          </label>
          <div className="flex justify-center space-x-2">
            {options.values.map((value) => (
              <button
                key={value}
                onClick={() => setSelectedOption(value)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedOption === value
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-secondary/20'
                }`}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <Button 
          onClick={() => scrollToSection('order')}
          className="mario-btn-primary flex-1"
        >
          Купить
        </Button>
        {showDetails && (
          <Button 
            onClick={() => scrollToSection(`details-${id}`)}
            className="mario-btn-secondary flex-1"
          >
            Подробнее
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
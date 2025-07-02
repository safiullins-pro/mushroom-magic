import React, { useState } from 'react';
import { Button } from './ui/button';

interface ProductDetailsProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string[];
  options?: {
    label: string;
    values: string[];
  };
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  id,
  title,
  price,
  image,
  description,
  options
}) => {
  const [selectedOption, setSelectedOption] = useState(options?.values[0] || '');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id={`details-${id}`} className="py-16 bg-popover">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <img 
              src={image} 
              alt={title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h2 className="mario-title text-left">{title}</h2>
            
            <div className="mario-price text-left">{price.toLocaleString()} р.</div>

            {/* Options */}
            {options && (
              <div>
                <label className="block text-lg font-semibold mb-3">
                  {options.label}
                </label>
                <div className="flex space-x-3">
                  {options.values.map((value) => (
                    <button
                      key={value}
                      onClick={() => setSelectedOption(value)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
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

            {/* Add to Cart Button */}
            <Button 
              onClick={() => scrollToSection('order')}
              className="mario-btn-primary text-lg px-8 py-4"
            >
              Добавить в корзину
            </Button>

            {/* Description */}
            <div className="space-y-4">
              {description.map((paragraph, index) => (
                <p key={index} className="text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
import React, { useState } from 'react';
import { Button } from './ui/button';

// Import review images
import review1 from '@/assets/review-1.jpg';
import review2 from '@/assets/review-2.jpg';
import review3 from '@/assets/review-3.jpg';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      image: review1,
      alt: "Отзыв 1"
    },
    {
      id: 2, 
      image: review2,
      alt: "Отзыв 2"
    },
    {
      id: 3,
      image: review3, 
      alt: "Отзыв 3"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="mario-title">Восторженные отзывы!</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Review Carousel */}
          <div className="flex justify-center items-center space-x-8">
            <Button
              onClick={prevReview}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              ‹
            </Button>
            
            <div className="flex space-x-4 overflow-hidden">
              {reviews.map((review, index) => (
                <div
                  key={review.id}
                  className={`transition-all duration-300 ${
                    index === currentReview ? 'opacity-100 scale-100' : 'opacity-50 scale-90'
                  }`}
                  style={{
                    transform: `translateX(${(index - currentReview) * 100}%)`,
                    display: Math.abs(index - currentReview) <= 1 ? 'block' : 'none'
                  }}
                >
                  <img
                    src={review.image}
                    alt={review.alt}
                    className="w-80 h-60 object-cover rounded-xl shadow-lg"
                  />
                </div>
              ))}
            </div>
            
            <Button
              onClick={nextReview}
              variant="outline"
              size="lg"
              className="rounded-full w-12 h-12 p-0"
            >
              ›
            </Button>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
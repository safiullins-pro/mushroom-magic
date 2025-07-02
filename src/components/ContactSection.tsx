import React from 'react';
import { Button } from './ui/button';

const ContactSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contacts" className="py-16 bg-popover">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mario-title">Свяжитесь с нами</h2>
        
        <div className="max-w-md mx-auto space-y-6">
          {/* Phone */}
          <div>
            <a 
              href="tel:+79015586687" 
              className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              8 901 558 66 87
            </a>
          </div>

          {/* Email */}
          <div>
            <a 
              href="mailto:vakurko.alex@mail.ru" 
              className="text-lg text-foreground hover:text-primary transition-colors"
            >
              vakurko.alex@mail.ru
            </a>
          </div>

          {/* Contact Button */}
          <div className="pt-4">
            <Button 
              onClick={() => scrollToSection('order')}
              className="mario-btn-primary text-lg px-8 py-4"
            >
              Отправить запрос
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import React, { useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('mushrooms')}
              className="mario-nav-link flex items-center space-x-2"
            >
              <img 
                src="https://optim.tildacdn.com/tild3664-3461-4930-b337-353435343761/-/resize/57x/-/format/webp/shit-removebg-previe.png.webp" 
                alt="Лечебные грибы" 
                className="w-8 h-8"
              />
              <span>Лечебные грибы</span>
            </button>
            <button 
              onClick={() => scrollToSection('plants')}
              className="mario-nav-link flex items-center space-x-2"
            >
              <img 
                src="https://optim.tildacdn.com/tild6632-6135-4134-a162-326533326335/-/resize/39x/-/format/webp/noroot.png.webp" 
                alt="Лечебные растения" 
                className="w-8 h-8"
              />
              <span>Лечебные растения</span>
            </button>
          </div>

          {/* Center Logo */}
          <div className="flex items-center">
            <img 
              src="https://optim.tildacdn.com/tild3532-6162-4238-a235-666666346663/-/resize/440x/-/format/webp/mario_sonic_font_log.png.webp" 
              alt="Mario Mushroom" 
              className="h-16 w-auto"
            />
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('about')}
              className="mario-nav-link flex items-center space-x-2"
            >
              <img 
                src="https://optim.tildacdn.com/tild3766-3566-4635-b839-613231666233/-/resize/51x/-/format/webp/How_to_Draw_the_Mush.png.webp" 
                alt="О компании" 
                className="w-8 h-8"
              />
              <span>О компании</span>
            </button>
            <button 
              onClick={() => scrollToSection('contacts')}
              className="mario-nav-link flex items-center space-x-2"
            >
              <img 
                src="https://optim.tildacdn.com/tild3766-3566-4635-b839-613231666233/-/resize/51x/-/format/webp/How_to_Draw_the_Mush.png.webp" 
                alt="Контакты" 
                className="w-8 h-8"
              />
              <span>Контакты</span>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://optim.tildacdn.com/tild3532-6162-4238-a235-666666346663/-/resize/440x/-/format/webp/mario_sonic_font_log.png.webp" 
              alt="Mario Mushroom" 
              className="h-12 w-auto"
            />
          </div>

          {/* Hamburger Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('mushrooms')}
                className="mario-nav-link flex items-center space-x-3 p-2"
              >
                <img 
                  src="https://optim.tildacdn.com/tild3664-3461-4930-b337-353435343761/-/resize/57x/-/format/webp/shit-removebg-previe.png.webp" 
                  alt="Лечебные грибы" 
                  className="w-6 h-6"
                />
                <span>Лечебные грибы</span>
              </button>
              <button 
                onClick={() => scrollToSection('plants')}
                className="mario-nav-link flex items-center space-x-3 p-2"
              >
                <img 
                  src="https://optim.tildacdn.com/tild6632-6135-4134-a162-326533326335/-/resize/39x/-/format/webp/noroot.png.webp" 
                  alt="Лечебные растения" 
                  className="w-6 h-6"
                />
                <span>Лечебные растения</span>
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="mario-nav-link flex items-center space-x-3 p-2"
              >
                <img 
                  src="https://optim.tildacdn.com/tild3766-3566-4635-b839-613231666233/-/resize/51x/-/format/webp/How_to_Draw_the_Mush.png.webp" 
                  alt="О компании" 
                  className="w-6 h-6"
                />
                <span>О компании</span>
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="mario-nav-link flex items-center space-x-3 p-2"
              >
                <img 
                  src="https://optim.tildacdn.com/tild3766-3566-4635-b839-613231666233/-/resize/51x/-/format/webp/How_to_Draw_the_Mush.png.webp" 
                  alt="Контакты" 
                  className="w-6 h-6"
                />
                <span>Контакты</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
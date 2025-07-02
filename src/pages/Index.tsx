import React, { useEffect } from 'react';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import ProductDetails from '@/components/ProductDetails';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import OrderForm from '@/components/OrderForm';
import { Button } from '@/components/ui/button';

// Import generated images
import redMushroomCapsules from '@/assets/red-mushroom-capsules.jpg';
import redMushroomDried from '@/assets/red-mushroom-dried.jpg';
import chagaMushroom from '@/assets/chaga-mushroom.jpg';
import promoBanner from '@/assets/promo-banner.jpg';

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior to html element
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const products = [
    {
      id: 'microdosing-red',
      title: 'Микродозинг красного мухомора',
      price: 2500,
      benefits: ['Сон', 'Иммунитет', 'Спокойствие'],
      image: redMushroomCapsules,
      options: {
        label: 'количество',
        values: ['60 капсул', '120 капсул']
      },
      showDetails: true
    },
    {
      id: 'red-mushroom',
      title: 'Красный мухомор',
      price: 2500,
      benefits: ['Сон', 'Иммунитет', 'Спокойствие'],
      image: redMushroomDried,
      options: {
        label: 'Вес',
        values: ['50г', '100г']
      },
      showDetails: true
    },
    {
      id: 'microdosing-panther',
      title: 'Микродозинг пантерного мухомора',
      price: 4000,
      benefits: ['Сила', 'Выносливость', 'Здоровье'],
      image: redMushroomCapsules,
      options: {
        label: 'количество',
        values: ['60 капсул', '120 капсул']
      },
      showDetails: true
    },
    {
      id: 'panther-mushroom',
      title: 'Пантерный мухомор',
      price: 3000,
      benefits: ['Сила', 'Выносливость', 'Здоровье'],
      image: redMushroomDried,
      options: {
        label: 'Вес',
        values: ['50г', '100г']
      },
      showDetails: true
    },
    {
      id: 'chaga',
      title: 'Чага',
      price: 1500,
      benefits: ['Антиоксиданты', 'Иммунитет', 'Энергия'],
      image: chagaMushroom,
      options: {
        label: 'Вес',
        values: ['100г', '200г']
      }
    },
    {
      id: 'lion-mane',
      title: 'Львиная грива',
      price: 2800,
      benefits: ['Память', 'Концентрация', 'Нервная система'],
      image: chagaMushroom,
      options: {
        label: 'Формат',
        values: ['Порошок', 'Капсулы']
      }
    }
  ];

  const productDetails = [
    {
      id: 'microdosing-red',
      title: 'Микродозинг красного мухомора',
      price: 2500,
      image: redMushroomCapsules,
      options: {
        label: 'количество',
        values: ['60 капсул', '120 капсул']
      },
      description: [
        '1. Улучшает качество сна и помогает при бессоннице',
        '2. Укрепляет иммунную систему организма',
        '3. Снижает уровень стресса и тревожности',
        '4. Помогает при депрессивных состояниях',
        '5. Улучшает общее самочувствие и настроение',
        '6. Нормализует работу нервной системы'
      ]
    },
    {
      id: 'red-mushroom',
      title: 'Красный мухомор',
      price: 2500,
      image: redMushroomDried,
      options: {
        label: 'Вес',
        values: ['50г', '100г']
      },
      description: [
        '1. Натуральный продукт высочайшего качества',
        '2. Собирается в экологически чистых регионах',
        '3. Проходит тщательную обработку и сушку',
        '4. Сохраняет все полезные свойства',
        '5. Используется в народной медицине веками',
        '6. Подходит для приготовления настоек и отваров'
      ]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Banner */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="mario-title">Уникальные предложения!</h1>
          
          {/* Promotional Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src={promoBanner} 
                alt="Скидка 15% на комбо - Ёжовик + Микродозинг"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">Скидка 15% на комбо</h3>
                  <p className="text-xl drop-shadow-md">Ёжовик + Микродозинг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="mushrooms" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Sections */}
      {productDetails.map((product) => (
        <ProductDetails
          key={product.id}
          {...product}
        />
      ))}

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Order Form */}
      <OrderForm />

      {/* About Section (placeholder) */}
      <section id="about" className="py-16 bg-popover">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mario-title">О компании</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed">
              Мы специализируемся на производстве и поставке качественных лечебных грибов, 
              полезных растений и продуктов пчеловодства. Вся наша продукция проходит 
              тщательный контроль качества и соответствует высочайшим стандартам.
            </p>
          </div>
        </div>
      </section>

      {/* Plants Section (placeholder) */}
      <section id="plants" className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mario-title">Лечебные растения</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              В нашем ассортименте представлены различные лечебные растения, 
              собранные в экологически чистых регионах и обработанные по традиционным методикам.
            </p>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="mario-btn-secondary"
            >
              Узнать подробнее
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from '@/hooks/use-toast';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    postalCode: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните обязательные поля (Имя и Телефон)",
        variant: "destructive"
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Заказ принят!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения заказа.",
    });

    // Reset form
    setFormData({
      name: '',
      address: '',
      postalCode: '',
      phone: ''
    });
  };

  return (
    <section id="order" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto mario-card">
          <h2 className="mario-title text-2xl mb-6">Оформить заказ</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Имя *"
                value={formData.name}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>

            {/* Address */}
            <div>
              <Input
                type="text"
                name="address"
                placeholder="Адрес"
                value={formData.address}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {/* Postal Code */}
            <div>
              <Input
                type="text"
                name="postalCode"
                placeholder="Индекс"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full"
              />
            </div>

            {/* Phone */}
            <div>
              <Input
                type="tel"
                name="phone"
                placeholder="Телефон *"
                value={formData.phone}
                onChange={handleChange}
                className="w-full"
                required
              />
            </div>

            {/* Submit Button */}
            <Button 
              type="submit"
              className="mario-btn-primary w-full text-lg py-3"
            >
              Заказать!
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-4">
            * Обязательные поля
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderForm;
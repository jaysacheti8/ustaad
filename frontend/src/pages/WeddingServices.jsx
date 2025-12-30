import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, Hotel, Gift, Music, Users, Utensils, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { weddingServices } from '../mockData';

const iconMap = {
  MapPin, Sparkles, Hotel, Gift, Music, Users, Utensils, Calendar, CheckCircle
};

const WeddingServices = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/11985359/pexels-photo-11985359.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Wedding Services
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Crafting your dream wedding with elegance, creativity, and perfection
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Your wedding day should be as unique as your love story. At Event Ustaad, we offer comprehensive wedding planning services that transform your vision into reality.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From intimate ceremonies to grand celebrations, from royal palace weddings to serene beach venues, we manage every detail with care and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-lavender-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our Wedding Services
            </h2>
            <p className="text-lg text-gray-600">
              End-to-end planning with meticulous attention to detail
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weddingServices.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="hover-lift border-purple-100 hover:border-purple-300 transition-colors">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mb-6">
                      <IconComponent className="text-purple-600" size={28} />
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Moments We've Created
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/12194048/pexels-photo-12194048.jpeg" 
                alt="Wedding venue" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/35420251/pexels-photo-35420251.jpeg" 
                alt="Wedding decor" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/35349353/pexels-photo-35349353.png" 
                alt="Wedding setup" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/15966640/pexels-photo-15966640.jpeg" 
                alt="Couple portrait" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/29034583/pexels-photo-29034583.jpeg" 
                alt="Wedding ceremony" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/35234733/pexels-photo-35234733.jpeg" 
                alt="Wedding couple" 
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              How We Work
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              { step: 1, title: "Initial Consultation", desc: "We meet to understand your vision, preferences, and budget" },
              { step: 2, title: "Concept Development", desc: "Our team creates a personalized plan with mood boards and ideas" },
              { step: 3, title: "Vendor Coordination", desc: "We handle all vendor bookings and negotiations" },
              { step: 4, title: "Detail Management", desc: "Every element is planned and tracked meticulously" },
              { step: 5, title: "Flawless Execution", desc: "On your big day, we ensure everything runs smoothly" }
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-300 rounded-full flex items-center justify-center text-white text-2xl font-light shadow-lg">
                  {item.step}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-400 via-purple-300 to-lavender-300 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Plan Your Dream Wedding?
          </h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Let's bring your vision to life with elegance and perfection
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg rounded-md shadow-lg hover-lift">
                Start Planning
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/packages">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md backdrop-blur-sm">
                View Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeddingServices;

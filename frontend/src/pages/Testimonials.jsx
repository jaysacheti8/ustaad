import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { testimonials } from '../mockData';

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/15582310/pexels-photo-15582310.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Client Stories
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-lavender-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift border-purple-100">
                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-purple-400 text-purple-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center pt-6 border-t border-purple-100">
                    {testimonial.image ? (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                    ) : (
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full flex items-center justify-center mr-4 text-white font-medium text-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-purple-600">{testimonial.event}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our Track Record
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-light text-purple-600 mb-2">65+</div>
              <div className="text-gray-600">Happy Couples</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-purple-600 mb-2">50+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-light text-purple-600 mb-2">7</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Wedding Clients */}
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-6">Wedding Celebrations</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  From royal palace weddings in Rajasthan to intimate beach ceremonies in Goa, we've helped over 65 couples celebrate their special day with elegance and joy.
                </p>
                <div className="space-y-3">
                  {testimonials.filter(t => t.event.toLowerCase().includes('wedding')).slice(0, 3).map(t => (
                    <div key={t.id} className="flex items-start gap-2">
                      <Star size={16} className="fill-purple-400 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t.name} - {t.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corporate Clients */}
              <div>
                <h3 className="text-3xl font-light text-gray-900 mb-6">Corporate Events</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Trusted by leading brands like Asian Paints, Cipla, and Godrej Tyson for professional events that inspire and engage teams.
                </p>
                <div className="space-y-3">
                  {testimonials.filter(t => t.event.toLowerCase().includes('corporate') || t.event.toLowerCase().includes('team')).map(t => (
                    <div key={t.id} className="flex items-start gap-2">
                      <Star size={16} className="fill-purple-400 text-purple-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{t.name} - {t.event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import ClientLogos from '../components/ClientLogos';
import InstagramSection from '../components/InstagramSection';
import { weddingServices, testimonials } from '../mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/33726144/pexels-photo-33726144.jpeg)',
            filter: 'brightness(0.7)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-purple-900/50" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 animate-fadeIn">
            We Create Experiences<br />That Work
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            Luxury Weddings & Corporate Events Across 50+ Destinations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-6 text-lg rounded-md shadow-lg hover-lift">
                Plan Your Event
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md backdrop-blur-sm">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full" />
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-lavender-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-purple-500 font-medium tracking-wider uppercase text-sm">Since 2018</span>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mt-2 mb-6">
                  Crafting Memories<br />One Event at a Time
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded by Anmol & Shrishti, Event Ustaad brings together 10+ years of combined industry experience to create extraordinary celebrations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-light text-purple-600 mb-2">65+</div>
                  <div className="text-sm text-gray-600">Wedding Couples Served</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-4xl font-light text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Destinations Across India</div>
                </div>
              </div>
              <Link to="/about">
                <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                  Learn Our Story
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/15841148/pexels-photo-15841148.jpeg" 
                    alt="Wedding celebration" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg" 
                    alt="Event decor" 
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg" 
                    alt="Bride portrait" 
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="image-zoom-container rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.pexels.com/photos/15582310/pexels-photo-15582310.jpeg" 
                    alt="Couple moment" 
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate ceremonies to grand celebrations, we bring your vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Wedding Services */}
            <Card className="hover-lift cursor-pointer border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">💒</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">Weddings</h3>
                <p className="text-gray-600 mb-4">Elegant ceremonies and grand celebrations tailored to your dreams</p>
                <Link to="/services/weddings" className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center justify-center">
                  Explore Services <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Corporate Events */}
            <Card className="hover-lift cursor-pointer border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏢</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">Corporate Events</h3>
                <p className="text-gray-600 mb-4">Professional gatherings that inspire and engage your teams</p>
                <Link to="/services/corporate" className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center justify-center">
                  Explore Services <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* Destination Events */}
            <Card className="hover-lift cursor-pointer border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🌴</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">Destination Events</h3>
                <p className="text-gray-600 mb-4">Unforgettable celebrations in breathtaking locations</p>
                <Link to="/portfolio" className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center justify-center">
                  View Destinations <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>

            {/* End-to-End Solutions */}
            <Card className="hover-lift cursor-pointer border-purple-100 hover:border-purple-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">✨</span>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-3">End-to-End Solutions</h3>
                <p className="text-gray-600 mb-4">Complete event management from concept to execution</p>
                <Link to="/packages" className="text-purple-600 hover:text-purple-700 font-medium text-sm flex items-center justify-center">
                  View Packages <ArrowRight size={16} className="ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Event Ustaad */}
      <section className="py-24 bg-gradient-to-br from-lavender-50 via-purple-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Why Choose Event Ustaad
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">End-to-End Planning</h3>
              <p className="text-gray-600">Comprehensive management from start to finish</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Creative Approach</h3>
              <p className="text-gray-600">Personalized concepts that reflect your style</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Strong Network</h3>
              <p className="text-gray-600">Trusted vendors and artists across India</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <CheckCircle className="text-purple-500" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Seamless Logistics</h3>
              <p className="text-gray-600">Flawless execution of every detail</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift border-purple-100">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-purple-400 text-purple-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    {testimonial.image && (
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                    )}
                    <div>
                      <div className="font-medium text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">{testimonial.event}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
                Read More Reviews
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
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
            Let's Plan Something Extraordinary
          </h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Whether it's an intimate wedding or a large corporate gathering, we're here to make it unforgettable
          </p>
          <Link to="/contact">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg rounded-md shadow-lg hover-lift">
              Start Planning Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

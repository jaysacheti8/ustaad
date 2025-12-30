import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent } from '../components/ui/card';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventLocation: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value) => {
    setFormData({
      ...formData,
      eventType: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        eventLocation: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg)',
            filter: 'brightness(0.6)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-purple-900/60" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            Start planning your extraordinary event today
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-lavender-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're planning a dream wedding or a corporate event, we're here to help bring your vision to life. Reach out to us today!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-purple-100 hover-lift">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Email Us</h3>
                      <a href="mailto:eventustaad@gmail.com" className="text-purple-600 hover:text-purple-700 block">
                        eventustaad@gmail.com
                      </a>
                      <a href="mailto:contact@eventustaad.com" className="text-purple-600 hover:text-purple-700 block">
                        contact@eventustaad.com
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 hover-lift">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Call Us</h3>
                      <a href="tel:+919833310150" className="text-purple-600 hover:text-purple-700 block">
                        +91 98333 10150
                      </a>
                      <a href="tel:+919920581507" className="text-purple-600 hover:text-purple-700 block">
                        +91 99205 81507
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-100 hover-lift">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-purple-600" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">Connect Socially</h3>
                      <p className="text-gray-600">@eventustaad on all platforms</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Office Hours */}
              <div className="bg-purple-50/50 rounded-lg p-6">
                <h3 className="font-medium text-gray-900 mb-3">Office Hours</h3>
                <p className="text-gray-600">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Sunday: By Appointment</p>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-purple-100 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-6">
                  Send us a message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 border-purple-200 focus:border-purple-400"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 border-purple-200 focus:border-purple-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2 border-purple-200 focus:border-purple-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="eventType">Event Type *</Label>
                    <Select onValueChange={handleSelectChange} value={formData.eventType}>
                      <SelectTrigger className="mt-2 border-purple-200 focus:border-purple-400">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="destination">Destination Event</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="eventLocation">Event Location</Label>
                    <Input
                      id="eventLocation"
                      name="eventLocation"
                      value={formData.eventLocation}
                      onChange={handleChange}
                      className="mt-2 border-purple-200 focus:border-purple-400"
                      placeholder="Where is your event?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 border-purple-200 focus:border-purple-400"
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-400 to-purple-300 hover:from-purple-500 hover:to-purple-400 text-white py-6 text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

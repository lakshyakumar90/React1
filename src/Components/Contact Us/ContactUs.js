import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, Clock } from 'lucide-react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Swiggy HQ, 2nd Floor, Tower D\nIBC Knowledge Park, Bangalore'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '1800-890-1222'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@swiggy.in'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: '24/7 Customer Support'
    }
  ];

  const formFields = [
    { name: 'name', label: 'Your Name', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'subject', label: 'Subject', type: 'text' },
    { name: 'message', label: 'Message', type: 'textarea' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-orange-600">Swiggy</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question about our service? Need help with an order? We're here to help you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-gray-200 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <detail.icon className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-900">{detail.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{detail.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-orange-500 rounded-2xl shadow-lg p-8 text-white">
              <MessageSquare className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Live Chat Support</h3>
              <p className="mb-4">Get instant help from our customer service team</p>
              <button className="bg-white text-orange-500 px-6 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                Start Chat
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-200 rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      required
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ContactUs;
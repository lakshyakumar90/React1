import React from 'react';
import { Users, TrendingUp, Clock, MapPin, Award, Utensils } from 'lucide-react';

function About() {
  const stats = [
    { label: 'Cities', value: '500+', icon: MapPin },
    { label: 'Restaurant Partners', value: '150,000+', icon: Utensils },
    { label: 'Monthly Orders', value: '10M+', icon: TrendingUp },
    { label: 'Delivery Partners', value: '250,000+', icon: Users },
  ];

  const milestones = [
    { year: '2014', event: 'Founded in Bangalore' },
    { year: '2016', event: 'Expanded to 10 major cities' },
    { year: '2018', event: 'Launched Swiggy Access' },
    { year: '2020', event: 'Introduced Instamart' },
    { year: '2022', event: 'Reached 500+ cities' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-orange-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Delivering Happiness</h1>
          <p className="text-xl max-w-2xl mb-8">
            India's leading on-demand delivery platform connecting people to food, groceries, and more.
          </p>
          <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10">
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38')] bg-cover bg-center" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-full mb-4">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              To elevate the quality of life for the urban consumer by offering unparalleled convenience.
              We're committed to changing the way India eats by providing access to the best restaurants
              and food experiences in cities across the country.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-orange-50 rounded-xl">
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Lightning Fast Delivery</h3>
                <p className="text-gray-600">Average delivery time of 30 minutes</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <Award className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Best-in-class Service</h3>
                <p className="text-gray-600">Rated 4.8/5 by our customers</p>
              </div>
              <div className="p-6 bg-orange-50 rounded-xl">
                <Users className="w-8 h-8 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Community First</h3>
                <p className="text-gray-600">Supporting local restaurants and riders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Journey</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-orange-200"></div>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-orange-600" />
                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="text-orange-600 font-bold mb-2">{milestone.year}</div>
                    <div className="text-gray-800">{milestone.event}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Customer Obsession</h3>
              <p className="text-gray-600">
                We put our customers first and work tirelessly to exceed their expectations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to create better solutions for our users.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Ownership</h3>
              <p className="text-gray-600">
                We take responsibility for our actions and their outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
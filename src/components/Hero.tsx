import React from 'react';
import { ArrowDown, Star, Users, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Wellness
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
              Sanctuary Awaits
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the transformative power of thermal therapy. Steam, sauna, and ice bath sessions 
            designed to rejuvenate your body and mind.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="text-gray-700">4.9/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-gray-700">2,000+ Happy Customers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-teal-600" />
            <span className="text-gray-700">Flexible Scheduling</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Book Your Session
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-400 transition-colors">
            View Packages
          </button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400 mx-auto" />
        </div>
      </div>
    </section>
  );
}
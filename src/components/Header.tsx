import React from 'react';
import { Waves, Phone, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-full">
              <Waves className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Recover</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sessions" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sessions
            </a>
            <a href="#booking" className="text-gray-700 hover:text-blue-600 transition-colors">
              Book Now
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="h-4 w-4" />
              <span>+91 8903265089</span>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="h-4 w-4" />
              <span>Koramangala, Bengaluru</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
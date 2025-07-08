import React from 'react';
import { Waves, MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-full">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Recover</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your premier wellness sanctuary for thermal therapy and recovery.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">45 Koramangala 5th Block, Bengaluru 560095</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">+91 8903265089</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gray-400" />
                <span className="text-gray-400">hello@recover.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Monday - Friday</span>
                <span className="text-gray-400">6AM - 10PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Saturday</span>
                <span className="text-gray-400">7AM - 9PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Sunday</span>
                <span className="text-gray-400">8AM - 8PM</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Our Services</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Membership</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Recover Wellness Sanctuary. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
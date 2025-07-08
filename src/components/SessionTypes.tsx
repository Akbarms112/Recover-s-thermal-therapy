import React from 'react';
import { Thermometer, Droplets, Snowflake, Clock, DollarSign } from 'lucide-react';

const sessionTypes = [
  {
    id: 'steam',
    name: 'Steam Therapy',
    description: 'Purify your skin and respiratory system with our premium steam rooms',
    duration: 30,
    price: 45,
    benefits: ['Detoxification', 'Improved Circulation', 'Stress Relief', 'Skin Purification'],
    icon: Droplets,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50'
  },
  {
    id: 'sauna',
    name: 'Sauna Session',
    description: 'Traditional Finnish sauna experience for deep relaxation and recovery',
    duration: 45,
    price: 55,
    benefits: ['Muscle Recovery', 'Cardiovascular Health', 'Mental Clarity', 'Better Sleep'],
    icon: Thermometer,
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50'
  },
  {
    id: 'ice-bath',
    name: 'Ice Bath Therapy',
    description: 'Cold exposure therapy for enhanced recovery and mental resilience',
    duration: 15,
    price: 35,
    benefits: ['Inflammation Reduction', 'Enhanced Recovery', 'Mental Toughness', 'Immune Boost'],
    icon: Snowflake,
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50'
  }
];

export default function SessionTypes() {
  return (
    <section id="sessions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Thermal Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each session is carefully designed to provide unique benefits for your physical and mental wellness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sessionTypes.map((session) => {
            const IconComponent = session.icon;
            return (
              <div key={session.id} className={`${session.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                <div className={`bg-gradient-to-r ${session.color} p-3 rounded-full w-fit mb-6`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{session.name}</h3>
                <p className="text-gray-600 mb-6">{session.description}</p>
                
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{session.duration} minutes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-lg font-semibold text-gray-900">₹{session.price * 80}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {session.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
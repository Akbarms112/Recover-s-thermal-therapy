import React, { useState } from 'react';
import { Calendar, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { BookingData } from '../types/booking';
import { generateBookingData } from '../utils/bookingData';

interface BookingSectionProps {
  onBookingSelect: (booking: BookingData) => void;
}

export default function BookingSection({ onBookingSelect }: BookingSectionProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSession, setSelectedSession] = useState<'steam' | 'sauna' | 'ice-bath'>('steam');
  
  const bookingData = generateBookingData();
  
  // Get next 7 days
  const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const formatDisplayDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getAvailableSlots = () => {
    const dateStr = formatDate(selectedDate);
    return bookingData.filter(booking => 
      booking.date === dateStr && booking.sessionType === selectedSession
    );
  };

  const days = getNext7Days();
  const availableSlots = getAvailableSlots();

  return (
    <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Book Your Session
          </h2>
          <p className="text-xl text-gray-600">
            Select your preferred therapy, date, and time
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Session Type Selection */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="bg-blue-600 p-2 rounded-full mr-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              Choose Session Type
            </h3>
            <div className="space-y-3">
              {[
                { id: 'steam', name: 'Steam Therapy', price: 45, duration: 30 },
                { id: 'sauna', name: 'Sauna Session', price: 55, duration: 45 },
                { id: 'ice-bath', name: 'Ice Bath Therapy', price: 35, duration: 15 }
              ].map((session) => (
                <button
                  key={session.id}
                  onClick={() => setSelectedSession(session.id as any)}
                  className={`w-full text-left p-4 rounded-xl transition-all ${
                    selectedSession === session.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{session.name}</h4>
                      <p className={`text-sm ${selectedSession === session.id ? 'text-blue-100' : 'text-gray-600'}`}>
                        {session.duration} minutes
                      </p>
                    </div>
                    <span className="font-bold">₹{session.price * 80}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="bg-blue-600 p-2 rounded-full mr-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              Select Date
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {days.map((date) => (
                <button
                  key={date.toISOString()}
                  onClick={() => setSelectedDate(date)}
                  className={`p-3 rounded-xl text-center transition-all ${
                    formatDate(date) === formatDate(selectedDate)
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  <div className="text-sm font-medium">
                    {formatDisplayDate(date)}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Selection */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <div className="bg-blue-600 p-2 rounded-full mr-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              Available Times
            </h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {availableSlots.map((slot) => (
                <div key={slot.id} className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="font-semibold text-gray-900">{slot.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">
                          {slot.availableSlots} slots available
                        </span>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-900">₹{slot.price * 80}</span>
                  </div>
                  
                  {slot.bookedCustomers.length > 0 && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-2">Others booking this time:</p>
                      <div className="flex -space-x-2">
                        {slot.bookedCustomers.slice(0, 3).map((customer) => (
                          <div
                            key={customer.id}
                            className="w-6 h-6 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                            title={customer.name}
                          >
                            {customer.name.charAt(0)}
                          </div>
                        ))}
                        {slot.bookedCustomers.length > 3 && (
                          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white">
                            +{slot.bookedCustomers.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={() => onBookingSelect(slot)}
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
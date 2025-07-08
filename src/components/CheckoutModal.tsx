import React, { useState } from 'react';
import { X, CreditCard, Calendar, Clock, MapPin, Shield, Check } from 'lucide-react';
import { BookingData } from '../types/booking';

interface CheckoutModalProps {
  booking: BookingData;
  onClose: () => void;
}

export default function CheckoutModal({ booking, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const sessionNames = {
    'steam': 'Steam Therapy',
    'sauna': 'Sauna Session',
    'ice-bath': 'Ice Bath Therapy'
  };

  const handleCustomerInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {step === 'details' && 'Booking Details'}
              {step === 'payment' && 'Payment Information'}
              {step === 'confirmation' && 'Booking Confirmed!'}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {step === 'details' && (
          <div className="p-6">
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Session Summary</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <Calendar className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-semibold">{formatDate(booking.date)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-teal-600 p-2 rounded-full">
                    <Clock className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Time & Duration</p>
                    <p className="font-semibold">{booking.time} • {booking.duration} minutes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-600 p-2 rounded-full">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Session Type</p>
                    <p className="font-semibold">{sessionNames[booking.sessionType]}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-blue-600">₹{booking.price * 80}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleCustomerInfoSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all"
              >
                Continue to Payment
              </button>
            </form>
          </div>
        )}

        {step === 'payment' && (
          <div className="p-6">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-green-800 font-medium">Secure Payment Processing</span>
              </div>
              <p className="text-green-700 text-sm mt-1">Your payment information is encrypted and secure</p>
            </div>

            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <CreditCard className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
                <input
                  type="text"
                  value={customerInfo.name}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Session</span>
                  <span className="font-semibold">₹{booking.price * 80}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="font-semibold">$0</span>
                </div>
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-xl font-bold text-blue-600">₹{booking.price * 80}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all"
              >
                Complete Booking • ₹{booking.price * 80}
              </button>
            </form>
          </div>
        )}

        {step === 'confirmation' && (
          <div className="p-6 text-center">
            <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-6">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Your {sessionNames[booking.sessionType].toLowerCase()} session has been successfully booked.
            </p>
            
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-4">Session Details</h4>
              <div className="space-y-2 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Date:</span>
                  <span className="font-semibold">{formatDate(booking.date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Time:</span>
                  <span className="font-semibold">{booking.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Session:</span>
                  <span className="font-semibold">{sessionNames[booking.sessionType]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-semibold">{booking.duration} minutes</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-teal-700 transition-all"
              >
                Done
              </button>
              <p className="text-sm text-gray-500">
                A confirmation email has been sent to {customerInfo.email}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SessionTypes from './components/SessionTypes';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';
import CheckoutModal from './components/CheckoutModal';
import { BookingData } from './types/booking';

function App() {
  const [selectedBooking, setSelectedBooking] = useState<BookingData | null>(null);
  const [showCheckout, setShowCheckout] = useState(false);

  const handleBookingSelect = (booking: BookingData) => {
    setSelectedBooking(booking);
    setShowCheckout(true);
  };

  const handleCheckoutClose = () => {
    setShowCheckout(false);
    setSelectedBooking(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <SessionTypes />
      <BookingSection onBookingSelect={handleBookingSelect} />
      <Footer />
      
      {showCheckout && selectedBooking && (
        <CheckoutModal 
          booking={selectedBooking} 
          onClose={handleCheckoutClose} 
        />
      )}
    </div>
  );
}

export default App;
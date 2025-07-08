import { BookingData, CustomerData } from '../types/booking';

const sampleCustomers: CustomerData[] = [
  { id: '1', name: 'Sarah Johnson', avatar: '', timeBooked: '2 hours ago' },
  { id: '2', name: 'Michael Chen', avatar: '', timeBooked: '45 minutes ago' },
  { id: '3', name: 'Emma Williams', avatar: '', timeBooked: '1 hour ago' },
  { id: '4', name: 'James Davis', avatar: '', timeBooked: '3 hours ago' },
  { id: '5', name: 'Lisa Martinez', avatar: '', timeBooked: '30 minutes ago' },
  { id: '6', name: 'David Brown', avatar: '', timeBooked: '1.5 hours ago' },
  { id: '7', name: 'Anna Taylor', avatar: '', timeBooked: '2.5 hours ago' },
  { id: '8', name: 'Robert Wilson', avatar: '', timeBooked: '4 hours ago' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', 
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'
];

const sessionTypes: Array<'steam' | 'sauna' | 'ice-bath'> = ['steam', 'sauna', 'ice-bath'];

const sessionPrices = {
  steam: 45,
  sauna: 55,
  'ice-bath': 35
};

const sessionDurations = {
  steam: 30,
  sauna: 45,
  'ice-bath': 15
};

export function generateBookingData(): BookingData[] {
  const bookings: BookingData[] = [];
  
  // Generate data for next 7 days
  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const date = new Date();
    date.setDate(date.getDate() + dayOffset);
    const dateStr = date.toISOString().split('T')[0];
    
    // Generate slots for each session type
    sessionTypes.forEach(sessionType => {
      timeSlots.forEach((time, timeIndex) => {
        const availableSlots = Math.floor(Math.random() * 8) + 1; // 1-8 slots
        const bookedCount = Math.floor(Math.random() * Math.min(availableSlots, 4)); // 0-4 booked
        
        const bookedCustomers = sampleCustomers
          .sort(() => Math.random() - 0.5)
          .slice(0, bookedCount);
        
        bookings.push({
          id: `${dateStr}-${sessionType}-${timeIndex}`,
          sessionType,
          date: dateStr,
          time,
          duration: sessionDurations[sessionType],
          price: sessionPrices[sessionType],
          availableSlots,
          bookedCustomers
        });
      });
    });
  }
  
  return bookings;
}
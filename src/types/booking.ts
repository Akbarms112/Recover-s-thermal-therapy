export interface BookingData {
  id: string;
  sessionType: 'steam' | 'sauna' | 'ice-bath';
  date: string;
  time: string;
  duration: number;
  price: number;
  availableSlots: number;
  bookedCustomers: CustomerData[];
}

export interface CustomerData {
  id: string;
  name: string;
  avatar: string;
  timeBooked: string;
}

export interface SessionType {
  id: string;
  name: string;
  description: string;
  duration: number;
  price: number;
  benefits: string[];
  image: string;
  color: string;
}
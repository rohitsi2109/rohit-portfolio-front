import { createContext, useContext } from 'react';

export const BookingContext = createContext<{ openBooking: () => void }>({ openBooking: () => {} });

export const useBooking = () => useContext(BookingContext);

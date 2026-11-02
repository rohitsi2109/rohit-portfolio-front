import { useEffect, useState, type ReactNode } from 'react';
import BookingCalendar from './BookingCalendar';
import { BookingContext } from './BookingContext';

const BookingProvider = ({ children }: { children: ReactNode }) => {
    const [isOpen, setIsOpen] = useState(false);

    // Lock page scroll and close on Escape while the modal is open
    useEffect(() => {
        if (!isOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKey);
        };
    }, [isOpen]);

    return (
        <BookingContext.Provider value={{ openBooking: () => setIsOpen(true) }}>
            {children}

            {isOpen && (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label="Book a project scope call"
                    className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative w-full max-w-5xl my-auto bg-background-dark rounded-2xl shadow-2xl shadow-primary/10"
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close"
                            className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                        <BookingCalendar />
                    </div>
                </div>
            )}
        </BookingContext.Provider>
    );
};

export default BookingProvider;

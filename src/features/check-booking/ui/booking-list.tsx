import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../shared/ui/section';
import { Button } from '../../shared/ui/button';
import { ImagePlaceholder } from '../../shared/ui/image-placeholder';
import { Calendar, Users, Clock, MoreHorizontal, Download } from 'lucide-react';
import { mockBookings, type Booking } from '../data/bookings';

const BookingList = () => {
  const [filter, setFilter] = useState<'ALL' | 'ROOMS' | 'DINING'>('ALL');

  const filteredBookings = mockBookings.filter((b) => {
    if (filter === 'ALL') return true;
    return b.type === (filter === 'ROOMS' ? 'room' : 'dining');
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'CONFIRMED': return 'bg-green-100 text-green-800';
      case 'COMPLETED': return 'bg-blue-100 text-blue-800';
      case 'PENDING': return 'bg-yellow-100 text-yellow-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Section className="bg-[#F8F9FA] pt-16 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center gap-8 border-b border-gray-200 mb-12">
          {['ALL', 'ROOMS', 'DINING'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab as any)}
              className={`pb-4 text-[10px] font-bold tracking-widest uppercase transition-colors relative ${
                filter === tab ? 'text-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
              {filter === tab && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"></div>
              )}
            </button>
          ))}
        </div>

        <div className="space-y-6">
          {filteredBookings.map((booking: Booking) => (
            <div key={booking.id} className="bg-white p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6">
              
              {/* Image box */}
              <div className="w-full md:w-56 h-40 flex-shrink-0">
                <ImagePlaceholder className="w-full h-full" text={booking.type === 'room' ? 'ROOM VIEW' : 'TABLE VIEW'} />
              </div>

              {/* Details & Action Split */}
              <div className="flex-1 flex flex-col md:flex-row gap-6">
                
                {/* Information */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className={`text-[9px] font-bold tracking-widest px-2 py-1 rounded-sm uppercase ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                    <p className="text-xs text-secondary font-bold tracking-wide uppercase mb-1">
                      {booking.subtitle}
                    </p>
                    <h3 className="text-lg font-marcellus text-gray-900 mb-4">
                      {booking.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-xs text-gray-500 font-manrope">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        {booking.dateRange}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        {booking.guests} Guests
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        {booking.placedAt}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Action Area */}
                <div className="w-full md:w-32 flex flex-row md:flex-col justify-between items-end md:border-l border-gray-100 md:pl-6 pt-4 md:pt-0 border-t md:border-t-0">
                  <div className="text-right w-full hidden md:block">
                     <p className="text-[10px] tracking-widest font-bold text-gray-400 uppercase mb-1">Total</p>
                     <p className="text-xl font-bold text-gray-900">${booking.amount.toFixed(2)}</p>
                  </div>
                  
                  <div className="flex flex-row md:flex-col gap-2 w-full mt-auto">
                    <Link to={`/bookings/${booking.id}`} className="w-full">
                      <Button variant="primary" className="w-full !px-3 !py-3 text-[10px] bg-primary hover:bg-blue-800">
                        OPEN
                      </Button>
                    </Link>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" className="flex-1 !px-2 !py-2 flex items-center justify-center">
                        <Download className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" className="flex-1 !px-2 !py-2 flex items-center justify-center">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BookingList;

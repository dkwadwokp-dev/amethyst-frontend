import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Bed, Utensils, ChevronDown, CalendarDays, Clock } from 'lucide-react';
import { Button } from '../../shared/ui/button';
import { rooms } from '../../rooms/data/rooms';
import { roomInstances } from '../../rooms/data/room-instances';
import { diningAreas, tableInstances } from '../data/tables';

const BookForm = () => {
  const [searchParams] = useSearchParams();
  const initialRoom = searchParams.get('room') || rooms[0]?.id || 'rm_01';

  const [activeTab, setActiveTab] = useState<'room' | 'dining'>('room');
  
  // Dynamic Category Selects
  const [selectedRoom, setSelectedRoom] = useState(initialRoom);
  const [selectedDiningArea, setSelectedDiningArea] = useState(diningAreas[0].id);
  
  // Room instance logic
  const availableInstances = roomInstances.filter(inst => inst.roomId === selectedRoom);
  const [selectedInstance, setSelectedInstance] = useState(availableInstances[0]?.id || '');

  // Keep instance synced when room type changes
  useEffect(() => {
    const newInstances = roomInstances.filter(inst => inst.roomId === selectedRoom);
    if (newInstances.length > 0) {
      setSelectedInstance(newInstances[0].id);
    }
    // Also reset selected dates since availability changed
    setCheckIn(null);
    setCheckOut(null);
  }, [selectedRoom]);

  // Dining table logic
  const availableTables = tableInstances.filter(tbl => tbl.areaId === selectedDiningArea);
  const [selectedTable, setSelectedTable] = useState(availableTables[0]?.id || '');

  // Keep table synced when area changes
  useEffect(() => {
    const newTables = tableInstances.filter(tbl => tbl.areaId === selectedDiningArea);
    if (newTables.length > 0) {
      setSelectedTable(newTables[0].id);
    }
    // Reset selections
    setDiningDate(null);
    setDiningTime(null);
  }, [selectedDiningArea]);

  const [guests, setGuests] = useState(3);

  const today = new Date();
  const currentMonthName = today.toLocaleString('default', { month: 'long' }).toUpperCase();
  const currentYear = today.getFullYear();
  const [month] = useState(`${currentMonthName} ${currentYear}`);
  
  const daysInCurrentMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const calendarDays = Array.from({ length: daysInCurrentMonth }, (_, i) => i + 1);
  const currentDay = today.getDate();
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();

  // Date selection states
  const [checkIn, setCheckIn] = useState<number | null>(null);
  const [checkOut, setCheckOut] = useState<number | null>(null);
  
  const [diningDate, setDiningDate] = useState<number | null>(null);
  const [diningTime, setDiningTime] = useState<number | null>(null); // e.g. 18 for 6:00 PM

  const currentInstanceObj = roomInstances.find(i => i.id === selectedInstance);
  const currentBookedRanges = currentInstanceObj?.bookedDates || [];

  const currentTableObj = tableInstances.find(t => t.id === selectedTable);
  const tableDayBookings = currentTableObj?.bookings.find(b => b.date === diningDate)?.bookedTimes || [];

  const isDayBooked = (day: number) => {
    return currentBookedRanges.some(r => day >= r.start && day <= r.end);
  };

  const handleDateClick = (day: number) => {
    if (activeTab === 'room') {
      if (!checkIn || (checkIn && checkOut)) {
        setCheckIn(day);
        setCheckOut(null);
      } else if (day > checkIn) {
        let valid = true;
        for (let i = checkIn; i <= day; i++) {
          if (isDayBooked(i)) {
            valid = false;
            break;
          }
        }
        if (valid) {
          setCheckOut(day);
        } else {
          setCheckIn(day);
          setCheckOut(null);
        }
      } else {
        setCheckIn(day);
      }
    } else {
      setDiningDate(day);
    }
  };

  const getDateStyle = (day: number, isUnavailable: boolean) => {
    if (isUnavailable) return 'text-gray-300 bg-gray-50 cursor-not-allowed border border-gray-100';

    if (activeTab === 'room') {
      if (checkIn === day || checkOut === day) return 'bg-primary text-white font-bold shadow-sm';
      if (checkIn && checkOut && day > checkIn && day < checkOut) return 'bg-gray-100 text-primary font-semibold';
      return 'text-gray-600 hover:bg-gray-100';
    } else {
      return diningDate === day ? 'bg-primary text-white font-bold shadow-sm' : 'text-gray-600 hover:bg-gray-100';
    }
  };

  return (
    <div className="bg-white p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 rounded-sm w-full max-w-2xl mx-auto -mt-16 md:-mt-24 relative z-10">
      
      {/* Top Tabs */}
      <div className="flex w-full mb-8 border-b border-gray-100">
        <button 
          onClick={() => setActiveTab('room')}
          className={`w-1/2 py-6 flex items-center justify-center gap-3 border-t-2 transition-colors ${
            activeTab === 'room' 
              ? 'border-primary text-primary bg-gray-50/50' 
              : 'border-transparent text-gray-400 hover:bg-gray-50'
          }`}
        >
          <Bed className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Room</span>
        </button>
        <button 
          onClick={() => setActiveTab('dining')}
          className={`w-1/2 py-6 flex items-center justify-center gap-3 border-t-2 transition-colors ${
            activeTab === 'dining' 
              ? 'border-primary text-primary bg-gray-50/50' 
              : 'border-transparent text-gray-400 hover:bg-gray-50'
          }`}
        >
          <Utensils className="w-5 h-5" />
          <span className="text-[10px] font-bold tracking-widest uppercase">Dining</span>
        </button>
      </div>

      <div className="space-y-8">
        {/* Select Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              {activeTab === 'room' ? 'Select Room Type' : 'Select Seating Area'}
            </label>
            <div className="relative">
              <select 
                value={activeTab === 'room' ? selectedRoom : selectedDiningArea}
                onChange={(e) => {
                  if (activeTab === 'room') {
                    setSelectedRoom(e.target.value);
                  } else {
                    setSelectedDiningArea(e.target.value);
                  }
                }}
                className="w-full appearance-none border border-gray-200 text-gray-900 text-sm p-4 rounded-none focus:outline-none focus:border-gray-900 bg-transparent"
              >
                {activeTab === 'room' ? (
                  <>
                    {rooms.map(room => (
                      <option key={room.id} value={room.id}>{room.title}</option>
                    ))}
                  </>
                ) : (
                  <>
                    {diningAreas.map(area => (
                      <option key={area.id} value={area.id}>{area.title}</option>
                    ))}
                  </>
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              {activeTab === 'room' ? 'Select Room Number' : 'Select Table'}
            </label>
            <div className="relative">
              <select 
                value={activeTab === 'room' ? selectedInstance : selectedTable}
                onChange={(e) => {
                  if (activeTab === 'room') {
                    setSelectedInstance(e.target.value);
                  } else {
                    setSelectedTable(e.target.value);
                  }
                }}
                className="w-full appearance-none border border-gray-200 text-gray-900 text-sm p-4 rounded-none focus:outline-none focus:border-gray-900 bg-transparent"
              >
                {activeTab === 'room' ? (
                  availableInstances.map(inst => (
                    <option key={inst.id} value={inst.id}>Room {inst.roomNumber}</option>
                  ))
                ) : (
                  availableTables.map(tbl => (
                    <option key={tbl.id} value={tbl.id}>Table {tbl.tableNumber} (Seats {tbl.capacity})</option>
                  ))
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Date / Calendar Picker Mockup */}
        <div className="border border-gray-100 p-4">
          <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
            <span className="text-xs font-bold font-manrope text-gray-900 flex items-center gap-2">
              <CalendarDays className="w-4 h-4 text-gray-400" />
              {activeTab === 'room' ? 'CHECK-IN — CHECK-OUT' : 'SELECT DATE'}
            </span>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">
              {month}
            </span>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center mb-2">
            {['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(day => (
              <div key={day} className="text-[9px] font-bold text-gray-300 tracking-widest uppercase">
                {day}
              </div>
            ))}
            
            {/* Empty slots for month start padding */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div key={`empty-${i}`}></div>
            ))}
            
            {calendarDays.map(day => {
              const isPast = day < currentDay;
              const isBooked = activeTab === 'room' && isDayBooked(day);
              const isUnavailable = isPast || isBooked;

              return (
                <div key={day} className="flex justify-center items-center">
                  <button 
                    disabled={isUnavailable}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDateClick(day);
                    }}
                    className={`w-8 h-8 flex items-center justify-center text-xs transition-colors rounded-sm ${getDateStyle(day, isUnavailable)}`}
                  >
                    {isBooked && !isPast ? 'X' : day}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Time Slots (Only visible when Dining active && date selected) */}
        {activeTab === 'dining' && diningDate && (
          <div className="animate-in fade-in slide-in-from-top-4">
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-3 flex items-center gap-2">
              <Clock className="w-3 h-3" /> AVAILABLE SEATING TIMES
            </label>
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
              {[17, 18, 19, 20, 21, 22].map((hour) => {
                const isTimeBooked = tableDayBookings.some(b => hour >= b.startHour && hour < b.endHour);
                
                return (
                  <button
                    key={hour}
                    disabled={isTimeBooked}
                    onClick={() => setDiningTime(hour)}
                    className={`py-3 text-xs font-semibold border transition-colors ${
                      isTimeBooked 
                        ? 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                        : diningTime === hour
                        ? 'border-primary bg-primary text-white shadow-sm'
                        : 'border-gray-200 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Guests / Capacity */}
        <div>
          <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-3">
            GUESTS
          </label>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, "6+"].map((num) => (
              <button
                key={num}
                onClick={() => setGuests(num as number)}
                className={`flex-1 min-w-[3rem] py-3 text-sm font-semibold border transition-colors ${
                  guests === num
                    ? 'border-primary bg-primary text-white shadow-sm'
                    : 'border-gray-200 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        {/* User Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              FIRST NAME
            </label>
            <input type="text" className="w-full border-b border-gray-200 p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300" placeholder="e.g. Jane" />
          </div>
          <div>
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              LAST NAME
            </label>
            <input type="text" className="w-full border-b border-gray-200 p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300" placeholder="e.g. Doe" />
          </div>
          <div className="md:col-span-2 mt-4">
            <label className="block text-[10px] text-gray-400 font-bold tracking-widest uppercase mb-2">
              EMAIL ADDRESS
            </label>
            <input type="email" className="w-full border-b border-gray-200 p-2 text-gray-900 text-sm focus:outline-none focus:border-gray-900 bg-transparent placeholder:text-gray-300" placeholder="jane.doe@example.com" />
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <Button variant="primary" className="w-full bg-primary hover:bg-blue-800 text-white px-6 py-5 text-[11px] font-bold tracking-widest rounded-none border-none shadow-none">
            {activeTab === 'room' ? 'COMPLETE BOOKING REQUEST' : 'RESERVE TABLE'}
          </Button>
        </div>
      </div>

    </div>
  );
};

export default BookForm;

interface PaymentSummaryCardProps {
  booking: any;
}

export const PaymentSummaryCard = ({ booking }: PaymentSummaryCardProps) => {
  return (
    <div className="bg-white p-4 md:p-8 shadow-sm border border-gray-100 flex flex-col justify-between h-full">
      <div>
        <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-6">
          Payment Summary
        </h4>
        <div className="space-y-4 font-manrope">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>{booking.type === "room" ? "Room" : "Resource"} Rate</span>
            <span>$1,100.00</span>
          </div>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Taxes & Fees</span>
            <span>$154.00</span>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold text-sm text-gray-900 uppercase tracking-widest">
            Total Amount
          </span>
          <span className="font-bold text-lg text-gray-900">$1,254.00</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          Verified Reservation
        </div>
      </div>
    </div>
  );
};

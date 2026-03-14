import { Button } from "../../shared/ui/button";
import { Edit2, Download, XCircle, CreditCard, Loader2 } from "lucide-react";
import { Section } from "../../shared/ui/section";
import { generateInvoicePDF } from "../utils/generate-invoice";
import { useState } from "react";

interface BookingActionsProps {
  booking: any;
}

const BookingActions = ({ booking }: BookingActionsProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const isRoomPending = booking.type === "room" && booking.status === "PENDING";
  const canDownloadInvoice = booking.status !== "PENDING";

  const handleDownloadInvoice = async () => {
    try {
      setIsDownloading(true);
      // Add a small artificial delay to ensure the user sees the loading state
      await new Promise((resolve) => setTimeout(resolve, 800));
      await generateInvoicePDF(booking);
    } catch (error) {
      console.error("Failed to generate invoice:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Section className="bg-[#F8F9FA] pt-0">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-5xl mx-auto border-t border-gray-100 pt-8">
        {isRoomPending && (
          <Button
            variant="primary"
            className="bg-green-600 hover:bg-green-700 text-white !px-4 md:px-8 py-4 text-[11px] tracking-widest rounded-none border-none shadow-lg flex items-center justify-center gap-3 font-bold animate-pulse"
          >
            <CreditCard className="w-4 h-4" /> PAY NOW & CONFIRM
          </Button>
        )}
        <Button
          variant="primary"
          className="bg-[#2A2E33] hover:bg-black text-white !px-3 md:px-6 py-3 text-[10px] tracking-widest rounded-none border-none shadow-none flex items-center justify-center gap-2"
        >
          <Edit2 className="w-3 h-3" /> MODIFY BOOKING
        </Button>
        {canDownloadInvoice && (
          <Button
            variant="outline"
            onClick={handleDownloadInvoice}
            disabled={isDownloading}
            className="border-gray-300 text-gray-700 bg-white hover:bg-gray-50 !px-3 md:px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold disabled:opacity-70"
          >
            {isDownloading ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <Download className="w-3 h-3" />
            )}
            {isDownloading ? "GENERATING..." : "DOWNLOAD INVOICE"}
          </Button>
        )}
        <Button
          variant="outline"
          className="border-red-100 text-red-500 bg-red-50 hover:bg-red-100 hover:border-red-200 !px-3 md:px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold sm:ml-auto"
        >
          <XCircle className="w-3 h-3" /> CANCEL BOOKING
        </Button>
      </div>
    </Section>
  );
};

export default BookingActions;

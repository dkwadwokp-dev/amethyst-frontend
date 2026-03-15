import { Button } from "../../shared/ui/button";
import { Download, XCircle, CreditCard, Loader2, Check } from "lucide-react";
import { Section } from "../../shared/ui/section";
import { generateInvoicePDF } from "../utils/generate-invoice";
import { useState } from "react";
import { useCreateBookingPayment } from "../../check-booking/actions/use-booking-payment";
import { useManageBooking } from "../../check-booking/actions/use-manage-booking";
import { useGetLoggedInUser } from "../../auth/actions/use-get-user";

interface BookingActionsProps {
  booking: any;
}

const BookingActions = ({ booking }: BookingActionsProps) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { mutateAsync: createPayment, isPending: isPaying } =
    useCreateBookingPayment();
  const { cancelBooking, completeBooking } = useManageBooking();
  const { data: user } = useGetLoggedInUser();

  const isRoomPending = booking.type === "room" && booking.status === "PENDING";
  const canDownloadInvoice = booking.status !== "PENDING";
  const isCancelled = booking.status === "CANCELLED";
  const isCompleted = booking.status === "COMPLETED";

  const handlePayNow = async () => {
    try {
      const payment = await createPayment(booking.reference);
      if (payment?.data?.authorization_url) {
        window.location.href = payment.data.authorization_url;
      }
    } catch (error) {
      console.error("Payment creation failed:", error);
      alert("Could not initiate payment. Please try again.");
    }
  };

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

  const handleCancel = () => {
    cancelBooking.mutate(booking.reference);
  };

  const handleComplete = () => {
    completeBooking.mutate(booking.reference);
  };

  return (
    <Section className="bg-[#F8F9FA] pt-0">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 max-w-5xl mx-auto border-t border-gray-100 pt-8">
        {isRoomPending && !isCancelled && (
          <Button
            variant="primary"
            onClick={handlePayNow}
            disabled={isPaying}
            className="bg-green-600 hover:bg-green-700 text-white !px-4 md:px-8 py-4 text-[11px] tracking-widest rounded-none border-none shadow-lg flex items-center justify-center gap-3 font-bold animate-pulse disabled:opacity-70"
          >
            {isPaying ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <CreditCard className="w-4 h-4" />
            )}
            {isPaying ? "PROCESSING..." : "PAY NOW & CONFIRM"}
          </Button>
        )}

        {canDownloadInvoice && !isCancelled && (
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

        {user && !isCompleted && !isCancelled && (
          <>
            <Button
              variant="outline"
              onClick={handleComplete}
              disabled={completeBooking.isPending}
              className="border-green-100 text-green-600 bg-green-50 hover:bg-green-100 hover:border-green-200 !px-3 md:px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold sm:ml-auto disabled:opacity-70"
            >
              {completeBooking.isPending ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <Check className="w-3 h-3" />
              )}
              {completeBooking.isPending ? "COMPLETING..." : "MARK COMPLETED"}
            </Button>
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={cancelBooking.isPending}
              className="border-red-100 text-red-500 bg-red-50 hover:bg-red-100 hover:border-red-200 !px-3 md:px-6 py-3 text-[10px] tracking-widest rounded-none shadow-none flex items-center justify-center gap-2 font-bold disabled:opacity-70"
            >
              {cancelBooking.isPending ? (
                <Loader2 className="w-3 h-3 animate-spin" />
              ) : (
                <XCircle className="w-3 h-3" />
              )}
              {cancelBooking.isPending ? "CANCELLING..." : "CANCEL BOOKING"}
            </Button>
          </>
        )}
      </div>
    </Section>
  );
};

export default BookingActions;

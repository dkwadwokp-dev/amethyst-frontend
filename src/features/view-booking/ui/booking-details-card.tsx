import { Section } from "../../shared/ui/section";
import { useState } from "react";
import { useRoom } from "../../rooms/actions/use-rooms";
import { GeneralInfoCard } from "./general-info-card";
import { PaymentSummaryCard } from "./payment-summary-card";
import { RoomDetailsCard } from "./room-details-card";
import { ContactPoliciesCard } from "./contact-policies-card";

interface BookingDetailsCardProps {
  booking: any;
}

const BookingDetailsCard = ({ booking }: BookingDetailsCardProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const resourceId = booking.resourceId || booking.itemType; // Support both naming conventions

  const toggleAccordion = (index: number) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Section className="bg-[#F8F9FA]">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-xl md:text-2xl font-marcellus text-gray-900 uppercase">
          BOOKING REFERENCE: {booking.reference}
        </h2>
        <div className="w-12 h-1 bg-gray-300 mx-auto mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-4 md:space-y-6">
        {/* Top Row: General & Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <GeneralInfoCard booking={booking} formatDate={formatDate} />
          <PaymentSummaryCard booking={booking} />
        </div>

        {/* Bottom Row: Room & Contact/Policies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <RoomDetailsCard resourceId={resourceId} bookingType={booking.type} />
          <ContactPoliciesCard
            booking={booking}
            openAccordion={openAccordion}
            toggleAccordion={toggleAccordion}
          />
        </div>
      </div>
    </Section>
  );
};

export default BookingDetailsCard;

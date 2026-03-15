import { useNavigate, useSearchParams } from "react-router-dom";
import { useVerifyBookingPayment } from "../features/check-booking/actions/use-verify-booking-payment";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "../features/shared/ui/button";
import { Section } from "../features/shared/ui/section";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import PageHero from "../features/shared/ui/page-hero";
import { Loading } from "../features/shared/ui/loading";
import { ReferenceVerificationForm } from "../features/shared/ui/reference-verification-form";

const VerifyBookingPaymentPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Paystack returns 'reference' or 'trxref'
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const {
    data: booking,
    isLoading,
    error,
  } = useVerifyBookingPayment(reference);

  const handleVerify = (ref: string) => {
    setSearchParams({ reference: ref });
  };

  const handleGoToBooking = () => {
    if (booking) {
      navigate(
        `/bookings/${booking.reference}?email=${encodeURIComponent(booking.email)}`,
      );
    } else {
      navigate("/check-booking");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col">
      <Header />
      <PageHero
        title="PAYMENT VERIFICATION"
        subtitle="FINALIZING YOUR BOOKING"
        usePattern={true}
      />

      <Section className="w-full flex-1 max-w-4xl mx-auto flex items-center justify-center py-20">
        {!reference ? (
          <div className="bg-white p-10 shadow-xl border border-gray-100 max-w-lg w-full text-center animate-in fade-in zoom-in-95 duration-500">
            <h2 className="text-2xl font-marcellus text-gray-900 mb-2">
              Verify Booking Payment
            </h2>
            <p className="text-gray-500 mb-8 text-sm leading-relaxed">
              Please enter the payment reference code from your transaction to
              complete verification.
            </p>
            <ReferenceVerificationForm
              onSubmit={handleVerify}
              onCancel={() => navigate("/")}
              submitLabel="VERIFY PAYMENT"
              cancelLabel="RETURN HOME"
              layout="stack"
              placeholder="e.g. PY-XXXXXXXX"
            />
          </div>
        ) : (
          <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 max-w-6xl  w-full text-center">
            {isLoading ? (
              <div className="flex flex-col items-center gap-6">
                <Loading className="!py-0" />
                <div>
                  <h2 className="text-xl font-marcellus text-gray-900 mb-2">
                    Verifying Payment...
                  </h2>
                  <p className="text-xs text-gray-500 font-medium tracking-wide">
                    Please wait while we confirm your transaction.
                  </p>
                </div>
              </div>
            ) : error ? (
              <div className="flex-1 py-4 flex flex-col items-center justify-center text-center p-8 w-full max-w-2xl mx-auto animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
                  <XCircle className="w-10 h-10 text-red-500" />
                </div>
                <h2 className="text-2xl font-marcellus text-gray-900 mb-3">
                  Verification Failed
                </h2>
                <p className="text-gray-600 mb-8 max-w-xs mx-auto leading-relaxed text-sm">
                  We couldn't verify your booking payment. Please try entering a
                  valid reference code.
                </p>

                <ReferenceVerificationForm
                  initialValue={reference || ""}
                  onSubmit={handleVerify}
                  onCancel={() => navigate("/")}
                  submitLabel="VERIFY"
                  cancelLabel="HOME"
                  layout="row"
                  className="w-full max-w-3xl mx-auto"
                  placeholder="PY-XXXXXX"
                />
              </div>
            ) : booking ? (
              <div className="flex flex-col items-center gap-6 animate-in zoom-in-95 duration-500">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-marcellus text-gray-900 mb-2">
                    Payment Successful!
                  </h2>
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-1">
                    BOOKING REFERENCE
                  </p>
                  <p className="text-3xl font-marcellus text-primary mb-6">
                    {booking.reference}
                  </p>
                  <p className="text-xs text-gray-500 font-medium tracking-wide max-w-xs mx-auto mb-8 leading-relaxed">
                    Your booking has been confirmed. A confirmation email has
                    been sent to{" "}
                    <span className="font-bold text-gray-900">
                      {booking.email}
                    </span>
                    .
                  </p>
                  <Button
                    variant="primary"
                    onClick={handleGoToBooking}
                    className="w-full justify-center py-4 text-xs"
                  >
                    VIEW BOOKING DETAILS
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </Section>

      <Footer />
    </div>
  );
};

export default VerifyBookingPaymentPage;

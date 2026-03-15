import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useVerifyTicket } from "../features/events/actions/use-verify-ticket";
import { CheckCircle, XCircle, Copy, Check } from "lucide-react";
import { Button } from "../features/shared/ui/button";
import { Loading } from "../features/shared/ui/loading";
import { ReferenceVerificationForm } from "../features/shared/ui/reference-verification-form";

const TicketItem = ({ code, idx }: { code: string; idx: number }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white border border-gray-200 p-4 relative group hover:shadow-sm transition-all flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
          TICKET #{idx + 1}
        </span>
        <span className="font-mono text-xl font-bold text-gray-900 tracking-tight">
          {code}
        </span>
      </div>
      <button
        onClick={handleCopy}
        className={`p-2 rounded-full transition-colors ${
          copied
            ? "text-green-600 bg-green-50"
            : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
        }`}
        title="Copy Ticket Code"
      >
        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
      </button>
    </div>
  );
};

const VerifyTicketPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Paystack returns 'reference' or 'trxref'
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const { data, isLoading, error } = useVerifyTicket(reference);

  const handleVerify = (ref: string) => {
    setSearchParams({ reference: ref });
  };

  if (!reference) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 font-manrope">
        <div className="bg-white w-full max-w-md shadow-xl border border-gray-100 p-10 text-center animate-in fade-in zoom-in-95 duration-500">
          <h2 className="text-2xl font-marcellus text-gray-900 mb-2">
            Verifying Ticket
          </h2>
          <p className="text-gray-500 mb-8 text-sm">
            Please enter your payment reference code to verify your ticket
            status.
          </p>
          <ReferenceVerificationForm
            onSubmit={handleVerify}
            onCancel={() => navigate("/")}
            submitLabel="VERIFY STATUS"
            cancelLabel="RETURN HOME"
            layout="stack"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6 font-manrope">
      <div className="bg-white w-full max-w-5xl shadow-2xl border border-gray-100 flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        {isLoading ? (
          <div className="flex-1 py-20 flex flex-col items-center justify-center text-center p-8">
            <Loading className="py-12 md:py-36" />
            <h2 className="text-2xl font-marcellus text-gray-900 mb-3 tracking-wide mt-6">
              VERIFYING PAYMENT
            </h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase">
              Please wait while we confirm your transaction...
            </p>
          </div>
        ) : error ? (
          <div className="flex-1 py-16 flex flex-col items-center justify-center text-center p-8 w-full max-w-md mx-auto">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <XCircle className="w-10 h-10 text-red-500" />
            </div>
            <h2 className="text-2xl font-marcellus text-gray-900 mb-3">
              Verification Failed
            </h2>
            <p className="text-gray-600 mb-8 max-w-xs mx-auto leading-relaxed text-sm">
              {(error as any).message ||
                "We couldn't verify your payment. Please try entering your reference code manually."}
            </p>

            <ReferenceVerificationForm
              initialValue={reference}
              onSubmit={handleVerify}
              onCancel={() => navigate("/")}
              submitLabel="VERIFY"
              cancelLabel="HOME"
              layout="row"
              className="w-full max-w-xs mx-auto"
            />
          </div>
        ) : (
          <>
            {/* Left Side: Success Message */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center border-r border-gray-100 bg-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>

              <div className="mb-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-marcellus text-gray-900 mb-4 leading-tight">
                  Payment <br />
                  Successful
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Thank you for your purchase,{" "}
                  <span className="font-bold text-gray-900">
                    {data.fullName}
                  </span>
                  . Your transaction has been completed and a confirmation email
                  has been sent to{" "}
                  <span className="underline decoration-gray-300 underline-offset-4">
                    {data.email}
                  </span>
                  .
                </p>
              </div>

              <div className="mt-auto">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                  PAYMENT REFERENCE
                </div>
                <div className="font-mono text-xl text-gray-900 bg-gray-50 p-4 border border-gray-100 inline-block mb-2 w-full text-center">
                  {data.reference}
                </div>
                <p className="text-[10px] text-gray-400 italic">
                  * Keep this reference safe for verifying your tickets at the
                  venue.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <Button
                  variant="outline"
                  onClick={() => navigate("/")}
                  className="w-full justify-center py-6 text-xs tracking-widest font-bold border-gray-200 hover:bg-gray-50 text-gray-900"
                >
                  RETURN TO HOMEPAGE
                </Button>
              </div>
            </div>

            {/* Right Side: Tickets */}
            <div className="md:w-1/2 bg-gray-50 p-6 flex flex-col relative overflow-hidden">
              {/* Decorative Circles */}
              <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white rounded-full translate-y-[-50%] z-10 border-r border-gray-100"></div>

              <div className="mb-6 flex justify-between items-end">
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  YOUR TICKETS ({data.ticketCodes?.length || 0})
                </h3>
                <span className="text-[10px] text-primary font-bold bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
                  {data.ticketType} PASS
                </span>
              </div>

              <div className="space-y-3 flex-1 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                {data.ticketCodes &&
                  data.ticketCodes.map((code: string, idx: number) => (
                    <TicketItem key={idx} code={code} idx={idx} />
                  ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                  Present these codes at the entrance
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyTicketPage;

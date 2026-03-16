import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useVerifyTicket } from "../features/events/actions/use-verify-ticket";
import { motion } from "framer-motion";
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
  const goBack = () => navigate(-1);

  // Paystack returns 'reference' or 'trxref'
  const reference = searchParams.get("reference") || searchParams.get("trxref");

  const { data, isLoading, error } = useVerifyTicket(reference);

  const handleVerify = (ref: string) => {
    setSearchParams({ reference: ref });
  };

  if (!reference) {
    return (
      <div className="min-h-screen flex items-center justify-center mx-auto bg-gray-50 p-4 md:p-6 font-manrope">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white w-full max-w-md shadow-xl border border-gray-100 p-4 md:p-10 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl font-marcellus text-gray-900 mb-2"
          >
            Verifying Ticket
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 mb-8 text-sm"
          >
            Please enter your payment reference code or ticket ID to verify your
            ticket status.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ReferenceVerificationForm
              onSubmit={handleVerify}
              onCancel={goBack}
              submitLabel="VERIFY STATUS"
              cancelLabel="BACK"
              layout="row"
              placeholder="e.g. PY-XXXXXX or TC-XXXXXX"
            />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-3 md:p-6 font-manrope">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`bg-white w-full ${data?.ticketCodes?.length > 1 ? "max-w-5xl" : "max-w-xl"} shadow-2xl border border-gray-100 flex flex-col md:flex-row overflow-hidden`}
      >
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 py-20 flex flex-col items-center justify-center text-center p-8"
          >
            <Loading className="py-12 md:py-36" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-marcellus text-gray-900 mb-3 tracking-wide mt-6"
            >
              VERIFYING PAYMENT
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 text-sm tracking-widest uppercase"
            >
              Please wait while we confirm your transaction...
            </motion.p>
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 py-16 flex flex-col items-center justify-center text-center p-4 md:p-8 w-full max-w-md mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6"
            >
              <XCircle className="w-10 h-10 text-red-500" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-marcellus text-gray-900 mb-3"
            >
              Verification Failed
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-600 mb-8 max-w-xs mx-auto leading-relaxed text-sm"
            >
              {(error as any).message ||
                "We couldn't verify your ticket. Please try entering a valid reference or ticket code."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className=" w-full"
            >
              <ReferenceVerificationForm
                initialValue={reference}
                onSubmit={handleVerify}
                onCancel={goBack}
                submitLabel="VERIFY"
                cancelLabel="BACK"
                layout="row"
                className="w-full max-w-xs mx-auto"
                placeholder="PY-XXXXXX or TC-XXXXXX"
              />
            </motion.div>
          </motion.div>
        ) : (
          <>
            {/* Left Side: Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-full p-4 md:p-10 flex flex-col justify-center border-r border-gray-100 bg-white relative"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-yellow-400 to-primary"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-marcellus text-gray-900 mb-4 leading-tight"
                >
                  Ticket Status: <br />
                  Confirmed
                </motion.h2>
                {data.eventId && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mb-6 p-4 bg-gray-50 border border-gray-100 rounded-sm"
                  >
                    <h3 className="font-marcellus text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">
                      {data.eventId.title}
                    </h3>
                    <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest space-y-1">
                      <p>{new Date(data.eventId.date).toLocaleDateString()}</p>
                      <p>{data.eventId.time}</p>
                      <p>{data.eventId.location}</p>
                    </div>
                  </motion.div>
                )}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-600 leading-relaxed text-sm"
                >
                  Verified for{" "}
                  <span className="font-bold text-gray-900">
                    {data.fullName}
                  </span>
                  . Your ticket(s) are valid and ready.
                </motion.p>
              </motion.div>
              {data.reference && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mt-auto"
                >
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
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 pt-8 border-t border-gray-100"
              >
                <Button
                  variant="outline"
                  onClick={() => navigate(`/events/${data.eventId.eventId}`)}
                  className="w-full justify-center py-6 text-xs tracking-widest font-bold border-gray-200 hover:bg-gray-50 text-gray-900"
                >
                  RETURN TO EVENT
                </Button>
              </motion.div>
            </motion.div>
            {/* Right Side: Tickets */}
            {data.ticketCodes.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="md:w-full bg-gray-50 p-6 flex flex-col relative overflow-hidden"
              >
                {/* Decorative Circles */}
                <div className="absolute -left-3 top-1/2 w-6 h-6 bg-white rounded-full translate-y-[-50%] z-10 border-r border-gray-100"></div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mb-6 flex justify-between items-end"
                >
                  <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {data.reference
                      ? `YOUR TICKETS (${data.ticketCodes?.length || 0})`
                      : "VERIFIED TICKET"}
                  </h3>
                  <span className="text-[10px] text-primary font-bold bg-primary/10 px-2 py-1 rounded-full uppercase tracking-wider">
                    {data.ticketType} PASS
                  </span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="space-y-3 flex-1 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar"
                >
                  {data.ticketCodes &&
                    data.ticketCodes.map((code: string, idx: number) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 + idx * 0.1 }}
                      >
                        <TicketItem code={code} idx={idx} />
                      </motion.div>
                    ))}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="mt-8 text-center"
                >
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Present this code at the entrance
                  </p>
                </motion.div>
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default VerifyTicketPage;

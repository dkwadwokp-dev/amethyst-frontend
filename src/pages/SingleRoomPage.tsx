import { useParams, Link } from "react-router-dom";
import Header from "../features/shared/ui/header";
import Footer from "../features/shared/ui/footer";
import { rooms } from "../features/rooms/data/rooms";
import { ImagePlaceholder } from "../features/shared/ui/image-placeholder";
import { Button } from "../features/shared/ui/button";
import { ChevronLeft, Info, CheckCircle2 } from "lucide-react";
import { Section } from "../features/shared/ui/section";

const SingleRoomPage = () => {
  const { roomId } = useParams();

  // Find the room. Using toString() for robust comparison regardless of type.
  const room = rooms.find((r) => r.id.toString() === roomId);

  if (!room) {
    return (
      <div className="min-h-screen bg-[#F8F9FA] font-manrope flex flex-col items-center justify-center">
        <h1 className="text-3xl font-marcellus text-gray-900 mb-4">
          Room Not Found
        </h1>
        <p className="text-gray-500 mb-8">
          We couldn't locate the room you are looking for.
        </p>
        <Link to="/rooms">
          <Button
            variant="primary"
            className="bg-[#2A2E33] hover:bg-black text-white px-8 py-3 text-[10px] tracking-widest rounded-none border-none"
          >
            GO BACK TO ROOMS
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-manrope flex flex-col">
      <Header />

      <div className="flex-1 bg-[#F8F9FA]">
        {/* Navigation Breadcrumb */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4">
            <Link
              to="/rooms"
              className="inline-flex items-center text-[10px] text-gray-500 hover:text-[#0021B3] uppercase tracking-widest font-bold transition-colors"
            >
              <ChevronLeft className="w-3 h-3 mr-1" />
              BACK TO ALL ROOMS
            </Link>
          </div>
        </div>

        {/* Room Header Gallery */}
        <Section className="py-12">
          <div className="mb-10 text-center space-y-4">
            <div className="text-[10px] tracking-widest text-gray-600 font-bold uppercase">
              LUXURY ACCOMMODATION
            </div>
            <h1 className="text-4xl md:text-5xl font-marcellus text-primary uppercase tracking-wide">
              {room.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-16">
            <div className="lg:col-span-2">
              <ImagePlaceholder
                className="w-full h-[60vh] min-h-[400px]"
                src={room.leadImage}
                text="MAIN ROOM PHOTO"
              />
            </div>
            <div className="hidden lg:flex flex-col gap-4 h-full">
              <ImagePlaceholder
                className="w-full h-[35vh] min-h-[250px]"
                src={room.otherImages[0]}
                text="BATHROOM"
              />
              <ImagePlaceholder
                className="w-full h-[35vh] min-h-[250px]"
                src={room.otherImages[1]}
                text="VIEW / BALCONY"
              />
            </div>
          </div>

          {/* Room Details Split */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pb-16">
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <section>
                <h3 className="text-[11px] font-bold tracking-widest text-gray-900 uppercase mb-6 flex items-center">
                  <Info className="w-4 h-4 mr-2 text-gray-400" /> OVERVIEW
                </h3>
                <p className="text-gray-500 leading-relaxed max-w-2xl whitespace-pre-line">
                  {(room as any).longDesc || room.desc}
                </p>
              </section>

              <div className="w-full max-w-[100px] h-[1px] bg-gray-200"></div>

              {/* Highlights */}
              <section>
                <h3 className="text-[11px] font-bold tracking-widest text-gray-900 uppercase mb-6 flex items-center">
                  HIGHLIGHTS
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase text-dark font-bold tracking-widest">
                      Occupancy
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {room.guests}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase text-dark font-bold tracking-widest">
                      Bed Type
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {room.bed}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase text-dark font-bold tracking-widest">
                      Room Size
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {room.size}
                    </span>
                  </div>
                </div>
              </section>

              <div className="w-full max-w-[100px] h-[1px] bg-gray-200"></div>

              {/* Amenities */}
              <section>
                <h3 className="text-[11px] font-bold tracking-widest text-gray-900 uppercase mb-6 flex items-center">
                  AMENITIES
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {room.amenities.map((amenity, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <CheckCircle2 className="w-4 h-4 mr-3 text-gray-300" />
                      {amenity}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Booking Sidebar */}
            <div className="lg:col-span-1 border-t lg:border-t-0 pt-10 lg:pt-0">
              <div className="bg-white p-8 border border-gray-100 shadow-sm sticky top-32">
                <div className="mb-8">
                  <div className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-2">
                    STARTING FROM
                  </div>
                  <div className="text-4xl font-marcellus text-gray-900 flex items-end">
                    ${room.price}
                    <span className="text-xs font-manrope font-semibold text-gray-500 mb-1 ml-2">
                      / NIGHT
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link to={`/book?room=${room.id}`} className="block w-full">
                    <Button
                      variant="primary"
                      className="w-full bg-[#2A2E33] hover:bg-black text-white px-6 py-4 text-[11px] font-bold tracking-widest rounded-none border-none shadow-none"
                    >
                      BOOK THIS ROOM
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full bg-white hover:bg-gray-50 text-gray-900 border-gray-200 px-6 py-4 text-[11px] font-bold tracking-widest rounded-none shadow-none"
                  >
                    CONTACT RESERVATIONS
                  </Button>
                </div>

                <div className="mt-6 text-center text-xs text-gray-400">
                  Best price guarantee. No booking fees.
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default SingleRoomPage;

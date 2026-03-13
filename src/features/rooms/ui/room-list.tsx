import { ImagePlaceholder } from "../../shared/ui/image-placeholder";
import { Button } from "../../shared/ui/button";
import { Link } from "react-router-dom";
import { Section } from "../../shared/ui/section";

import { rooms } from "../data/rooms";

const RoomList = () => {
  return (
    <Section className="bg-[#F8F9FA]">
      <div className="space-y-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-8 shadow-sm items-center"
          >
            <div className="w-full md:w-[35%] shrink-0">
              <ImagePlaceholder
                className="w-full h-56 min-h-[220px]"
                src={room.leadImage}
                text={room.title}
              />
            </div>
            <div className="flex-1 flex flex-col md:flex-row justify-between gap-6 h-full">
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-marcellus text-primary uppercase mb-3">
                    {room.title}
                  </h3>
                  <div className="flex gap-4 mb-4 text-[10px] text-dark font-bold tracking-widest uppercase">
                    <span>{room.guests}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full my-auto"></span>
                    <span>{room.bed}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full my-auto"></span>
                    <span>{room.size}</span>
                  </div>
                  <div className="w-full max-w-[200px] h-[1px] bg-gray-200 mb-4"></div>
                  <p className="text-xs text-gray-500 leading-relaxed max-w-md">
                    {room.desc}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end justify-between md:w-32 shrink-0 border-t md:border-t-0 md:border-l border-gray-100 pt-4 md:pt-0 md:pl-6 text-right">
                <div className="font-bold text-sm tracking-wide text-gray-900 uppercase">
                  ${room.price}/NIGHT
                </div>
                <div className="w-full mt-6 md:mt-0 flex flex-col items-start md:items-end justify-end flex-1">
                  <Link
                    to={`/book?room=${room.id}`}
                    className="w-full block mb-3"
                  >
                    <Button
                      variant="primary"
                      className="w-full bg-[#2A2E33] hover:bg-black text-white px-6 py-3 text-[10px] tracking-widest rounded-none border-none shadow-none"
                    >
                      BOOK NOW
                    </Button>
                  </Link>
                  <Link
                    to={`/rooms/${room.id}`}
                    className="text-[10px] text-gray-500 uppercase tracking-widest hover:text-gray-900 cursor-pointer text-center w-full md:text-right"
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default RoomList;

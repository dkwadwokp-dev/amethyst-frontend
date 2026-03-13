import { useQuery } from "@tanstack/react-query";
import { rooms } from "../data/rooms";
import type { Room } from "../interfaces/room.interface";

const fetchRoomsData = async (): Promise<Room[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return rooms;
};

export const useRooms = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: fetchRoomsData,
  });
};

const fetchSingleRoomData = async (roomId: string): Promise<Room> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const room = rooms.find((r) => r.id === roomId);
  if (!room) throw new Error("Room not found");
  return room as Room;
};

export const useRoom = (roomId: string) => {
  return useQuery({
    queryKey: ["rooms", roomId],
    queryFn: () => fetchSingleRoomData(roomId),
    enabled: !!roomId,
  });
};

import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const getRooms = async () => {
  const response = await axios.get(`${baseUrl}/rooms`);
  return response.data;
};

const addBooking = async ({ rm, booking }) => {
  const id = rm.id;
  const newBookings = rm.bookings.append(booking);
  const response = await axios.put(`${baseUrl}/rooms/${id}/booking`, {
    bookings: newBookings,
  });
  return response.data;
};

export { getRooms, addBooking };

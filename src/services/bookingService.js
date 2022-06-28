import axios from "axios";
/* 
bookingRouter.post('/bookings', async (req, res) => {
  const booking = new Booking({
    firstName: "Fakely",
    lastName: "Personson",
    people: 2,
    nights: 2,
    dates: ["2022-05-26T21:00:00.000Z", "2022-05-27T21:00:00.000Z"],
    roomId: "628dea266a640412fa02be1d",
  });
  const result = await booking.save();
  return res.status(201).json(result); 
})
 */
const baseUrl = process.env.REACT_APP_BASE_URL;
const addBooking = async (info) => {
  const response = await axios.post(`${baseUrl}/bookings`, {
    firstName: info.fn,
    lastName: info.ln,
    people: info.people,
    nights: info.nights,
    dates: info.dates,
    roomId: info.roomId,
  });

  return response.data;
};

export { addBooking };

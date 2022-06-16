import axios from "axios";
/* 
bookingRouter.post('/bookings', async (req, res) => {
  const booking = new Booking({
    name: req.body.name,
    people: req.body.people,
    nights: req.body.nights,
    dates: req.body.dates,
    roomId: req.body.roomId,
    status: req.body.status,
  });
  const result = await booking.save();
  return res.status(201).json(result); 
})
 */
const baseUrl = process.env.REACT_APP_BASE_URL;
const addBooking = async (info) => {
  const response = await axios.post(`${baseUrl}/bookings`, {
    name: info.name,
    people: info.people,
    nights: info.nights,
    dates: info.dates,
    roomId: info.roomId,
    status: info.status,
  });
  return response.data;
};

export { addBooking };

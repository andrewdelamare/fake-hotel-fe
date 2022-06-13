import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL;
const getRooms = async () => {
  const response = await axios.get(`${baseUrl}/rooms`);
  return response.data;
};

export { getRooms };

import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const fetchLotPositions = async (lotId: string) => {
  const { data } = await axios.get(`${API_URL}/lots/${lotId}/positions`);
  return data.data;
};

export default fetchLotPositions;

import axios, { AxiosError } from "axios";
import INotice from "../../types/notice";
const API_URL = import.meta.env.VITE_API_URL;

const fetchNotice = async (noticeId: string): Promise<INotice | AxiosError> => {
  try {
    const { data } = await axios.get(`${API_URL}/notices/${noticeId}`);
    return data;
  } catch (err) {
    console.log("err", JSON.stringify(err));
    return err as AxiosError;
    // throw new Error("Fetch notice error " + JSON.stringify(err));
  }
};

export default fetchNotice;

import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
import { ITender } from "../types/tender";

interface ISuccessResponse {
  data: ITender[];
  page: number;
  limit: number;
  total_count: number;
}

interface IErrorResponse {
  data: null;
  error: true;
  statusCode: 200 | 201 | 400 | 403 | 404 | 429 | 500 | 502 | null;
  errorSrc: "CLIENT" | "CLIENT:AXIOS" | "SERVER";
  details: string[];
}
// interface ISuccessResponse {
//   data: ITender[];
//   page: number;
//   limit: number;
//   total_count: 361;
// }

const fetchTender: Promise<ISuccessResponse> = async (tenderId: string) => {
  try {
    const { data } = await axios.get(`${API_URL}/tenders/${tenderId}`);
    return data.data as ISuccessResponse;
    // tender = data.data;
  } catch (e: any) {
    return {
      data: null,
      error: true,
      statusCode: null,
      errorSrc: "CLIENT",
      details: ["da"],
    } as IErrorResponse;
  }
};
export default fetchTender;

import axios, { AxiosError } from "axios";
import INotice from "../../types/notice";
const API_URL = import.meta.env.VITE_API_URL;

const getProcedureProtocol = async (
  protocolId: string
): Promise<INotice | AxiosError> => {
  try {
    const { data } = await axios.get(`${API_URL}/protocols/${protocolId}`);
    return data;
  } catch (err) {
    console.log("err", JSON.stringify(err));
    return err as AxiosError;
    // throw new Error("Fetch notice error " + JSON.stringify(err));
  }
};

export default getProcedureProtocol;

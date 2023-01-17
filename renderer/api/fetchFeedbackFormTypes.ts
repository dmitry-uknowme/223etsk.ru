import axios, { AxiosError } from "axios";

const fetchFeedbackFormTypes = async () => {
  try {
    const { data } = await axios.get(
      "https://lk.novorostorgi.ru/api/feedback/get/types"
    );
    const userRoles = data.data.organization_type;
    return {
      user_roles: Object.keys(userRoles).map((role) => ({
        name: userRoles[role],
        value: role,
      })),
      request_types: data.data.request_type,
    };
  } catch (err: Error | AxiosError) {}
  //   axios.get("https://com.etpp.ru/api/feedback/get/types").then((response) => {
  //     console.log("resss", response.data.data);
  //     return response.data;
  //     // return {
  //     //   user_roles: response.data.data.organization_type,
  //     //   request_types: response.data.data.request_type,
  //     // };
  //   });
};

export default fetchFeedbackFormTypes;

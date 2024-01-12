import { $axios } from "./axios/axios";

export const getPropertyApi = async (values) => {
  return await $axios.post("properties/getPropertyDetail", values);
};

export const addPropertyApi = async (values) => {
  return await $axios.post("/properties/addProperties", values);
};

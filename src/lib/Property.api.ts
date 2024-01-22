import { number } from "yup";
import { $axios } from "./axios/axios";

export const getPropertyApi = async (values: any) => {
  return await $axios.post("properties/getPropertyDetail", values);
};

export const addPropertyApi = async (values: any) => {
  return await $axios.post("/properties/addProperties", values);
};

export const sellerPropertyApi = async () => {
  return await $axios.get("/properties/getSellerProperties");
};

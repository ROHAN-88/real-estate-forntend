import { $axios } from "./axios/axios";

export const loginApi = async (values: any) => {
  return await $axios.post("/users/login", values);
};
export const signUpApi = async (values: any) => {
  return await $axios.post("/users/registerUser", values);
};

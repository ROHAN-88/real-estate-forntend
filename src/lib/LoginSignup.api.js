import { $axios } from "./axios/axios";

export const loginApi = async (values) => {
  return await $axios.post("/users/login", values);
};
export const signUpApi = async (values) => {
  return await $axios.post("/users/registerUser", values);
};

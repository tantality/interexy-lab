import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
  timeout: 3000,
});

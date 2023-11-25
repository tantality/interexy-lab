import axios, { AxiosInstance } from "axios";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_RICK_AND_MORTY_API_URL,
  timeout: 3000,
});

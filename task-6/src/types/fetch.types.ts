import { AxiosError } from "axios";

export interface FetchData {
  isLoading: boolean;
  error: null | AxiosError | Error;
}

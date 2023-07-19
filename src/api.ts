import axios, { AxiosResponse } from "axios";
import { IProduct, User } from "./types";

export const api = {
  login: (name: string): Promise<AxiosResponse<User>> => {
    return axios.post(process.env.REACT_APP_API_URL + "/login/", {
      name: name,
    });
  },
  getProducts: (): Promise<AxiosResponse<IProduct[][]>> => {
    return axios.get(process.env.REACT_APP_API_URL + "/products/");
  },
  orderProduct: (
    userId: string,
    slotId: string
  ): Promise<AxiosResponse<User>> => {
    return axios.post(process.env.REACT_APP_API_URL + "/order/", {
      user_id: userId,
      slot_id: slotId,
    });
  },
  addCredit: (userId: string, credit: number): Promise<AxiosResponse<User>> => {
    return axios.post(process.env.REACT_APP_API_URL + "/balance/", {
      user_id: userId,
      type_operation: "add",
      amount: credit,
    });
  },
  refund: (userId: string): Promise<AxiosResponse<User>> => {
    return axios.post(process.env.REACT_APP_API_URL + "/balance/", {
      user_id: userId,
      type_operation: "refund",
    });
  },
};

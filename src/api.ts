import axios from "axios";
import { IProduct, User } from "./types";

export const api = {
  login: (name: string): Promise<User> => {
    // return axios.post(process.env.REACT_APP_API_URL + "/login")
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ id: "my-id", name: "sr.X", balance: 0.0 });
      }, 300); // milliseconds
    });
  },
  getProducts: (): Promise<IProduct[][]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          [
            {
              id: "573a7c3a-ef24-44ed-a550-757572971089",
              name: "Protein",
              description: "Protein is usefull for bodybuilding",
              price: "45.00",
              quantity: 4,
              slot_id: "d0a6746b-a343-48cc-ab94-b33962995994",
            },
            {
              id: "05cb1da7-209a-429a-951f-4a00bec4c839",
              name: "Casein",
              description: "Casein is usefull for bodybuilding",
              price: "25.00",
              quantity: 2,
              slot_id: "511ecae9-d435-47c6-8ed6-de944bbe1ac2",
            },
            {
              id: "3e35460b-fed2-4dd8-a226-7af8cf2c2f3f",
              name: "Protein bar",
              description: "Chocolat",
              price: "4.00",
              quantity: 5,
              slot_id: "91630223-1fea-4f5b-baf5-85f7e44928ad",
            },
          ],
          [
            {
              id: "3e35460b-fed2-4dd8-a226-7af8cf2c2f3f",
              name: "Protein bar",
              description: "Chocolat",
              price: "4.00",
              quantity: 0,
              slot_id: "1366a21f-6852-46fa-adb8-8d0aea9f99b3",
            },
            {
              id: "7c21b51d-edcc-43c8-8655-da90d041ba4b",
              name: "Creatine",
              description: "Pure",
              price: "50.00",
              quantity: 5,
              slot_id: "9f91d9b9-3f77-4d45-b1f4-718f54368c1d",
            },
          ],
        ]);
      }, 300); // milliseconds
    });
    // return axios.get(process.env.REACT_APP_API_URL + "/products" )
  },
  orderProduct: (userId: string, slotId: string): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ balance: 1.5, id: "aaa", name: "Perro.Sanchez" });
      }, 300); // milliseconds
    });
  },
  addCredit: (credit: number): Promise<User> => {
    // return axios.post()
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          balance: Math.random() * 10,
          id: "aaaa",
          name: "Perro.Sanchez",
        });
      }, 300); // milliseconds
    });
  },
  refund: (): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ balance: 0.0, id: "aaaa", name: "Perro.Sanchez" });
      }, 300); // milliseconds
    });
  },
};

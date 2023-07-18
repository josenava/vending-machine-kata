export interface User {
  id: string;
  name: string;
  balance: number;
}

export interface IProduct {
  id: string;
  slot_id: string;
  quantity: number;
  name: string;
  description?: string;
  price: string;
}

import { IProduct } from "@/types/product.types";

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export interface IParams {
  limit?: number;
  skip?: number;
  select?: string;
}

export interface IUserResponse {
}

import { IUser } from "@/types/user.types";

export interface IUserState {
  userList: IUser[];
}

export default (): IUserState => ({
  userList: [] as IUser[],
});

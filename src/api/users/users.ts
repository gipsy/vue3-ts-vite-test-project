import { IUser } from "@/types/user.types";
import { $axios } from "@/plugins/axios";

export const fetchUsers = () => {
  return $axios.get<unknown, object>(`/users`)
}

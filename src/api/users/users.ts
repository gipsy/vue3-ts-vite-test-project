import { $axios } from "@/plugins/axios";

export const fetchUsers = () => {
  return $axios.get<unknown, { users: [] }>(`/users`)
}

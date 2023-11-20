import {
  UseQueryOptions,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "vue-query";

import { fetchUsers } from "./users";
import { IUser }     from "@/types/user.types";

export const useGetUsers = () => {
  return useQuery(
    [ "users" ],
    () => fetchUsers(),
    {}
  );
};

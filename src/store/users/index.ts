import { defineStore }              from "pinia";
import initialState, { IUserState } from "./state";
import { fetchUsers }               from "@api/users/users";
import { IUser }       from "@/types/user.types";

export const useStoreUsers = defineStore("users", () => {
  const state = reactive(initialState())
  
  const actions = {
    async fetchUsers() {
      try {
        const { users } = await fetchUsers();
        if (users) {
          state.userList = users;
          return Promise.resolve(users);
        }
      } catch(error) {
        return Promise.reject(error);
      }
    }
  }
  
  return {
    state,
    ...actions
  }
})

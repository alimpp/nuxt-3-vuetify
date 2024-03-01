import { defineStore } from "pinia";
import { authenticationUserApi } from "../../api/auth/index";

export const useAuth = defineStore("auth", {
  state: () => ({}),

  actions: {
    async authenticationUser(param: object) {
      const response = await authenticationUserApi(param);
      console.log(response);
    },
  },
});

import { defineStore } from "pinia";
import { LoginApi } from "../../api/auth/index";

export const useAuth = defineStore("auth", {
  state: () => ({}),

  actions: {
    async handleLogin(param: object) {
      const response = await $fetch("/api/auth/login", {
        method: "POST",
        body: param,
      });
      //const response = await LoginApi(param);
      console.log(response);
    },
  },
});

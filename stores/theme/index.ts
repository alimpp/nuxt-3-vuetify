import { defineStore } from "pinia";

export const useTheme = defineStore("theme", {
  state: () => ({ theme: "light" }),

  actions: {
    changeThemeStatus() {
      switch (this.theme) {
        case "dark":
          this.theme = "light";
          break;
        case "light":
          this.theme = "dark";
          break;
      }
    },
  },
});

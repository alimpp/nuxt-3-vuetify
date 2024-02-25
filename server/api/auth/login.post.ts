import { ApplicationPath } from "@/services/applicationPath";
import { Error, Success } from "@/utils/toasMessage";
import { useRouter } from "vue-router";

const Router = useRouter();

export default defineEventHandler(async (event: any) => {
  const body: any = readBody(event);
  try {
    const response = await $fetch(`https://alaatv.com/api/v2/login`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    Success("bottom-right", "Login succesful...");
    return response;
  } catch (error) {
    Error("bottom-right", "Request field...");
    return error;
  }
});

export const LoginApi = async (obj: object) => {
  try {
    const response = await $fetch(`https://alaatv.com/api/v2/login`, {
      method: "POST",
      body: obj,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response ;
  } catch (error) {
    return error;
  }
};

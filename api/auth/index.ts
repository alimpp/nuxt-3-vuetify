export const LoginApi = async (param: object) => {
  try {
    const response = await $fetch(`https://alaatv.com/api/v2/login`, {
      method: "POST",
      body: param,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response ;
  } catch (error) {
    return error;
  }
};

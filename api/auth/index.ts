export const authenticationUserApi = async (param: object) => {
  const response = await $fetch(`https:/alaatv.com/api/v2/login`, {
    method: "POST",
    body: param,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
  return response;
};

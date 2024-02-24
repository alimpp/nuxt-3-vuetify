export const validEmail = (email: string) => {
  const reg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

export const validMobileNumber = (phoneNumber: any) => {
  const reg = /^(\d+-?)+\d+$/;
  return reg.test(phoneNumber);
};

export const validNumber = (param: any) => {
  const reg = /^[0-9]+$/;
  return reg.test(param);
};

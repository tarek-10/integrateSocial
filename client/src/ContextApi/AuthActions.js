export const loginStart = (userCredential) => {
  return {
    type: "LOGIN_START",
  };
};
export const loginSuccess = (user) => {
  return {
    type: "LOGIN_SUCCESS",
    pauload: user,
  };
};
export const loginFailure = (error) => {
  return {
    type: "LOGIN_FAILURE",
    payload: error,
  };
};

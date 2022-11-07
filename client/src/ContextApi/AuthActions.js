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
export const follow = (userId) => {
  return {
    type: "FOLLOW",
    payload: userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: "UNFOLLOW",
    payload: userId,
  };
};

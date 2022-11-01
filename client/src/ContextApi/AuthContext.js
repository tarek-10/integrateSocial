import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

export const INTIAL_STATE = {
  user: {
    _id: "6338d8b1d7458849df4b7ae8",
    username: "shady",
    email: "tarek.mohamed105900@gmail.com",
    password: "$2b$10$KudWbyKUwpxXBusMFp3jaeDpUmnVmqWhNyAXofxnlht1qGTKgb8Fa",

    profilePicture: [
      "http://localhost:5000/uploads/1664669873167-260824461_B'15.jpg",
    ],
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM4ZDhiMWQ3NDU4ODQ5ZGY0YjdhZTgiLCJlbWFpbCI6InRhcmVrLm1vaGFtZWQxMDU5MDBAZ21haWwuY29tIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjcyNjczODd9.pgsMgCFWU7VaaFcF1P58YgBGRarzPGCHWL-4oaYwOio",

    coverPicture: [
      "http://localhost:5000/uploads/1664746830540-883077718_33.jpg",
    ],

    followers: [""],

    following: ["6338d878d7458849df4b7ae3"],

    isAdmin: false,
    isActive: true,
    isVerify: true,
    role: "user",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INTIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INTIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import React, { useContext } from "react";
import { Route, Routes , Navigate} from "react-router-dom";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthContext } from "./ContextApi/AuthContext";
const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/login" element={user?<Navigate to={"/"}/>:<Login />} />
        <Route path="/register" element={user?<Navigate to={"/login"}/>:<Register />} />
        <Route path="/" element={user?<Home />:<Register/>} />
      </Routes>
    </>
  );
};

export default App;

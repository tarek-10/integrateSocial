import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

// install bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
//end
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./ContextApi/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

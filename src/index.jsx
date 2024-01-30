import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
ReactDOM.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="561298489781-lh2b20c0r2t8pih24ksdnc66v6j55837.apps.googleusercontent.com"> <App /></GoogleOAuthProvider>;
   
    
  </React.StrictMode>,
  document.getElementById("root"),
);

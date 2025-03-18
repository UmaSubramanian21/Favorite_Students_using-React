import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <div 
  className=" h-screen 
  bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400
  bg-cover">
    <App />
  </div>
)
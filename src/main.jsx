import React from "react";
import ReactDOM from "react-dom"; // Corrected import statement
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";

import MenuPage from "./pages/MenuPage.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import "./style.scss";

import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route index element={<App />} />
      <Route path="menu" element={<MenuPage />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

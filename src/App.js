import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Header";
import "./Styles/Header.css";
import "./Styles/Footer.css";
import Footer from "./Component/Footer";
import "bootstrap/dist/js/bootstrap.bundle";
import { Division } from "./Component/Calculator";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Navbar from "./Component/Navbar";
import ReactForm from "./Page/ReactForm";
import Profile from "./Page/Profile";

console.log(Division);
console.log(typeof Division);

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<ReactForm />} />
          <Route path="/user" element={<ReactForm />} />
          <Route path="/user/:id" element={<Profile />} />

          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
// import About from "./Pages/About";
 import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        {
          <Route path="/signup" element={<Login />} />
          /* <Route path="/about" element={<About />} /> */
        }
      </Routes>
    </div>
  );
}

export default App;

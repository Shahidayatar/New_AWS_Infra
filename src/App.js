<<<<<<< HEAD
import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
// import About from "./Pages/About";
// import Login from "./Pages/Login";
=======
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout_button/Layout';

import About from './Pages/About';
import Login from './Pages/Login';



>>>>>>> 6f1115bb0bdeff4919be2532be207ba57512a579


function App() {
  return (
    <div>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Header />} />
        {/* <Route path="/signup" element={<Login />} />
        <Route path="/about" element={<About />} /> */}
=======
        <Route path="/" element={<Layout></Layout>} />
        <Route path="/signup" element={<Login></Login>} />
        <Route path="/about" element={<About></About>} />
>>>>>>> 6f1115bb0bdeff4919be2532be207ba57512a579
      </Routes>
    </div>
  );
}

export default App;

import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Login from "./Login"
import NavBar from "./NavBar"

//---------> the 2 below points must be remembered <-----------
//  1.) react-router-dom version 6 no longer supports the use of components directly. Use an element to specify the component you route.

//  2.) Route has to be a child of Routes
//<--------------------------------------------------------->

// *****{<Route path="users/*">}****

//<---------------------
// in the newer version of react-router-dom, we need to nest the Route inside the Routes. Also, component and exact have been removed in newer version.----------------------------->

function App() {
  return (
    <BrowserRouter>

      <NavBar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
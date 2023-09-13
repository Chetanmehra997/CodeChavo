import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Deshboard from "./components/Deshboard";
import Nav from "./components/Nav";

function Routees() {
  return (
    <>
      <BrowserRouter>

        <Routes>
         
          <Route path='/' element={<Nav><Deshboard /></Nav>}></Route>
         
        </Routes>
      </BrowserRouter>

    </>
  )
}
export default Routees;
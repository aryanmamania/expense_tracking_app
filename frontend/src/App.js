import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login'; 
import SignUp from './components/signUp'; 
import './App.css';


function App() {
  return (
     <BrowserRouter>
     
     <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="login" element={<Login />} />

          </Routes>
     
     </BrowserRouter>
  
  );
}

export default App;

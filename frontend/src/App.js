import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login'; 
import SignUp from './components/signUp'; 
import OTP from './components/otp';
import './App.css';
import { MainLayout } from './styles/MainLayout';


function App() {
  return (
    <MainLayout>


<BrowserRouter>
     
     <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="login" element={<Login />} />
              <Route path="otp" element={<OTP />} />
          </Routes>
     
     </BrowserRouter>
    </MainLayout>
    
  
  );
}

export default App;

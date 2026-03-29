import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import LoginPage from "@/pages/LoginPage.tsx";
import HomePage from "@/pages/HomePage.tsx";
import AccountPage from "@/pages/AccountPage.tsx";

import Navbar from "@/components/Navbar";
import PrivateRoute from "@/components/PrivateRoute.tsx";
import {AuthProvider} from "@/lib/auth-util.tsx";
import { ImageContext } from "./ImageContext";
import DefaultImg from  './assets/default_image.svg';
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState(DefaultImg);
    const [loading, setLoading] = useState(false);

  return (
    
    <ImageContext.Provider value={{imageUrl, setImageUrl, loading , setLoading}}>
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<PrivateRoute loginUrl={"/login"}/>} >
            <Route path="/account" element={<AccountPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
    </ImageContext.Provider>
  )
}

export default App

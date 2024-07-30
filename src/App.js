import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import { useState } from "react";

function App() {

  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn}  setIsLoggedIn={setIsLoggedIn} />
      
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>


    </div>
  )
}

export default App;

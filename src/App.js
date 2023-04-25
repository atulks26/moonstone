import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route }
from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Location from "./Location";
import Guides from "./Guides";
import Form from "./form";
import { useStateValue } from  "./StateProvider";


function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={[<Home />]} />
          <Route path="/login" element={[<Login />]} />
          <Route path="/register" element={[<Register />]} />
          <Route path="/guides" element={[<Guides/>]}/>
          <Route path="/regform" element={[<Form/>]}/>
          <Route path="/location" element={[<Location />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
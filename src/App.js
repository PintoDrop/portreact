import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutme from "./Pages/Aboutme";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Resume from "./Pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>

    <Router>
      <Header />
      <Nav />
      <Routes>
        {/* Page will need to be replaced by what I want to be rendered (example: contact, aboutme, etc) */}
        <Route path="/" element={<Aboutme />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />
    </Router>
    
    </div>
  );
}

export default App;

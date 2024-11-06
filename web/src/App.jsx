import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import './App.css'; // Ensure to import your CSS file for styling
import Home from './home.jsx'; // Assuming home is a component
import Contact from './Contact.jsx';
import About from './about.jsx';
import Education from './Educations.jsx';
import Projects from './Projects.jsx';
import Gpa from './Gpa.jsx';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gpa" element={<Gpa />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

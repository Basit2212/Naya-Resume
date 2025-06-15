import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer'
import Contact from './Pages/Contact';
import About from './Pages/About';
import ResumePage from './Pages/ResumePage';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header/>

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>}  />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/resume" element={<ResumePage/>}/>
  
        </Routes>
      </main>
<Footer/>
      
    </div>
  );
}

export default App;

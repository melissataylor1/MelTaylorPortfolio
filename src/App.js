import React, { useState } from 'react';
import Navbar from "./components/Nav";
import Home from "./components/pages/Home";
import Works from "./components/pages/Works";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
   if (currentPage === 'Works') {
      return <Works />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };
  
  

  return (
    <>
    <div>
      {}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {}
      {renderPage()}
    </div>

    
    <footer>
    <Footer/>
    </footer>
    </>
  );
}


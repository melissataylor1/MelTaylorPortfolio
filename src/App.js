import React, { useState } from 'react';
import Navbar from "./components/Nav";
import Home from "./components/Home";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './styles.css'

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


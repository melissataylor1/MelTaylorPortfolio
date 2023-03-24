import React, { useState } from 'react';
import Navbar from "./components/Nav";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import './styles.css'


export default function App() {
  const [currentPage, setCurrentPage] = useState('About');

  const handlePageChange = (page) => setCurrentPage(page);

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
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
    <div className="App h-screen mx-auto my-0 bg-main-bg md:flex flex-row justify-between text-main-text font-main">
    <div>
      {}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {}
      {renderPage()}
    </div>

    
    <footer>
    <Footer/>
    </footer>
    </div>
  );
}


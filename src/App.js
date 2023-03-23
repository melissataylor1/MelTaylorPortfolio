import React, { useState } from 'react';
import Navbar from "./components/Nav";
import Home from "./components/pages/Home";
import Works from "./components/pages/Works";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const [currentPage, setCurrentPage] = useState('Home');
  const handlePageChange = (page) => setCurrentPage(page);
 const renderNavChoice = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
   if (currentPage === 'Portfolio') {
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
    <main>
      <Navbar currentPage={ currentPage } handlePageChange={ handlePageChange } />
      { renderNavChoice() }
      <Footer />
    </main>
  );

}

export default App;
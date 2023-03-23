import React, { useState } from 'react';
import Navbar from "./components/Nav";
import Home from "./components/pages/Home";
import Works from "./components/pages/Works";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const hanglePageChange = (event) => setCurrentPage(event.target.id);

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    else if (currentPage === 'Portfolio') {
      return <Works />;
    }
    else if (currentPage === 'Resume') {
      return <Resume />;
    }
    else {
      return <Contact />;
    }
  };


  return (
    <main>
      <Navbar currentPage={ currentPage } hanglePageChange={ hanglePageChange } />
      { renderPage() }
    </main>
  );
}



import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="row w-100 navbar navbar-dark bg-dark m-0">

      <div className="col-5 text-light ms-5">
        <h1>MElissa Talor</h1>
      </div>

      <div className="col-5">

        <ul className="navbar-nav d-flex flex-row justify-content-end me-5">

          <li className='nav-item mx-2'>
            <a 
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={ currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            >
                About Me
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a 
              href="#works"
              onClick={() => handlePageChange('Works')}
              className={ currentPage === 'Works' ? 'nav-link active' : 'nav-link'}
            >
                Works
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a 
              href="#resume"
              onClick={() => handlePageChange('Resume')}
              className={ currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </a>
          </li>
          <li className='nav-item mx-2'>
            <a 
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={ currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
}
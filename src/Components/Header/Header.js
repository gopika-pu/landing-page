import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3">
      <div className="container">
        <div className="row align-items-center w-100">
          
        
          <div className="col-6 col-lg-3">
            <a className="navbar-brand fw-bold m-0 logo-text" href="/">
              LOGO
            </a>
          </div>

        
          <div className="col-6 d-lg-none text-end">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

  
          <div className="col-12 col-lg-9">
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav align-items-center">
                
               
                <li className="nav-item px-3 position-relative">
                  <a className="nav-link fw-bold nav-link-home" href="/">Home</a>
                </li>

                <li className="nav-item px-3">
                  <a className="nav-link text-dark fw-medium" href="/about">About us</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-dark fw-medium" href="/services">Services</a>
                </li>
                <li className="nav-item px-3">
                  <a className="nav-link text-dark fw-medium" href="/blog">Blog</a>
                </li>

           
                <li className="nav-item ms-lg-3">
                  <a className="btn text-white px-4 py-2 btn-contact" href="/contact">
                    Contact us
                  </a>
                </li>

              </ul>
            </div>
          </div>

        </div> 
      </div> 
    </nav>
  );
};

export default Header;
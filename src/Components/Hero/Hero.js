import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          
        
          <div className="col-12 col-lg-6 py-5 pt-0 title-container">
            <h1 className="hero-title">
              Experienced <span className="text-highlight">mobile and web</span> applications and website builders measuring.
            </h1>
            <p className="hero-subtitle my-4">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web 
              applications and website builders measuring dozens of completed projects. 
              We build and develop mobile applications for several top platforms, 
              including Android & iOS.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary-custom me-3 btn-no-hover1">Contact us</button>
              <button className="btn btn-outline-custom btn-no-hover2">View more</button>
            </div>
          </div>

     
          <div className="col-12 col-lg-6 text-center position-relative img-block">
         
            <img 
              src="\Hero-image.png" 
              alt="Hero Illustration" 
              className="img-fluid hero-image" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
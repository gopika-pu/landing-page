import React from 'react';
import './Services.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Services = () => {
  return (
    <div className="container-main py-5">
      <div className="row g-4 justify-content-center">
        
     
        <div className="col-12 col-sm-6 col-md-3">
          <div className="d-flex align-items-center service-card-container">
            <div className="icon-box purple-bg d-flex align-items-center justify-content-center">
             
               <i className="bi bi-display text-purple"></i>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">Web Application</h6>
              <p className="text-muted mb-0 small">Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>

        
        <div className="col-12 col-sm-6 col-md-3">
          <div className="d-flex align-items-center service-card-container">
            <div className="icon-box green-bg d-flex align-items-center justify-content-center">
               <i className="bi bi-tag text-green"></i>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">SEO</h6>
              <p className="text-muted mb-0 small">Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>

     
        <div className="col-12 col-sm-6 col-md-3">
          <div className="d-flex align-items-center service-card-container">
            <div className="icon-box blue-bg d-flex align-items-center justify-content-center">
               <i className="bi bi-unity text-blue"></i>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">AR/VR Solutions</h6>
              <p className="text-muted mb-0 small">Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>

     
        <div className="col-12 col-sm-6 col-md-3">
          <div className="d-flex align-items-center service-card-container">
            <div className="icon-box orange-bg d-flex align-items-center justify-content-center">
               <i className="bi bi-phone text-orange"></i>
            </div>
            <div className="ms-3">
              <h6 className="fw-bold mb-0">Mobile Applications</h6>
              <p className="text-muted mb-0 small">Lorem Ipsum is simply</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
import React from 'react';
import './Feature.css';

const FeatureSection = () => {
  return (
    <section className="feature-section py-5">
      <div className="container">
        <div className="row align-items-center my-4">
          
      
          <div className="col-lg-6 text-center text-lg-start">
           
            <div className="d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div className="badge-icon1 d-flex align-items-center justify-content-center">
                <i className="bi bi-emoji-smile"></i>
              </div>
              <div className="ms-3 text-start">
                <h6 className="fw-bold mb-0 small">Lorem Ipsum is simply dummy text</h6>
                <p className="text-muted mb-0 smaller">Lorem Ipsum is simply dummy text</p>
              </div>
            </div>

            <h2 className="feature-title fw-bold mb-4">
              <span className="text-blue">Lorem Ipsum</span> is simply dummy <br />
              text of the printing.
            </h2>

            <p className="feature-desc text-muted">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web 
              applications and website builders measuring dozens of completed projects. 
              We build and develop mobile applications for several top platforms, 
              including Android & iOS.
            </p>
          </div>

     
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="image-wrapper">
              <img 
                src="\featured-img1.png"
                alt="App Interface Mockup" 
                className="img-fluid mockup-img" 
              />
            </div>
          </div>

        </div>

        <div className="row align-items-center my-5">


            <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <div className="image-wrapper">
              <img 
                src="\featured-img2.png"
                alt="App Interface Mockup" 
                className="img-fluid mockup-img" 
              />
            </div>
          </div>
          
      
          <div className="col-lg-6 text-center text-lg-start">
           
            <div className="d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div className="badge-icon2 d-flex align-items-center justify-content-center">
                <i className="bi bi-emoji-smile"></i>
              </div>
              <div className="ms-3 text-start">
                <h6 className="fw-bold mb-0 small">Lorem Ipsum is simply dummy text</h6>
                <p className="text-muted mb-0 smaller">Lorem Ipsum is simply dummy text</p>
              </div>
            </div>

            <h2 className="feature-title fw-bold mb-4">
              <span className="text-blue">Lorem Ipsum</span> is simply dummy <br />
              text of the printing.
            </h2>

            <p className="feature-desc text-muted">
              KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web 
              applications and website builders measuring dozens of completed projects. 
              We build and develop mobile applications for several top platforms, 
              including Android & iOS.
            </p>
          </div>

     
          

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
import React from 'react';
import './Intro.css';

const SectionIntro = () => {
  return (
    <section className="section-intro py-5">
      <div className="container text-center  py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="intro-title fw-bold">
              Lorem Ipsum is simply dummy text of the printing.
            </h2>
            <p className="intro-subtitle mt-3 text-muted">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionIntro;
import React from 'react'
import aboutImg from '../assets/img/about-img.png'

export const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-info">
              <h1 className="about-title">About Me</h1>
              <p className="about-desc">
                I am a Full Stack Developer with a passion for learning and problem solving.
                I am a graduate of the University of Texas at Austin Coding Bootcamp.
                I am a hard worker and a team player. I am looking for a position where I can
                continue to learn and grow as a developer.
              </p>
              <div className="about-contact">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <strong>Name:</strong>
                    <p className="about-contact-desc">Brishna Bakshev</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <strong>Email:</strong>
                    <p className="about-contact-desc">
                      <a href="mailto:b.bakshev@gmail.com">
                        <span className="__cf_email__" data-cfemail="d7beb9b1b8d7b8b4b9b1bcb4b1f7bab6b4">
                          [email&#160;protected]
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <strong>Phone:</strong>
                    <p className="about-contact-desc">512-739-1234</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <strong>Location:</strong>
                    <p className="about-contact-desc">Austin, TX</p>
                  </div>
                </div>
              </div>
              <div className="about-btn">
                <a href="https://drive.google.com/file/d/1Z3Q4Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z/view?usp=sharing" className="default-btn">
                  <i className="fa fa-download"></i>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

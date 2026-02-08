import React from 'react'
import Devv from "../assets/Devv.png"


const Hero = () => {
  return (
    <div>
  {/* HERO SECTION */}
      <section className="container min-vh-100 d-flex align-items-center pt-3">
        <div className="row w-100">
          <div className="col-lg-6">
            <p className="text-primary mb-0 fw-bold">Hi, I'm Moses</p>
            <h1 className="hero-title-top mb-0">Web Developer</h1>
            <h1 className="hero-title-bottom text-secondary">& UI Designer</h1>
            
            <p className="col-lg-10 text-white mt-1 mb-3 lead">
              I craft accessible, pixel-perfect, secure, and performant web experiences. 
              Specialized in the React ecosystem and modern backend architectures.
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-work rounded-1">View Work →</button>
              <button className="btn btn-contact rounded-1">Contact Me</button>
            </div>
          </div>

          <div className="col-lg-6 d-flex align-items-center justify-content-end">
            <img src={Devv} alt="Developer" className="hero-image" />
          </div>
        </div>
      </section>




    </div>
  )
}

export default Hero
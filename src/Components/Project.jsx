import React from 'react'

const Project = () => {
  return (
    <div>
 {/* PROJECTS SECTION */}
      <section className="container py-5" id="projects">
        <h2 className="display-5 fw-bold mb-5 mt-5">Featured Projects</h2>
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-7">
            <div className="custom-card p-0 overflow-hidden" style={{height: '350px', backgroundColor: '#1a1a1a'}}>
               <div className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary">
                  Project Preview 1
               </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h3 className="fw-bold h2">E-Commerce Dashboard</h3>
            <p className="text-secondary my-4">
              A comprehensive analytics dashboard for online retailers featuring real-time data visualization.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-primary px-3 py-2">React</span>
              <span className="badge bg-primary px-3 py-2">D3.js</span>
            </div>
          </div>
        </div>
      </section>



    </div>
  )
}

export default Project
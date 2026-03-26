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
                <a href="https://dar-elmer-s-store.vercel.app/">  Dar Elmer's Store </a>
                  
               </div>
            </div>
          </div>
        
          <div className="col-lg-5 ps-lg-5">
            <h3 className="fw-bold h2"> <a href="https://dar-elmer-s-store.vercel.app/">Dar Elmer's Store </a>
              <p>(E-Commerce Dashboard)</p></h3>
            <p className="text-secondary my-4">
              A comprehensive analytics dashboard for online sales of mobile phones featuring real-time data visualization.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-primary px-3 py-2">HTML</span>
              <span className="badge bg-primary px-3 py-2">CSS</span>
              <span className="badge bg-primary px-3 py-2">Javascript</span>
            </div>
          </div>



        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-7">
            <div className="custom-card p-0 overflow-hidden" style={{height: '350px', backgroundColor: '#1a1a1a'}}>
               <div className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary">
                <a href="https://todo-list-phi-pied-41.vercel.app/">  Todo List </a>
               </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h3 className="fw-bold h2"><a href="https://todo-list-phi-pied-41.vercel.app/">To-do List Web App</a></h3>
            <p className="text-secondary my-4">
               Digital productivity tools designed to organize, prioritize, and track daily tasks and long-term goals to enhance efficiency and reduce mental load.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-primary px-3 py-2">HMTL</span>
              <span className="badge bg-primary px-3 py-2">cSS</span>
              <span className="badge bg-primary px-3 py-2">Javascript</span>
            </div>
          </div>
        </div>   

       <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-7">
            <div className="custom-card p-0 overflow-hidden" style={{height: '350px', backgroundColor: '#1a1a1a'}}>
               <div className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary">
                  <a href="https://todo-list-zg5q.vercel.app/">Currency Converter</a>
               </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h3 className="fw-bold h2">
              <a href="https://todo-list-zg5q.vercel.app/">Currency Converter</a></h3>
            <p className="text-secondary my-4">
               software tool, website, or application designed to instantly convert the value of one currency into another based on current, real-time, or historical exchange rates.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-primary px-3 py-2">HTML</span>
              <span className="badge bg-primary px-3 py-2">CSS</span>
              <span className="badge bg-primary px-3 py-2">Javascript</span>
              <span className="badge bg-primary px-3 py-2">React</span>
            </div>
            </div>
          </div>

 <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-7">
            <div className="custom-card p-0 overflow-hidden" style={{height: '350px', backgroundColor: '#1a1a1a'}}>
               <div className="w-100 h-100 d-flex align-items-center justify-content-center text-secondary">
                  <a href="">Management System</a>
               </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h3 className="fw-bold h2">Management System</h3>
            <p className="text-secondary my-4">
          a structured framework of policies, processes, and procedures used by organizations to plan, execute, and control business activities, ensuring objectives like quality, safety, or efficiency are met
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-primary px-3 py-2">React</span>
              <span className="badge bg-primary px-3 py-2">D3.js</span>
            </div>
          </div>
</div>














        </div>
      </section>



    </div>
  )
}

export default Project
import React from 'react'

const Skill = () => {
  return (
    <div>
{/* SKILLS SECTION */}
      <section className="container py-5" id="skills">
        <h2 className="display-5 fw-bold mb-5 mt-5">My Arsenal</h2>
        <div className="row g-4">
          {['Frontend', 'Backend', 'DevOps', 'Tools'].map((category) => (
            <div className="col-md-6 col-lg-3" key={category}>
              <div className="custom-card h-100">
                <h5 className="text-primary mb-4 fw-bold">{category}</h5>
                <div className="d-flex flex-wrap gap-2">
                  <span className="skill-badge">React</span>
                  <span className="skill-badge">TypeScript</span>
                  <span className="skill-badge">Node.js</span>
                  <span className="skill-badge">Git</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  )
}

export default Skill
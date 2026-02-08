import React from 'react';

const MyArsenal = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "PostgreSQL", "Python", "GraphQL", "Redis"]
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS", "CI/CD", "Git", "Nginx", "Linux"]
    },
    {
      category: "Tools",
      skills: ["Figma", "VS Code", "Postman", "Jest", "Webpack", "Vite"]
    }
  ];

  return (
    <section className="arsenal-section" id="skills">
      <div className="container">
        {/* Header Section */}
        <div className="mb-5">
          <div className="d-flex align-items-center gap-3">
            <span className="section-number">02.</span>
            <h2 className="section-title mb-0 text-white">My Arsenal</h2>
          </div>
          <div className="title-underline"></div>
        </div>

        {/* Skills Grid */}
        <div className="row g-4">
          {skillsData.map((item, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="skill-category-card">
                <span className="category-label">{item.category}</span>
                <div className="d-flex flex-wrap gap-3">
                  {item.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="arsenal-badge">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyArsenal;
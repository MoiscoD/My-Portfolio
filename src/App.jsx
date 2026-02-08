import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Hero from './Components/Hero';


function App() {
  return (
    <div className="">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg fixed-top pt-1">
        <div className="container justify-content-center">
          <ul className="navbar-nav gap-5 ms-auto">
            <li className="nav-item">
              <a className="fs-5 nav-link" href="#about">
                About
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="fs-5 nav-link" href="#skills">
                Skills
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20.59 13.41A7.5 7.5 0 0 0 10.59 3.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.83 14.83a4 4 0 1 1-5.66-5.66" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="fs-5 nav-link" href="#projects">
                Projects
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 7v13a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3H3v4h18V3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </li>
            <li className="nav-item">
              <a className="fs-5 nav-link" href="#contact">
                Contact
                <svg className="nav-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 12v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 6L12 13 2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

    

<Hero/>


      
      

     
      
      <footer className="text-center py-5 text-secondary small opacity-50">
        © 2026 Designed & Built by Me.
      </footer>
    </div>
  );
}

export default App;
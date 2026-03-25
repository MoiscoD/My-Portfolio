import React from "react";

const Contact = () => {
  return (
    <div>
      {/* CONTACT SECTION */}
      <section className="container py-5" id="contact">
        <div className="text-center mb-5">
          <p className="text-primary fw-bold mb-1">What's Next?</p>
          <h2 className="display-4 fw-bold">Get In Touch</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="d-flex flex-column gap-3">
              <input
                type="text"
                className="form-control bg-transparent text-white border-secondary p-3"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control bg-transparent text-white border-secondary p-3"
                placeholder="Email"
              />
              <textarea
                className="form-control bg-transparent text-white border-secondary p-3"
                rows="5"
                placeholder="Message"
              ></textarea>
              <button className="btn btn-work py-3 mt-2">Send Message</button>
            </form>

            {/* Contact details + social links placed under the form */}
            <div className="contact-details text-center mt-4">
              <div className="contact-address mb-3 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="me-2"
                  aria-hidden="true"
                >
                  <path
                    d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>1, Abiodun sobajo agidingbi, Lagos, Nigeria</span>
              </div>
              <br />

              <div className="contact-meta mb-3 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="me-2"
                  aria-hidden="true"
                >
                  <path
                    d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.63-3.07 19 19 0 0 1-6-6A19 19 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75 12 12 0 0 0 .7 2.81 1 1 0 0 1-.24 1L7.91 8.91a13 13 0 0 0 6 6l1.34-1.27a1 1 0 0 1 1 .12 12 12 0 0 0 2.8.7 1 1 0 0 1 .75 1V22z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>+234 903 402 0905</span>
              </div>

              <div className="social-links d-flex justify-content-center gap-3">
                <a
                  href="#"
                  className="social-icon text-secondary"
                  aria-label="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.19-3.37-1.19-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.6.07-.6 1.01.07 1.55 1.04 1.55 1.04.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.02-2.68-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.8c.85.004 1.71.115 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.41.1 2.66.64.7 1.02 1.59 1.02 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10.02 10.02 0 0 0 22 12c0-5.52-4.48-10-10-10z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="social-icon text-secondary"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-14h4v2.5a4 4 0 0 1 4-2.5zM2 9h4v12H2zM4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  className="social-icon text-secondary"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43 1s-1.77 1.05-2.4 1.29A4.48 4.48 0 0 0 12 5.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <a
                  href="mailto:youremail@example.com"
                  className="social-icon text-secondary"
                  aria-label="Email"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 4h16v16H4z"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

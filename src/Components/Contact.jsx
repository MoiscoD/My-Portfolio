import React from 'react'

const Contact = () => {
  return (
    <div>{/* CONTACT SECTION */}
      <section className="container py-5" id="contact">
        <div className="text-center mb-5">
          <p className="text-primary fw-bold mb-1">04. What's Next?</p>
          <h2 className="display-4 fw-bold">Get In Touch</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <form className="d-flex flex-column gap-3">
              <input type="text" className="form-control bg-transparent text-white border-secondary p-3" placeholder="Name" />
              <input type="email" className="form-control bg-transparent text-white border-secondary p-3" placeholder="Email" />
              <textarea className="form-control bg-transparent text-white border-secondary p-3" rows="5" placeholder="Message"></textarea>
              <button className="btn btn-work py-3 mt-2">Send Message</button>
            </form>
          </div>
        </div>
      </section>
</div>
  )
}

export default Contact
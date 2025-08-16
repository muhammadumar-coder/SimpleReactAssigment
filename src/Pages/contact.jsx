import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import "./contact.css";
export default function Contact(){
    return (
        <>
        
         <NavBar names="Contact Page"/>  

         <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Contact Us</h2>
        <p className="text-center lead">
          Got questions, feedback, or collaboration ideas?  
          We’d love to hear from you! Fill out the form below and we’ll get back to you soon.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-md-8">
            <form className="p-4 shadow-sm rounded bg-light">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Type your message"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>

         <Footer/>
       
        </>
    )
}
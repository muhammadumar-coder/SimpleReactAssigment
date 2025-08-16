import NavBar from "../components/NavBar"
import Footer from "../components/footer"
import "./About.css";



export default function About(){
    return(
        <>
        <NavBar names="About Page"/>

        <section className="about-section py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">About Us</h2>
        <p className="lead text-center">
          Welcome to <span className="fw-bold text-primary">CodeCraft</span> — your hub for learning,
          building, and mastering programming skills. We believe coding is not just about writing
          syntax, it’s about solving problems and bringing ideas to life.
        </p>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">💡 What We Offer</h5>
                <ul>
                  <li>Beginner-friendly tutorials for HTML, CSS, JavaScript, Python, and more</li>
                  <li>Hands-on projects to turn theory into practice</li>
                  <li>Tips, tricks, and best practices from industry professionals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">🚀 Our Mission</h5>
                <p>
                  To empower learners and developers to create real-world solutions with clean,
                  efficient, and scalable code.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title fw-bold">🤝 Join Our Community</h5>
                <p>
                  Whether you’re a student starting your first “Hello World” or a professional
                  aiming to sharpen your skills, <span className="fw-bold text-primary">CodeCraft</span> is here to
                  guide you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        <Footer/>
        </>
    )
}
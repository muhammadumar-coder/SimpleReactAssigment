
import "./footer.css"
export default  function Footer (){
    return (
        <>
<footer class="footer">
      <div class="footer-container">
        <div class="footer-main">
          <div class="footer-about">
            <a href="#" class="footer-logo">Code<span>Master</span></a>
            <p>Empowering the next generation of developers through practical, project-based learning.</p>
           
          </div>
          <div class="footer-links">
            <h3>Courses</h3>
            <ul>
              <li><a href="#">Web Development</a></li>
              <li><a href="#">Python Programming</a></li>
              <li><a href="#">Mobile Apps</a></li>
              <li><a href="#">Data Science</a></li>
              <li><a href="#">Game Development</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Tutorials</a></li>
              <li><a href="#">Cheatsheets</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Career Guide</a></li>
            </ul>
          </div>
          <div class="footer-links">
            <h3>Company</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Instructors</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to get updates on new courses and special offers.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Your email address"/>
              <button type="submit"><i class="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 CodeMaster. All rights reserved.</p>
          <div class="footer-legal">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>       
        </>
    )
}
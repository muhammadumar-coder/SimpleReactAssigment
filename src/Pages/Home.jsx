import NabBar from "../components/NavBar";
import  Footer from  "../components/footer";
import "./Home.css"
import Carousal from  "../components/Carousal"
export default function HomePage(){
    return (
        <>
           <NabBar names="Home Page"/>
            <section className="home-section text-white text-center d-flex align-items-center">
      <div className="container">
        <h1 className="fw-bold display-4 text-black">Welcome to CodeCraft</h1>
        
      </div>
    </section>
           <Carousal/>

           <Footer/>
        </>
    )
  }
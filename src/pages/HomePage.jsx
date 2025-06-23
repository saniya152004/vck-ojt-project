import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import "../styles/Pages.css"



const HomePage= () => {

    return(
        <div >
            <Header/>
            <div className="main">
                <div className="main1">

            
            
            
                    <img src="http://www.vivekanandcollege.ac.in/images/header-new.png"  className="image"/> 
                        <section className="content">
                
                            <h1 style ={{fontSize:'60px'}}>Welcome to vivekanand  college! </h1>
                            <p >Your journey to exellence starts here.</p>
                            <Link to="/admission"><button>Apply Now!</button></Link>
                        </section> <br />
            
            
            
                    <p><strong>Vivekanand College</strong> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>

                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>

                    <h2>Why Choose Vivekanand College?</h2> 
                     
                    <ul>
                        <li><strong>Legacy of Excellence:</strong>Decades of commitment to quality education.</li>
                        <li><strong>Experienced Faculty:</strong> Learn from renowned experts and passionate educators.</li>
                        <li><strong>Modern Facilities:</strong>Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><strong>Holistic Development:</strong>Focus on co-curricular activities, sports, and community service.</li>
                        <li><strong>Strong Placements:</strong> career opportunities with leading companies.</li>
                    </ul>

                    <h2>Campus Life & Facilities</h2>
                    <div id="img1">
                    <img   src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg"  className="im1"/>
                    <img   src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" className="im2"/>
                    </div>
                    <p>Explore our vibrant campus and state-of-the-art facilities designed to enchance your learning experience and personal growth.</p>

                    <p><center>Ready to explore our courses?</center></p><br />
                    <center><a href="/courses" id="a1">Explore Courses</a></center>
                </div>

            </div>  

        </div>
    )
}
export default HomePage;
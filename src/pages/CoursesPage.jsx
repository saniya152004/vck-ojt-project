import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

const CoursesPage = () => {
    return(
        <div>
            <Header/>
            <div className="main">
                <div className="main1">
                    <h1 style={{color:'blue'}}><center>Our Academic Programs</center></h1> <br />

                    <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>

                    <h2>Discover Campus Life</h2>
                    <div className="v1">
                        <video  id="video"controls>
                            <source src="/videos/vck.mp4" />

                        </video>
                        <p className="vck"><i>Get a glimpse of the vibrant academic and social life at Vivekanand College</i></p>

                    </div>
                    
                       
                    


                    <h2>Undergraduate Programs (UG)</h2>
                    
                    <ul id="demo1">
                        <li><strong><b>Bachelor of Science (B.Sc.) </b></strong></li>
                        <ul id="a5">
                            <li>Computer Science (3 years)</li>
                            <li>Information Technology (3 years)</li>
                            <li>Biotechnology (3 years)</li>
                        </ul> 
                    </ul>
                    <ul id="demo2">
                        <li><strong>Bachelor of Commerce (B.Com)</strong></li>
                        <ul id="a6">
                            <li>Accounting & Finance (3 years)</li>
                            <li>Banking & Insurance (3 years)</li>
                        </ul>
                    </ul>
                    <ul id="demo3">
                        <li><strong>Bachelor of Arts (B.A.)</strong></li>
                        <ul id="a3">
                            <li>English Literature (3 years)</li>
                            <li>Psychology (3 years)</li>
                        </ul>
                    </ul>

                    <h2>Postgraduate Praograms (PG)</h2>
                    
                    <ul id="demo4">
                        <li> <strong> Master of Science (M.Sc.)</strong></li>

                        <ul id="a4">
                            <li>Computer Science (2 years)</li>
                            <li> Information Techonology (2 years)</li>
                        </ul>
                    </ul>
                    <ul id="demo5">
                        <li><strong> Master of Commerce (M.Com)</strong> (2 years)</li>
                    </ul>
                    <ul id="demo6">

                        <li><strong> Master of Arts (M.A)</strong> (2 years)</li>
                    </ul>

                    <h2>Pogram Details & Fee Structure (Annual)</h2>

                    <table>
                        <tr>
                            <th>Program Type</th>
                            <th>Course Name</th>
                            <th>Duration</th>
                            <th>Annual Fee (INR)</th>
                            <th>Eligibility</th>
                        </tr>

                        <tr>
                            <td>UG</td>
                            <td>B.Sc.ComputerScience</td>
                            <td>3 Years</td>
                            <td>₹ 85,000</td>
                            <td>10+2 with PCM (50%)</td>
                        </tr>

                        <tr>
                            <td>UG</td>
                            <td> B.Com. Accounting & Finance</td>
                            <td>3 Years</td>
                            <td>₹  70,000</td>
                            <td>10+2 Commerce (45%)</td>
                        </tr>

                        <tr>
                            <td>PG</td>
                            <td>M.Sc. Information Technology</td>
                            <td>2 Years</td>
                            <td>₹ 95,000</td>
                            <td>B.Sc. IT/CS (50%)</td>
                         </tr>
                    </table>

                    <h2>Specialized & Vocational Courses</h2>
                    

                    <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>

                    <p><center>Have question about a specific course?</center></p> <br />


                    <center> <Link to="/contact" ><button id="c2">Inquires About Courses</button></Link></center>
                      
                </div> 
            </div>       
        </div>
    )
}
export default CoursesPage;
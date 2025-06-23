import Header from "../components/Header/Header";

const ContactPage = () => {
    return(
        <div>
            <Header/>
            <div className="main">
                <div className="main1">
                    <h1 style={{color:'blue'}}><center>Contact Us </center></h1> <br />
            <       p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

                    <h2>General Enquires</h2>
            <       hr></hr>
                    <p> [Your College Full Address Here, e.g., Mahatma Gandhi Road, Chembur, Mumbai, Maharashtra 400071]
                    India <br></br>
                    Phone: <strong>+91 12345 67890</strong><br></br>
                    Email: <strong>info@vivekanandcollege.edu</strong><br></br>
                    Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST<br></br>
                    </p>

                    <h2>Admissions Office</h2>
                    <hr></hr>
                    <p>For current student support,academic advising, or general assistance:
                    Phone: +91 8765432109<br></br>
                    Email:<br></br>
                    studentsupport@vivekanandcollege.edu<br></br> 

                    </p>
            <       h2>Find Us on the Map</h2>
                    <hr></hr>
                    <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>

                    <a href="https://www.google.com/maps/@16.695243,74.1947017,12z?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D "> View on Googele Maps</a>

                    <h2>Send Us a Message</h2>

                    <p> [A contact form with for Name,Email,Subject,Message can be added here.]</p>

                 </div>
            </div>

            


            
        </div>
    )
}
export default ContactPage;
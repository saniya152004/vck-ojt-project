import Header from "../components/Header/Header"

const AdmissionPage = () => {
    return(
        <div>
         <Header/>
            <div className="main">
                <div className="main1">
                    <h1 style={{color:'blue'}}><center>Admissions at Vivekanand College</center></h1> <br />

                    <p>Welcome to the Admissions page of Vivekanand College! We are delighted you're considering joining our vibrant academic community. Our admission process is designed to be straightforward and accessible.</p>

                    <p>Please review the eligibility criteria and key dates below for the upcoming academic year. For any queries, feel free to contact our admissions office.</p>

                    <h2>Eligibility Criteria for Undergraduate Programs</h2>



		

                    <table>
                        <tr>
                            <th>Program</th>
                            <th>Minimum Qualification</th>
                            <th>Required Subjects</th>
                            <th>Minimum Marks (%)</th>
                        </tr>
                        <tr>
                            <td>B.Sc. computer Science</td>
                            <td>10+2 (or equivalent)</td>
                            <td>Physics,Chemistry,Maths</td>
                            <td>50%</td>
                        </tr>
                        <tr>
                            <td>B.Com. Accounting & Finance</td>
                            <td> 10+2 (or equivalent)</td>
                            <td>Commerce Stream</td>
                            <td>45%</td>
                        </tr>
                        <tr>
                            <td>B.A. English Literature</td>
                            <td>10+2 (or equivalent)</td>
                            <td>Any Stream</td>
                            <td>40%</td>
                            </tr>

    
                    </table>

                    <h2>Application Process</h2>

                     <ol id="demo8">
                        <li><strong>Online Application: </strong>Fill out the application form available on our portal.</li>
                        <li><strong>Document Submission:</strong>Upload scanned copies of required documents (mark sheets, ID proof, etc.).</li>
                        <li><strong>Entrance Exam (if appicable):</strong>Appear for the college's entrance examination.</li>
                        <li><strong>Merit List & Interview:</strong>Check the merit list and attend the interview if shortlisted.</li>
                        <li><strong>Fee Payment:</strong>Complete the admission by paying the requried fees.</li>
                    </ol>

                    <p>For detailed information on postgraduate program admissions, specific program syllabi, and fee structures, please visit our Courses page or Contact us directly.</p>
                </div>
            </div>
        </div>
    )
}
export default AdmissionPage;

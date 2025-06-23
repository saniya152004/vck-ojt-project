
import {Link} from 'react-router-dom';
import './Header.css'

const Header = () => {
    return(
        <div>
            <header className="navbar">
                <p className='college'><b>Vivekanand College</b></p>
                
                <nav ClassName='nav-links'>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link> 
                    <Link to="/admission">Apply Now!</Link>



                </nav>
            </header>

        </div>
    )
}
export default Header;
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="gk logo" style={{ height: '65px' }} />
                </Link>

            </div>
            <div className="contact">
                <Link to="/">
                    <i className="fas fa-home icon-link" ></i>
                </Link>

                <Link to="/portfolio">
                    <i className="fas fa-tasks icon-link" ></i>
                </Link>
                <Link to="/contact">
                    <i className="fas fa-phone icon-link"></i>
                </Link>
                <span>+27 84 048 28 61</span>
            </div>
        </div >
    )
}

export default Navbar

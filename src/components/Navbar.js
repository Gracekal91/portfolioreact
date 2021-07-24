import './Navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                GK
            </div>
            <div className="contact">
                <i className="fas fa-home icon-link" ></i>
                <i className="fas fa-tasks icon-link" ></i>
                <i className="fas fa-phone"></i>
                <span>+27 84 048 28 61</span>
            </div>
        </div>
    )
}

export default Navbar

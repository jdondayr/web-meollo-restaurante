import { Link } from "react-router";
import Offcanvas from "./Offcanvas";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                    <Link to={"/"}><img src="src/media/images/logos/logo_meollo_transparente.png" height="60" alt="meollo logo" className="ms-3"/></Link>
                    <Offcanvas descripcionBoton={<i className="fa-solid fa-bars"></i>} />
            </div>
        </nav>
    )
}

export default Navbar;
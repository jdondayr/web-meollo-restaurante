import { Link } from "react-router";
import Offcanvas from "./Offcanvas";
import { LightMode } from "../contexts/LightMode";
import { useContext } from "react";

const Navbar = () => {

    const {lightMode, setLightMode} = useContext(LightMode)

    return (
        <nav className="navbar d-flex" style={{backgroundColor: lightMode ? "white" : ""}}>
            <div className="container-fluid">
                <Link to={"/"}><img src={lightMode ? "/media/images/logos/logo_meollo_negro.png" : "/media/images/logos/logo_meollo_transparente.png"} height="60" alt="meollo logo" className="ms-3" /></Link>
                <div className="d-flex align-items-center">
                    <Offcanvas descripcionBoton={<i style={{color: lightMode ? "white" : ""}} className="fa-solid fa-bars"></i>} />
                    <button onClick={()=>setLightMode(!lightMode)} className="lightModeBtn ms-3" style={lightMode ? {
                        color: "black",
                        backgroundColor: "white"
                    } : {}}><i className="fa-solid fa-sun"></i></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
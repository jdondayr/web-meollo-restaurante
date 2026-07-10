import { Link } from "react-router";
import Offcanvas from "./Offcanvas";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext"

const Navbar = () => {

    const {store, dispatch} = useContext(GlobalContext)

    return (
        <nav className="navbar d-flex" style={{backgroundColor: store.lightMode ? "white" : ""}}>
            <div className="container-fluid">
                <Link to={"/"}><img src={store.lightMode ? "src/media/images/logos/logo_meollo_negro.png" : "src/media/images/logos/logo_meollo_transparente.png"} height="60" alt="meollo logo" className="ms-3" /></Link>
                <div className="d-flex align-items-center">
                    <Offcanvas descripcionBoton={<i style={{color: store.lightMode ? "white" : ""}} className="fa-solid fa-bars"></i>} />
                    <button onClick={()=>dispatch({type: "toggle_light_mode"})} className="lightModeBtn ms-3" style={store.lightMode ? {
                        color: "black",
                        backgroundColor: "white"
                    } : {}}><i className="fa-solid fa-sun"></i></button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
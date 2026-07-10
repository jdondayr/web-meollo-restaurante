import { Link } from "react-router";
import { GlobalContext } from "../contexts/GlobalContext";
import { useContext } from "react";

const Offcanvas = ({descripcionBoton}) => {

    const {store} = useContext(GlobalContext)

    return (
        <>
            <button style={{backgroundColor: store.lightMode ? "black" : ""}} className="btn jbtn rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">{descripcionBoton}</button>

            <div className="offcanvas offcanvas-top myoffcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div className="offcanvas-header">
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex align-items-center justify-content-evenly">

                    <div className="menu">
                        <Link to={"/"}><img src="src/media/images/logos/logo_meollo_transparente.png" height="50" width="110" alt="logo meollo" /></Link>
                    </div>
                    <div className="mas-info menu">
                        <div className="icons">
                            <i className="fa-brands fa-shoelace text-light fs-4"></i>
                            <i className="fa-solid fa-book-open text-light fs-4"></i>
                        </div>
                        <Link className="fs-4 link-menu" to={""}>Más sobre nosotros</Link>
                    </div>
                    <div className="carta menu">
                        <i className="fa-solid fa-utensils text-light fs-4"></i>
                        <Link className="fs-4 link-menu" to={"/nuestracarta"}>Nuestra carta</Link>
                    </div>
                    <div className="location menu">
                        <i className="fa-solid fa-location-dot text-light fs-4"></i>
                        <Link className="fs-4 link-menu" to={"/ubicacion"}>¿Dónde estamos?</Link>
                    </div>
                    <div className="contacto menu">
                        <div className="icons d-flex gap-2">
                            <i className="fa-solid fa-phone text-light fs-4"></i>
                            <i className="fa-solid fa-envelope text-light fs-4"></i>
                        </div>
                        <Link className="fs-4 link-menu" to={"/contacto"}>Contacto y reservas</Link>
                    </div>
                    <div className="trabaja-con-nosotros menu">
                        <Link className="fs-4 link-menu" to={"/work-with-us"}>Trabaja con nosotros</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Offcanvas;
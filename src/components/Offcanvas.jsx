import { Link } from "react-router";

const Offcanvas = ({descripcionBoton}) => {
    return (
        <>
            <button className="btn jbtn rounded-pill" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">{descripcionBoton}</button>

            <div className="offcanvas offcanvas-top bg-dark" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                <div class="offcanvas-header">
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body d-flex align-items-center justify-content-evenly">

                    <div className="mas-info menu">
                        <Link className="fs-4 link-menu" to={""}>Más sobre nosotros</Link>
                    </div>
                    <div className="carta menu">
                        <Link className="fs-4 link-menu" to={"/nuestracarta"}>Nuestra carta</Link>
                    </div>
                    <div className="ubicacion menu">
                        <Link className="fs-4 link-menu" to={"/ubicacion"}>¿Dónde estamos?</Link>
                    </div>
                    <div className="contacto menu">
                        <Link className="fs-4 link-menu" to={""}>Contáctanos</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Offcanvas;
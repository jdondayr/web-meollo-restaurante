import Offcanvas from "./Offcanvas";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Jumbotron = () => {

    const {store} = useContext(GlobalContext);

    return (
        <>
            <div className="jumbotron d-flex flex-column align-items-center gap-3 p-5 text-center">
                <img src="src/media/images/logos/logo_meollo_transparente.png" className="rounded" height="70" alt="el meollo logo" />
                <p className="col-lg-8 mx-auto w-75 fs-5 jumbo-p">
                    Aquí está el meollo de comer bien. <br />
                    Desde 2020, en el corazón de El Puerto de Santa María. <br />
                    Trato cercano, producto fresco local. <br />
                    Volcamos nuestra pasión en cada uno de nuestros platos.
                </p>
                <div className="d-inline-flex gap-2 mb-5">
                    <Offcanvas descripcionBoton="Descúbrenos" />
                </div>
            </div>
        </>
    )
}

export default Jumbotron;
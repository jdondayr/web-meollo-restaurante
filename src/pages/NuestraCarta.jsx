import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

const NuestraCarta = () => {

    const {store, dispatch} = useContext(GlobalContext);

    return (
        <>
            <div className="nuestra-carta">
                {store.platos.map((plato) => {
                    return <div key={plato.id} className="d-flex">
                                <img src={plato.rutaImagen} alt={plato.alt} />
                                <div className="d-flex flex-column align-items-center">
                                    <h2>{plato.nombre}</h2>
                                    <p>{plato.descripcion}</p>
                                </div>
                           </div>
                })}
            </div>
        </>
    )
}

export default NuestraCarta;
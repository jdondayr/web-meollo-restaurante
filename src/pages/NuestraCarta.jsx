
const NuestraCarta = () => {

    const platos = [
        "chicharrones chiclaneros",
        "queso semicurado de cabra payoya",
        "tomatá con burrata ahumada",
        "ensalada de pollo crujiente con vinagreta de miel y mostaza",
        "tomate aliñado, corazón de atún y jengibre encurtido",
        "carpaccio de gambas de Sanlúcar",
        "tartar de atún rojo de almadraba con pane carrasau",
        "alcachofas en tempura con jamón de pato ahumado casero",
        "saam de atún rojo de almadraba picante",
        "aguachile de pescado de roca con maíz tostado y ají amarillo",
        "gyozas caseras",
        "pulpo chimichurri, papas rotas y ajoblanco",
        "corvina salvaje al pilpil de curry thai con menestra",
        "orejas de cerdo a baja temperatura fritas con salsa picantona",
        "presa ibérica y su guarnición",
        "lomo bajo de vaca vieja premium +45 días de maduración",
        "coulant casero de chocolate 75% y helado de pistacho (8-10 min)",
        "torrija cremosa con helado de avellana",
        "tarta de queso payoyo semifluida con helado de yogurt con picotas (13 min)"
    ]

    return (
        <div className="carta d-flex flex-column align-items-center gap-3 pt-5 pb-5">
            <h1>Meollo 2026</h1>
            {platos.map((plato, index) => {
                return <h5 key={index} className="plato">{plato}</h5>
            })}
            <h5 className="plato">PARA CUALQUIER DUDA SOBRE ALÉRGENOS SOLICITE INFORMACIÓN AL PERSONAL</h5>
        </div>
    )
}

export default NuestraCarta;
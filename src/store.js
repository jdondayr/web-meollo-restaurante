export const initialStore = {
    platos: [
        {id: 1, nombre: "Alcachofas fritas con jamón", descripcion: "Alcachofas fritas con jamón y salsa de romescu.", rutaImagen: "src/media/images/platos/alcachofas.jpeg", alt: "alcachofas con jamón"},
        {id: 2, nombre: "Carpaccio de gamba de Sanlúcar", descripcion: "Carpaccio hecho con gamba de Sanlúcar de Barrameda, con una emulsión del jugo de sus cabezas, y alga.", rutaImagen: "src/media/images/platos/carpaccio.jpeg", alt: "carpaccio"},
        {id: 3, nombre: "Pulpo con ajoblanco", descripcion: "Pulpo a la brasa con patata rota y ajoblanco", rutaImagen: "src/media/images/platos/pulpo.jpeg", alt: "pulpo con ajoblanco"},
        {id: 4, nombre: "Bacalao con guisante", descripcion: "Bacalao donostiarra con guisante, en salsa.", rutaImagen: "src/media/images/platos/guisantes.jpeg", alt: "bacalao con guisante"}
    ]
};

export function storeReducer (store, action) {
    switch (action.type) {
        
    }
}
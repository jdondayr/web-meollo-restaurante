

const Ubicacion = () => {
    return (
        <>
            <div className="ubicacion gap-3 py-4 bg-dark d-flex flex-column align-items-center">
                <h4 className="text-light">Nos encontramos en:</h4>
                <h3 className="text-light">C/Placilla nº 2, El Puerto de Santa María, Cádiz</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d769.4928478075633!2d-6.227387230411663!3d36.60008889826908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dcf505f9ce147%3A0x996befc8756243d1!2sMeollo%20Restaurante!5e1!3m2!1ses!2ses!4v1782575419950!5m2!1ses!2ses" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            </div>
        </>
    )
}

export default Ubicacion;
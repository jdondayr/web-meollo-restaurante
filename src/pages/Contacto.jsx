
const Contacto = () => {

    return (
        <div className="contacto">
            <p className="contacto-kicker">Reservas y contacto</p>
            <h1>Reserva tu mesa</h1>
            <p className="contacto-lead">Llámanos, escríbenos o síguenos en redes sociales.</p>

            <div className="contacto-cards">
                <a href="tel:633718318" className="contacto-card">
                    <span className="contacto-icon"><i className="fa-solid fa-phone"></i></span>
                    <h2>633 718 318</h2>
                    <p>Resérvanos por teléfono</p>
                </a>
                <a href="mailto:meollobar@gmail.com" className="contacto-card">
                    <span className="contacto-icon"><i className="fa-solid fa-at"></i></span>
                    <h2>meollobar@gmail.com</h2>
                    <p>Escríbenos para cualquier consulta</p>
                </a>
                <a
                    href="https://www.instagram.com/meollorestaurante/"
                    className="contacto-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="contacto-icon"><i className="fa-brands fa-instagram"></i></span>
                    <h2>@meollorestaurante</h2>
                    <p>Síguenos en Instagram</p>
                </a>
                <a
                    href="https://www.facebook.com/people/Meollo-Bar-Restaurante/100066343366910/?ref=NONE_xav_ig_profile_page_web"
                    className="contacto-card"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="contacto-icon"><i className="fa-brands fa-facebook-f"></i></span>
                    <h2>Meollo Bar Restaurante</h2>
                    <p>Encuéntranos en Facebook</p>
                </a>
            </div>
        </div>
    )
}

export default Contacto;



const Footer = () => {
    return (
        <>
            <div className="footer d-flex align-items-center justify-content-center gap-5">
                <div className="meollo">
                    <h5 className="text-light">Meollo ®</h5>
                    <h5 className="text-light">2026</h5>
                </div>
                <div className="social-networks">
                    <div className="social d-flex gap-2 align-items-center">
                        <i className="fa-brands fa-instagram text-light"></i>
                        <a href="https://www.instagram.com/meollorestaurante/" target="_blank" rel="noopener noreferrer">meollorestaurante</a>
                    </div>
                    <div className="social d-flex gap-2 align-items-center">
                        <i className="fa-brands fa-facebook text-light"></i>
                        <a href="https://www.facebook.com/people/Meollo-Bar-Restaurante/100066343366910/?ref=NONE_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer">Meollo Bar Restaurante</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
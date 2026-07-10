import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Footer = () => {

    const {store} = useContext(GlobalContext);

    return (
        <>
            <div className="footer d-flex align-items-center justify-content-center gap-5" style={{backgroundColor: store.lightMode ? "white" : ""}}>
                <div className="meollo">
                    <h5 style={{color: store.lightMode ? "black" : ""}}>Meollo ®</h5>
                    <h5 style={{color: store.lightMode ? "black" : ""}}>2026</h5>
                </div>
                <div className="social-networks">
                    <div className="social d-flex gap-2 align-items-center">
                        <i style={{color: store.lightMode ? "black" : ""}} className="fa-brands fa-instagram"></i>
                        <a style={{color: store.lightMode ? "black" : ""}} href="https://www.instagram.com/meollorestaurante/" target="_blank" rel="noopener noreferrer">meollorestaurante</a>
                    </div>
                    <div className="social d-flex gap-2 align-items-center">
                        <i style={{color: store.lightMode ? "black" : ""}} className="fa-brands fa-facebook"></i>
                        <a style={{color: store.lightMode ? "black" : ""}} href="https://www.facebook.com/people/Meollo-Bar-Restaurante/100066343366910/?ref=NONE_xav_ig_profile_page_web" target="_blank" rel="noopener noreferrer">Meollo Bar Restaurante</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
import { BrowserRouter, Routes, Route } from "react-router";
import { LightMode } from "./contexts/LightMode";

// Components imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages imports
import Home from "./pages/Home";
import Ubicacion from "./pages/Ubicacion";
import NuestraCarta from "./pages/NuestraCarta";
import Contacto from "./pages/Contacto";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";
import { useState } from "react";

const App = () => {

    const [lightMode, setLightMode] = useState(false)

    return (
        <>
            <LightMode.Provider value={{ lightMode, setLightMode }}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/ubicacion" element={<Ubicacion />} />
                        <Route path="/nuestracarta" element={<NuestraCarta />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/work-with-us" element={<TrabajaConNosotros />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </LightMode.Provider>
        </>
    )
}

export default App;
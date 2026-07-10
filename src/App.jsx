import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalContext } from "./contexts/GlobalContext";
import { useReducer } from "react";
import { initialStore, storeReducer } from "./store";

// Components imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages imports
import Home from "./pages/Home";
import Ubicacion from "./pages/Ubicacion";
import NuestraCarta from "./pages/NuestraCarta";
import Contacto from "./pages/Contacto";
import TrabajaConNosotros from "./pages/TrabajaConNosotros";

const App = () => {

    // Store creation
    const [store, dispatch] = useReducer(storeReducer, initialStore);

    return (
        <>
            <GlobalContext.Provider value={{store, dispatch}}>
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
            </GlobalContext.Provider>
        </>
    )
}

export default App;
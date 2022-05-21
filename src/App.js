import { BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";

export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seats />} />
                
            </Routes>
            
        </BrowserRouter>
    );
}
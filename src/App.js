import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import Menu from "./components/Menu";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";
import Header from "./components/shared/Header";

export default function App(){
    const[order,setOrder]= useState(null);

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/sessoes/:idFilme" element={<Sessions />} />
                <Route path="/assentos/:idSessao" element={<Seats checkOut ={(order)=> setOrder(order)} />} />
                <Route path="/sucesso" element={<Success order={order} setOrder={()=>setOrder(null)}/>} />    
            </Routes>   
        </BrowserRouter>
    );
}
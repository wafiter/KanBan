import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Cadastrar from "./pages/Cadastrar";
import Usuario from "./pages/Usuario";
import LogOut from "./pages/logout";
import BaseLayout from "./componentes/baseLayout";

export default function Router () {
    return(
       <BrowserRouter>
        <Routes>

            <Route path="/" element={<Login/>} />
            <Route path="/cadastrar" element={<Cadastrar/>} />
            
            <Route element={<BaseLayout />}>
                <Route path="/kanban" element={<Usuario/>} />
                <Route path="/logout" element={<LogOut/>}/>          
            </Route>
        </Routes>
       </BrowserRouter>
    )
}
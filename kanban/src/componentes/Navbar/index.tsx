import { Link } from "react-router-dom"
import { DivDoUser, DivLink, Logo, Navbory } from "./style"

export default function NavBar () {
    const nome = localStorage.getItem('nome')

    return (
        <>    
    <Navbory>
        <Logo>Arnia Trello</Logo>
        <DivDoUser>Ola, {nome} <DivLink><Link to="/logout">Sair</Link></DivLink></DivDoUser>
    </Navbory>
    </>

    )}
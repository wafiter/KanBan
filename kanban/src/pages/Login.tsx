import { ChangeEvent, MouseEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../Services/user-services";
import { Button, Campo, CampoName, Formulario, Section, SectionButon, Titulo, } from "./stilos/styleLogin";

type ValuesProps ={
    email: string,
    password: string,
}

export default function Login () {
    const navigate = useNavigate()
    const [values, setValues] = useState<ValuesProps> ({
        email: '',
        password: '',
    })

    const handlerChange = (evente: ChangeEvent<HTMLInputElement>) => {
        const {value, name } = evente.target

        setValues({
            ...values,
            [name] : value           
        })
    }

    const formSubmit = async (event: MouseEvent<HTMLButtonElement> ) =>{
        event.preventDefault()
        try {
           const result = await loginService(values)

           localStorage.setItem( 'token', result.token )
            localStorage.setItem('nome', result.name)

         navigate('/kanban')
          

        } catch (error) {
           window.alert('Não foi possivel encontrar o usuario')
        }

    }


    return(
        <>
            
            <Formulario >
                <Titulo>Arnia Trello</Titulo>
                <Section>
                    <CampoName htmlFor="email">E-mail:</CampoName>
                    <Campo name="email" type="text" placeholder="E-mail" onChange={handlerChange} />
                </Section>
                <Section>
                    <CampoName htmlFor="senha">Senha:</CampoName>
                    <Campo name="password" type="Password" placeholder="Digite sua senha" onChange={handlerChange} />
                </Section>
                <SectionButon>
                <Button type="submit" onClick={formSubmit} >ENTRAR</Button>
                <Link to='/cadastrar'>cadastre-se</Link>
                </SectionButon>
                
            </Formulario>
        </>
    )
} 
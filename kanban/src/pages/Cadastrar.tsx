import { ChangeEvent, useState, MouseEvent } from "react"
import { Button, Campo, CampoName, Formulario, Section, SectionButon, Titulo, Titulo2 } from "./stilos/styleLogin"
import { registerService } from "../Services/user-services"
import { useNavigate } from "react-router-dom"

type ValuesProps = {
    name: string,
    email: string,
    password: string,
    confirma: string,
}


export default function Cadastrar () {
    const navigate = useNavigate()
    let name =''
    let email =''
    let password = ''
    let confirma = ''

    const [values, setValues] = useState<ValuesProps> ({
        name: '',
        email: '',
        password: '',
        confirma: ''

    })

    const handlerChange = (evente: ChangeEvent<HTMLInputElement>) => {
        const {value, name } = evente.target

        setValues({
            ...values,
            [name] : value           
        })
        console.log(values)
    }

    const formSubmit = async (event: MouseEvent<HTMLButtonElement> ) =>{
        event.preventDefault()
                console.log(password, confirma)
           if(password === confirma){
            
                const result = await registerService({name,email,password})
                console.log(result)
                window.alert('Usuario criado com sucesso')                
                navigate('/')
            } else {
                window.alert('Não foi possivel realiza o cadastro tente novamente')
            } 

                       

      
    }

    return(
        <>

            <Formulario>
                <Titulo>Arnia Trello</Titulo>
                <Titulo2>Cadastro</Titulo2>
                <Section>
                    <CampoName htmlFor="nome">Nome Completo</CampoName>
                    <Campo name="name" type="text" placeholder="" onChange={handlerChange}  />
                </Section>
                <Section>
                    <CampoName htmlFor="email">E-mail</CampoName>
                    <Campo name="email" type="text" placeholder="" onChange={handlerChange} />
                </Section>
                <Section>
                    <CampoName htmlFor="senha">Senha</CampoName>
                    <Campo name="password" type="Password" placeholder="" onChange={handlerChange} />
                </Section>
                <Section>
                    <CampoName htmlFor="confirmar">Repita sua senha</CampoName>
                    <Campo name="confirma" type="Password" placeholder="" onChange={handlerChange} />
                </Section>

                <SectionButon>
                <Button type="submit" onClick={formSubmit} >CADASTRAR</Button>
                
                </SectionButon>
                
        </Formulario>
        
        </>
        
    )
} 
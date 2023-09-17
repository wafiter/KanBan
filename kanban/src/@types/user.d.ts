interface LoginParams  {
    email: string,
    password: string
}

interface LoginResponse {
    token: string,
    name: string
}

interface CadastroParams {
        email: string,
        password: string ,
        name: string
    
}

interface CadastroResponse {
    message: string
}
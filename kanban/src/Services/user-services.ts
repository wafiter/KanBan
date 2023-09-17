import { apiServices } from "./api";

export async function  loginService ({email, password}: LoginParams): Promise<LoginResponse> {
    const response = await apiServices.post("/api/user/login", {
        email,
        password
    })
   switch(response.status){
    case 200: return response.data
    case 401: throw new Error ('dados incorretos')
    default: throw new Error('Problemas com os servidores')
   }
}


export async function registerService ({email, password, name}: CadastroParams): Promise<void> {
      
        const response = await apiServices.post("/api/user",  {
            email,
            password,
            name
    }) 
    switch(response.status){
        case 200: return response.data
        case 401: throw new Error('dados Incorretos')
    }

}
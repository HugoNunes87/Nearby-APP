import axios from "axios"

export const api = axios.create({
    //Sempre verificar de o Ip do pc não mudou, caso de algum tipo de erro na API
    baseURL: "http://192.168.1.72:3333",
    timeout: 700,
})
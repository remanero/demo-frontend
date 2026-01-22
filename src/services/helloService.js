import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export function listarHello() {
    return axios.get(`${API_URL}/hello`);
}

export function criarHello(dados) {
    return axios.post(`${API_URL}/hello`, dados)
}
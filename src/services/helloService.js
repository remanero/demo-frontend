import axios from "axios";

const API_URL = "http://localhost:8080";

export function listarHello() {
    return axios.get(`${API_URL}/hello`);
}

export function criarHello(dados) {
    return axios.post(`${API_URL}/hello`, dados)
}
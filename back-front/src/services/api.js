import axios from 'axios';

const api = axios.create({
    baseURL: 'http://168.138.251.14:3001'
});

api.interceptors.request.use((request) => {
    const usuario = localStorage.getItem('usuarioAutenticado');
    if(usuario) {
        const {token} = JSON.parse(usuario);
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        };
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request; 
});

export default api;
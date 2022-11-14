import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});
api.interceptors.request.use(async config => {
    const usuario = localStorage.getItem('usuarioLogado');
    if(usuario) {
        const {token} = usuario;
        if (token) {
        api.defaults.headers.authorization = 'Bearer ${token}';
        };
    };
    return config;
});

export default api;
import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 45CSR48f06BI1zaaoKoHs0ZxDCkSgy-Toy99jNvXNaM'
    }
});
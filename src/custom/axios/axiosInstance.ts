import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: "",
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});
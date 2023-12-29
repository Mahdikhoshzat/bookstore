import axios from 'axios';

const BASE_URL = ""

const AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

export default AxiosInstance
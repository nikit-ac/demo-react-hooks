import axios from 'axios';

let axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL
});

export default axiosInstance;

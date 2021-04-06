import axios from 'axios'

const request = function(config) {
    const instance = axios.create({
        // baseURL: 'http://49.234.62.225:8001/',
        baseURL: 'http://localhost:8000/',
        timeout: 5000
    });

    instance.interceptors.request.use(config => {
        console.log(config);
        return config;
    }, err => {
        console.log(err)
    });
    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    });
    return instance(config)
}

export default request;
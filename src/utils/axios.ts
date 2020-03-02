//引用axios
import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.withCredentials = false;
//设定axios的基本的url请求前缀
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
// axios.defaults.crossDomain = true;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['x-csrf-token'] = '12321321'
        config.headers['Content-Type'] = 'application/json'
        if ((config as any).url.match('upload')) {
            config.headers['Content-Type'] = 'multipart/form-data'
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // 根据返回的code值来做不同的处理
        return response
    },
    error => {
        if (error.response) {
            return Promise.reject(error.response.data)
        }
    });


/**
 * get 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function get(url: string, params = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: url,
            params: params,
        }).then(response => {
            if (response) {
                resolve(response.data);
            } else {
                reject('');
            }
        }, err => {
            reject(err);
        })
    })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url: string, data1 = {}) {
    const data = qs.stringify(data1);
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: url,
            data: data1,
        }).then(response => {
            if (response) {
                resolve(response.data);
            } else {
                reject('');
            }
        }, err => {
            reject(err);
        })
    })
}

export default axios;

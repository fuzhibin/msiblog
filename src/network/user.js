import request from './request'

export function postInfoLogin(username, password) {
    return request({
        method: 'post',
        url: '/login',
        data: {
            username,
            password
        }
    })
}
export function getUserArticles(limit, offset) {
    return request({
        method: 'get',
        url: '/user/list',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        params: {
            limit,
            offset
        }
    })
}
export function getUserInfo() {
    return request({
        method: 'get',
        url: '/user',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
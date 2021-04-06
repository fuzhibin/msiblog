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

export function getUserDetailInfo() {
    return request({
        method: 'get',
        url: '/user/detail',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
export function postUpdataInfo(age, email, name) {
    return request({
        method: 'post',
        url: '/user',
        data: {
            age,
            email,
            name
        }
    })
}
//上传用户头像

export function uploadUserAvatar(formData) {
    return request({
        method: 'post',
        url: '/upload/avatar',
        headers: {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            Authorization: localStorage.getItem('token')
        },
        data: formData
    })
}
//用户注册页面

export function registereUser(username, password) {
    return request({
        method: 'post',
        url: '/user/register',
        data: {
            username,
            password
        }
    })
}
//用户注销
export function logoutUser() {
    return request({
        method: 'delete',
        url: '/user/logout',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}
import request from "./request"

export function backgroundUrl() {
    return request({
        method: 'get',
        url: '/background'
    })
}
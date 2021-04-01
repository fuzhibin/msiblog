import request from "./request"


export function getEssayList(limit, offset) {
    return request({
        method: 'get',
        url: '/article/list',
        params: {
            limit,
            offset
        }
    })
}
export function getEssayDetail(id, flag) {
    return request({
        method: 'get',
        url: `/article/ ${id}/${flag}`
    })
}
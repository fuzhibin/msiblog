import request from './request'

export function getPictureList(limit, offset) {
    ///http://localhost:8000/picture?limit=25&offset=0
    return request({
        method: 'get',
        url: '/picture',
        params: {
            limit,
            offset
        }
    })
}
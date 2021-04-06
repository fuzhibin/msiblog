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

export function postEssayAttachImg(formData) {
    return request({
        method: 'post',
        url: '/upload/attachPic',
        headers: {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            Authorization: localStorage.getItem('token')
        },
        data: formData
    })
}


export function postEssayContent(title, filename, content) {
    return request({
        method: 'post',
        url: '/article/content',
        headers: {
            Authorization: localStorage.getItem('token')
        },
        data: {
            title,
            filename,
            content
        }
    })
}

export function postCoverImg(formData, articleId) {
    return request({
        method: 'post',
        url: '/upload/coverPic/' + articleId,
        headers: {
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
            Authorization: localStorage.getItem('token')
        },
        data: formData
    })
}
/**
 * 标签提交
 */
export function postLabels(labels, articleId) {
    return request({
        method: 'post',
        url: '/label/' + articleId,
        headers: {
            Authorization: localStorage.getItem('token')
        },
        data: {
            labels
        }
    })
}
/**
 * 文章删除功能
 */
export function deleteArticle(articleId) {
    return request({
        method: 'delete',
        url: '/article/' + articleId,
        headers: {
            Authorization: localStorage.getItem('token')
        }
    })
}

// }) const config = {
//     headers: {
//         "Content-Type": "multipart/form-data;boundary=" + new Date().getTime(),
//         Authorization: localStorage.getItem('token')
//     }
// };
// return request.post('/upload/attachPic', formData, config)
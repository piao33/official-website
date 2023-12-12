import requests from '../axios';

function getNewsListApi(data) {
    return requests({
        method: 'post',
        url: '/business/web/getNewsList',
        data
    })
}

function getNewsDetailApi(data) {
    return requests({
        method: 'get',
        url: `/business/web/getBusNewsDetails/${data.id}`,
    })
}

export {
    getNewsListApi,
    getNewsDetailApi,
}
import requests from '../axios';

function partnerListApi() {
    return requests({
        method: 'get',
        url: '/business/web/getBusPartnersList',
    })
}


export {
    partnerListApi
}
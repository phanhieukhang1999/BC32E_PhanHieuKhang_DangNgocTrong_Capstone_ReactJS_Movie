import Axios from "axios"
import { DOMAIN, TOKEN } from '../util/settings/config'

export class baseService {
    //put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'PUT',
            data: model,
            headers: { TokenCybersoft: TOKEN + localStorage.getItem(TOKEN) } //JWT
        })
    }

    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'POST',
            data: model,
            headers: { TokenCybersoft: TOKEN + localStorage.getItem(TOKEN) } //JWT
        })
    }


    get = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'GET',
            headers: { TokenCybersoft: TOKEN + localStorage.getItem(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }

    delete = (url) => {
        return Axios({
            url: `${DOMAIN}${url}`,
            method: 'DELETE',
            headers: { TokenCybersoft: TOKEN + localStorage.getItem(TOKEN) } //token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
} 
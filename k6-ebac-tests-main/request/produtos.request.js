import { check } from 'k6'
import http from 'k6/http'
import Utils from '../utils/utils.js'

export default class Product{
    list(token)
    {
        let response = http.get(`${Utils.getBaseUrl()}products`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        check(response, {'Listagem deve retornar 200': r => r && r.status === 200})

    }
}
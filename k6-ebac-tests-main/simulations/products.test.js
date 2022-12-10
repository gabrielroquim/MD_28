import { group } from 'k6'
import Login from '../request/login.request.js'
import data from '../data/usuarios.json'
import Product from '../request/products.request.js'

export const options = {
    stages: [
        {duration: '10s', target: 20},
        {duration: '5s', target: 80},
        {duration: '20s', target: 20},
        {duration: '10s', target: 15}
    ],
    thresholds: {
        http_req_duration: ['p(99) < 1000']
    }
}

export default function () {

    let login = new Login()
    let product = new Product()

    group('login and get token', () => {
        login.access(data.usuarioValido.user, data.usuarioValido.pass)
    })

    group('list products', () => {
       product.list(login.getToken())
    })    
}
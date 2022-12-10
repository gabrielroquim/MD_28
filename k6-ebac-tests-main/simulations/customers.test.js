import { group } from 'k6'
import Login from '../request/login.request.js'
import data from '../data/usuarios.json'
import Customer from '../request/customers.request.js'

export const options = {
    stages: [
        {duration: '10s', target: 10},
        {duration: '5s', target: 60},
        {duration: '20s', target: 20},
        {duration: '10s', target: 10}
    ],
    thresholds: {
        http_req_duration: ['p(99) < 1000']
    }
}

export default function () {

    let login = new Login()
    let customer = new Customer()

    group('login and get token', () => {
        login.access(data.usuarioValido.user, data.usuarioValido.pass)
    })

    group('list customers', () => {
        customer.list(login.getToken())
    })    
}
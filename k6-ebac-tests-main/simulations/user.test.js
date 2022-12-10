import { group } from 'k6';
import Login from '../request/login.request.js';
import data from '../data/usuarios.json'
import User from '../request/user.request.js';
//import Customer from '../request/customers.request.js';
//import Product from '../request/products.request.js';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '5s', target: 50 },
    { duration: '20s', target: 10 },
    { duration: '10s', target: 0 }
  ],
  thresholds: {
    http_req_duration: ['p(99) < 1000']
  }
}

export default function () {

  let login = new Login()
  let user = new User()
  //let customers = new Customer()
  //let products = new Product

  group('login and get token', () => {
    login.access(data.usuarioOk.user, data.usuarioOk.pass)
  })

  group('list users', () => {
    user.list(login.getToken())
  })



}

import axios from 'axios'


const BASE_URL = 'http://localhost:8000/api'
// const BASE_URL = 'https://ecommerce-kids-clothes.herokuapp.com/api'
// const BASE_URL = '/api'

const user = JSON.parse(localStorage.getItem('persist:root'))?.user
const currentUser = user && JSON.parse(user).currentUser
const TOKEN = currentUser?.accessToken

const admin = JSON.parse(localStorage.getItem('persist:root'))?.admin
const currentAdmin = admin && JSON.parse(admin).currentAdmin
const ADMINTOKEN = currentAdmin?.accessToken

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}`}
})

export const adminRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${ADMINTOKEN}`}
})
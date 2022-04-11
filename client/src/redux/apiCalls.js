import { publicRequest } from '../requestMethods';
import { 
    loginStart, 
    loginSuccess, 
    loginFailure, 
    registerStart, 
    registerSuccess, 
    registerFailure,
} from './userRedux';
import { 
    adminloginStart,
    adminloginSuccess, 
    adminloginFailure,
    adminregisterStart,
    adminregisterSuccess,
    adminregisterFailure 
 } from './adminRedux'
import {
    getProductStart,
    getProductSuccess,
    getProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    addProductStart,
    addProductSuccess,
    addProductFailure
} from './productRedux'


// User
export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', user)
        //const res = await post('/auth/login', user)
        dispatch(loginSuccess(res.data))
        window.location.href = '/'
    } catch(err) {
        dispatch(loginFailure())
    }
}

export const register = async (dispatch, user) => {
    dispatch(registerStart())
    try {
        const res = await publicRequest.post('/auth/register', user)
        dispatch(registerSuccess(res.data))
        window.location.href = '/'
    } catch(err) {
        dispatch(registerFailure())
    }
}


// Admin
export const adminRegister = async (dispatch, user) => {
    dispatch(adminregisterStart())
    try {
        const res = await publicRequest.post('/auth/adminregister', user)
        dispatch(adminregisterSuccess(res.data))
        window.location.href = '/admin'
    } catch(err) {
        dispatch(adminregisterFailure())
    }
}

export const adminLogin = async (dispatch, user) => {
    dispatch(adminloginStart())
    try {
        const res = await publicRequest.post('/auth/adminlogin', user)
        dispatch(adminloginSuccess(res.data))
        window.location.href = '/admin'
    } catch(err) {
        dispatch(adminloginFailure())
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart())
    try {
        const res = await publicRequest.get('/products')
        dispatch(getProductSuccess(res.data))
    } catch(err){
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart())
    try {
        await publicRequest.delete(`/products/${id}`)
        dispatch(deleteProductSuccess(id))
    } catch(err){
        dispatch(deleteProductFailure())
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart())
    try {
        const res = await publicRequest.put(`/products/${id}`, product)
        dispatch(updateProductSuccess(id, res.data))
    } catch(err){
        dispatch(updateProductFailure())
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart())
    try {
        const res = await publicRequest.post('/products', product)
        dispatch(addProductSuccess(res.data))
    } catch(err){
        dispatch(addProductFailure())
    }
}


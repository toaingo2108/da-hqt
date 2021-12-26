import axios from 'axios'
import React, { createContext } from 'react'
import { apiUrl } from './contants'

const DeadlockContext = createContext()

const DeadlockContextProvider = ({ children }) => {
    const xoaTatCaTaiXeKhuVuc = async (MaKVuc) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/conversion-deadlock/xoa-tatca-taixe-cua-khuvuc/${MaKVuc}`
            )
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const xoaTatCaTaiXeKhuVuc_error = async (MaKVuc) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/conversion-deadlock/xoa-tatca-taixe-cua-khuvuc-error/${MaKVuc}`
            )
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const xoaTaiXeKhuVuc = async (data) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/conversion-deadlock/xoa-taixe-khuvuc`,
                { data }
            )

            console.log(response.data)
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const xoaTaiXeKhuVuc_error = async (data) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/conversion-deadlock/xoa-taixe-khuvuc-error`,
                { data }
            )

            console.log(response.data)
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const deadlockContextData = {
        xoaTatCaTaiXeKhuVuc,
        xoaTatCaTaiXeKhuVuc_error,
        xoaTaiXeKhuVuc,
        xoaTaiXeKhuVuc_error,
    }

    return (
        <DeadlockContext.Provider value={deadlockContextData}>
            {children}
        </DeadlockContext.Provider>
    )
}

export { DeadlockContext }
export default DeadlockContextProvider

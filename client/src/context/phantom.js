import axios from 'axios'
import React, { createContext, useReducer, useState } from 'react'
import { phantomReducer } from '../reducer/phantom'
import {
    apiUrl,
    DELETE_TAIXE,
    FIND_TAIXE,
    TAIXE_LOADED_FAIL,
    TAIXE_LOADED_SUCCESS,
} from './contants'

const PhantomContext = createContext()

const PhantomContextProvider = ({ children }) => {
    // State
    const [taiXeState, dispatch] = useReducer(phantomReducer, {
        taiXe: {},
        DSTaiXe: [],
    })

    const [showDelete, setShowDelete] = useState(false)

    const getAllTaiXe = async () => {
        try {
            const response = await axios.get(`${apiUrl}/phantom/tai-xe`)
            if (response.data.success) {
                dispatch({
                    type: TAIXE_LOADED_SUCCESS,
                    payload: response.data.DSTaiXe,
                })
            }
        } catch (error) {
            dispatch({
                type: TAIXE_LOADED_FAIL,
            })
        }
    }

    const findTaiXe = (MaTXe) => {
        const TaiXe = taiXeState.DSTaiXe.find((taixe) => taixe.MaTXe === MaTXe)
        dispatch({ type: FIND_TAIXE, payload: TaiXe })
    }

    const xoaTaiXe = async ({ MaTXe }) => {
        try {
            const response = await axios.delete(
                `${apiUrl}/phantom/xoa-tai-xe/${MaTXe}`
            )
            if (response.data.success) {
                dispatch({
                    type: DELETE_TAIXE,
                    payload: MaTXe,
                })
            }
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const phantomContextData = {
        taiXeState,
        getAllTaiXe,
        findTaiXe,
        xoaTaiXe,
        showDelete,
        setShowDelete,
    }
    return (
        <PhantomContext.Provider value={phantomContextData}>
            {children}
        </PhantomContext.Provider>
    )
}

export { PhantomContext }
export default PhantomContextProvider

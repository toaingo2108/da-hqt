import axios from 'axios'
import React, { createContext, useReducer, useState } from 'react'
import { reducer } from '../reducer'
import {
    apiUrl,
    FIND_HOPDONG,
    HOPDONG_LOADED_SUCCESS,
    UPDATE_HOPDONG,
} from './contants'

const Context = createContext()

const ContextProvider = ({ children }) => {
    //State
    const [hopDongState, dispatch] = useReducer(reducer, {
        hopDong: {},
        DSHopDong: [],
    })

    const [showUpdateModal, setShowUpdateModal] = useState(false)

    const getAllHopDong = async () => {
        try {
            const response = await axios.get(`${apiUrl}/hop-dong`)
            if (response.data.success) {
                dispatch({
                    type: HOPDONG_LOADED_SUCCESS,
                    payload: response.data.DSHopDong,
                })
            }
        } catch (error) {
            console.log(error.message)
            dispatch({ type: HOPDONG_LOADED_SUCCESS })
        }
    }

    const FindHopDong = (MaHDong) => {
        const HopDong = hopDongState.DSHopDong.find(
            (hopDong) => hopDong.MaHDong === MaHDong
        )
        dispatch({ type: FIND_HOPDONG, payload: HopDong })
    }

    const GiaHanHopDong = async (hopDong) => {
        try {
            const response = await axios.put(`${apiUrl}/hop-dong`, hopDong)
            if (response.data.success) {
                dispatch({
                    type: UPDATE_HOPDONG,
                    payload: response.data.hopDong,
                })
            }
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const GiaHanHopDong_error = async (hopDong) => {
        try {
            const response = await axios.put(
                `${apiUrl}/hop-dong-error`,
                hopDong
            )
            if (response.data.success) {
                dispatch({
                    type: UPDATE_HOPDONG,
                    payload: response.data.hopDong,
                })
            }
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const contextData = {
        hopDongState,
        showUpdateModal,
        setShowUpdateModal,
        getAllHopDong,
        FindHopDong,
        GiaHanHopDong,
        GiaHanHopDong_error,
    }

    return <Context.Provider value={contextData}>{children}</Context.Provider>
}

export { Context }
export default ContextProvider

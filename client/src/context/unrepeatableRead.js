import axios from 'axios'
import React, { createContext, useReducer, useState } from 'react'
import { unrepeatableReadReducer } from '../reducer/unrepeatableRead'
import { apiUrl, KHUVUC_LOADED_FAIL, KHUVUC_LOADED_SUCCESS } from './contants'

const UnrepeatableReadContext = createContext()

const UnrepeatableReadContextProvider = ({ children }) => {
    const [khuVucState, dispatch] = useReducer(unrepeatableReadReducer, {
        DSKhuVuc: [],
    })

    const [DSTaiXe, setDSTaiXe] = useState([])

    const [khuVucChoose, setKhuVucChoose] = useState({})

    const [showList, setShowList] = useState(false)

    const [showChange, setShowChange] = useState(false)

    const getAllKhuVuc = async () => {
        try {
            const response = await axios.get(
                `${apiUrl}/unrepeatable-read/khu-vuc`
            )
            if (response.data.success) {
                dispatch({
                    type: KHUVUC_LOADED_SUCCESS,
                    payload: response.data.DSKhuVuc,
                })
            }
        } catch (error) {
            dispatch({
                type: KHUVUC_LOADED_FAIL,
            })
        }
    }

    const getAllTaiXeKhuVuc = async (MaKVuc) => {
        try {
            const response = await axios.get(
                `${apiUrl}/unrepeatable-read/xem-thongtin-chitiet-khuvuc/${MaKVuc}`
            )
            if (response.data.success) {
                setDSTaiXe(response.data.DSTaiXe)
                setKhuVucChoose(response.data.khuVuc)
            }
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const getAllTaiXeKhuVuc_error = async (MaKVuc) => {
        try {
            const response = await axios.get(
                `${apiUrl}/unrepeatable-read/xem-thongtin-chitiet-khuvuc-error/${MaKVuc}`
            )
            if (response.data.success) {
                setDSTaiXe(response.data.DSTaiXe)
                setKhuVucChoose(response.data.khuVuc)
            }
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const changeKhuVucTaiXe = async (data) => {
        try {
            const response = await axios.put(
                `${apiUrl}/unrepeatable-read/thaydoi-khuvuc-taixe`,
                data
            )
            console.log(response.data)
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const unrepeatableReadContextData = {
        khuVucState,
        getAllKhuVuc,
        getAllTaiXeKhuVuc,
        getAllTaiXeKhuVuc_error,
        DSTaiXe,
        showList,
        setShowList,
        showChange,
        setShowChange,
        changeKhuVucTaiXe,
        khuVucChoose,
    }
    return (
        <UnrepeatableReadContext.Provider value={unrepeatableReadContextData}>
            {children}
        </UnrepeatableReadContext.Provider>
    )
}

export { UnrepeatableReadContext }
export default UnrepeatableReadContextProvider

import axios from 'axios'
import React, { createContext, useReducer, useState } from 'react'
import { dirtyReadReducer } from '../reducer/dirtyRead'
import { apiUrl, DOITAC_LOADED_FAIL, DOITAC_LOADED_SUCCESS } from './contants'

const DirtyReadContext = createContext()

const DirtyReadContextProvider = ({ children }) => {
    const [doiTacState, dispatch] = useReducer(dirtyReadReducer, {
        doiTac: {},
        DSDoiTac: [],
    })

    const [DSHangHoa, setDSHangHoa] = useState([])

    const [showDSHangHoa, setShowDSHangHoa] = useState(false)

    const [showAdd, setShowAdd] = useState(false)

    const getAllDoiTac = async () => {
        try {
            const response = await axios.get(`${apiUrl}/dirty-read/doi-tac`)
            if (response.data.success) {
                dispatch({
                    type: DOITAC_LOADED_SUCCESS,
                    payload: response.data.DSDoiTac,
                })
            }
            return response.data
        } catch (error) {
            dispatch({
                type: DOITAC_LOADED_FAIL,
            })
        }
    }

    const getAllHangHoaDoiTac = async (MaDTac) => {
        try {
            const response = await axios.get(
                `${apiUrl}/dirty-read/xem-ds-hanghoa-doitac/${MaDTac}`
            )
            if (response.data.success) {
                setDSHangHoa(response.data.DsHHoa)
            }
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const getAllHangHoaDoiTac_error = async (MaDTac) => {
        try {
            const response = await axios.get(
                `${apiUrl}/dirty-read/xem-ds-hanghoa-doitac-error/${MaDTac}`
            )
            if (response.data.success) {
                setDSHangHoa(response.data.DsHHoa)
            }
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const themHangHoaChiNhanh = async (data) => {
        try {
            const response = await axios.post(
                `${apiUrl}/dirty-read/them-hanghoa-vao-chinhanh`,
                data
            )
            return response.data
        } catch (error) {
            return error.response.data
                ? error.response.data
                : { success: false, message: 'Server error' }
        }
    }

    const dirtyReadContextData = {
        doiTacState,
        getAllDoiTac,
        getAllHangHoaDoiTac,
        getAllHangHoaDoiTac_error,
        DSHangHoa,
        showDSHangHoa,
        setShowDSHangHoa,
        showAdd,
        setShowAdd,
        themHangHoaChiNhanh,
    }

    return (
        <DirtyReadContext.Provider value={dirtyReadContextData}>
            {children}
        </DirtyReadContext.Provider>
    )
}

export { DirtyReadContext }
export default DirtyReadContextProvider

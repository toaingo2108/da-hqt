export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'someDeployURL'

export const HOPDONG_LOADED_SUCCESS = 'HOPDONG_LOADED_SUCCESS'
export const HOPDONG_LOADED_FAIL = 'HOPDONG_LOADED_FAIL'
export const UPDATE_HOPDONG = 'UPDATE_HOPDONG'
export const FIND_HOPDONG = 'FIND_HOPDONG'

export const TAIXE_LOADED_SUCCESS = 'TAIXE_LOADED_SUCCESS'
export const TAIXE_LOADED_FAIL = 'TAIXE_LOADED_FAIL'
export const FIND_TAIXE = 'FIND_TAIXE'
export const DELETE_TAIXE = 'DELETE_TAIXE'

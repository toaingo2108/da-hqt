export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : 'someDeployURL'

export const HOPDONG_LOADED_SUCCESS = 'HOPDONG_LOADED_SUCCESS'
export const HOPDONG_LOADED_FAIL = 'HOPDONG_LOADED_FAIL'
export const UPDATE_HOPDONG = 'UPDATE_HOPDONG'
export const FIND_HOPDONG = 'FIND_HOPDONG'

import { KHUVUC_LOADED_FAIL, KHUVUC_LOADED_SUCCESS } from '../context/contants'

export const unrepeatableReadReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case KHUVUC_LOADED_SUCCESS:
            return {
                ...state,
                DSKhuVuc: payload,
            }
        case KHUVUC_LOADED_FAIL:
            return {
                ...state,
                DSKhuVuc: [],
            }
        default:
            return state
    }
}

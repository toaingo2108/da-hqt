import { DOITAC_LOADED_FAIL, DOITAC_LOADED_SUCCESS } from '../context/contants'

export const dirtyReadReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case DOITAC_LOADED_SUCCESS:
            return {
                ...state,
                DSDoiTac: payload,
            }
        case DOITAC_LOADED_FAIL:
            return {
                ...state,
                DSDoiTac: [],
            }
        default:
            return state
    }
}

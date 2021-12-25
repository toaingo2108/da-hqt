import {
    DELETE_TAIXE,
    FIND_TAIXE,
    TAIXE_LOADED_FAIL,
    TAIXE_LOADED_SUCCESS,
} from '../context/contants'

export const phantomReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case TAIXE_LOADED_SUCCESS:
            return {
                ...state,
                DSTaiXe: payload,
            }
        case TAIXE_LOADED_FAIL:
            return {
                ...state,
                DSTaiXe: [],
            }
        case FIND_TAIXE:
            return {
                ...state,
                taiXe: payload,
            }
        case DELETE_TAIXE:
            return {
                ...state,
                DSTaiXe: state.DSTaiXe.filter(
                    (taixe) => taixe.MaTXe !== payload
                ),
            }
        default:
            return state
    }
}

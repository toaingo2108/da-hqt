import {
    FIND_HOPDONG,
    HOPDONG_LOADED_FAIL,
    HOPDONG_LOADED_SUCCESS,
    UPDATE_HOPDONG,
} from '../context/contants'

export const reducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case HOPDONG_LOADED_SUCCESS:
            return {
                ...state,
                DSHopDong: payload,
            }
        case HOPDONG_LOADED_FAIL:
            return {
                ...state,
                DSHopDong: [],
            }
        case FIND_HOPDONG:
            return {
                ...state,
                hopDong: payload,
            }
        case UPDATE_HOPDONG:
            const newDSHopDong = state.DSHopDong.map((hopDong) =>
                hopDong.MaHDong === payload.MaHDong ? payload : hopDong
            )
            return {
                ...state,
                DSHopDong: newDSHopDong,
            }
        default:
            return state
    }
}

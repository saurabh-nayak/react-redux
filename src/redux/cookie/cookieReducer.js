import { BUY_COOKIE, SELL_COOKIE } from "./cookieTypes"

const initialState = {
    count: 20
}
const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COOKIE:
            return {
                ...state,
                count: state.count + 1
            }
        case SELL_COOKIE:
            return {
                ...state,
                count: state.count - 1
            }
        default:return state
    }

}
export default cookieReducer
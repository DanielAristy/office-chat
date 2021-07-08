import { SEND_MESSAGE } from '../actions/messages'

export default function messages(state = {}, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                ...action.message
            }
        default:
            return state;
    }
}

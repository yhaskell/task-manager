import { FETCH_USERS } from './action-types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return Object.assign({}, state, action.response)
        default: return state
    }
}
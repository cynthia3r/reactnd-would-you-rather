import { RECEIVE_USERS } from '../actions/users';

// The uses slice of the state in the store has been
// initialized to an empty object {}
export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            };
        default:
            return state;
    }
}

import { SET_AUTH_USER } from '../actions/authUser';

// First time when authUser will be invoked default state will be null
export default function authUser(state = null, action) {
    switch(action.type) {
        case SET_AUTH_USER :
            return action.id;
        default:
            return state;
    }
}
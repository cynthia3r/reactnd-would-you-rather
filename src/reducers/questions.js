import { RECEIVE_QUESTIONS } from '../actions/questions';

// The questions slice of the state in the store has been 
// initialized to an empty object {}
export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions,
            };
        default:
            return state;
    }
}
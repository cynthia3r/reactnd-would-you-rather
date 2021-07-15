import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';
import { ADD_QUESTION_ANSWER } from '../actions/answers';

// The uses slice of the state in the store has been
// initialized to an empty object {}
export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users,
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(
                        [action.question.id]),
                }
            };
        case ADD_QUESTION_ANSWER :
            const { authUser, questionId, answer } = action.answerDetails;
            
            return {
                ...state,
                [authUser]: {
                    ...state[authUser],
                    answers: {
                        ...state[authUser].answers,
                        [questionId]: answer,
                    }
                },
            };
        default:
            return state;
    }
}

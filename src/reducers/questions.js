import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions';
import { ADD_QUESTION_ANSWER } from '../actions/answers';

// The questions slice of the state in the store has been 
// initialized to an empty object {}
export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions,
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question,
            };
        case ADD_QUESTION_ANSWER :
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat([action.authUser])
                    }
                },
            };
        default:
            return state;
    }
}
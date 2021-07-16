import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer} from '../utils/api'

export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function addQuestionAnswer({ authUser, questionId, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        authUser,
        questionId,
        answer,
    };
}

export function handleAddQuestionAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(showLoading());

        return saveQuestionAnswer({ 
            authedUser:authUser,
            qid:questionId,
            answer,
        })
            .then(() => dispatch(addQuestionAnswer({authUser, questionId, answer})))
            .then(() => dispatch(hideLoading()));
    };
}

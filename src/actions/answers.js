import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestionAnswer} from '../utils/api'

export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function addQuestionAnswer({ authUser, questionId, answer }) {
    return {
        type: ADD_QUESTION_ANSWER,
        answerDetails: {
            authUser,
            questionId,
            answer,
        }
    };
}

export function handleAddQuestionAnswer(questionAnswer) {
    return (dispatch) => {
        dispatch(showLoading());

        return saveQuestionAnswer(questionAnswer)
            .then(() => dispatch(addQuestionAnswer(questionAnswer)))
            .then(() => dispatch(hideLoading()));
    };
}

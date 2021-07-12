import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { saveQuestion } from '../utils/api'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authUser } = getState();

        dispatch(showLoading());

        return saveQuestion({
            optionOneText,
            optionTwoText,
            author: authUser
        })
            .then((question) => dispatch(addQuestion(question)))
            .then(dispatch(hideLoading()));
    };
}
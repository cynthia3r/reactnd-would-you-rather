import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';

//Functional component
const QuestionList = props => {
    const { questionIds, emptyListText } = props;
    return(
        <Fragment>
            { questionIds.length ? (
                questionIds.map((questionId) => 
                    <QuestionCard key={questionId} id={questionId} />)) : 
                    (<p>{emptyListText}</p>)
            }
        </Fragment>
    );
}

QuestionList.propTypes = {
    questionIds: PropTypes.array.isRequired,
    emptyListText: PropTypes.string.isRequired,
};

export default QuestionList;
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SubmitVote from './SubmitVote';
import ViewPollResult from './ViewPollResult';

class ViewQuestion extends Component {
    render() {
        const { userAnswers, match } = this.props;
        const questionId = match.params.id;
        const answered = userAnswers.hasOwnProperty(questionId) ? true : false;

        return (
            <Fragment>
                { answered ? 
                    <ViewPollResult key={questionId} questionId={questionId} /> : 
                    <SubmitVote key={questionId} questionId={questionId} /> }
            </Fragment>
        );
    }
}

function mapStateToProps({ authUser, users, questions }) {
    const userAnswers = users[authUser].answers;

    return {
        userAnswers,
    };
}

export default connect(mapStateToProps)(ViewQuestion);
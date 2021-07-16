import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import PageNotFound from './PageNotFound';
import { handleAddQuestionAnswer } from '../actions/answers'
import { formatDate } from '../utils/helpers';


class SubmitVote extends Component {
    handleVote = (id, answer) => {
    
        const { dispatch } = this.props;

        if(answer !== '') {
            dispatch(handleAddQuestionAnswer(id, answer));
        }
    }

    render() {
        const { question, user } = this.props;
        if(question === null)
            return <PageNotFound />

        const { id, timestamp, optionOne, optionTwo } = question;
        const { name, avatarURL } = user;

        return (
            <Card>
                <Card.Header>
                    <span>
                        <img 
                            src={avatarURL}
                            alt={`$avatarURL`}
                            className='avatar'
                        />
                    </span>
                    {name} asked @ {formatDate(timestamp)}
                </Card.Header>
                <Card.Body>
                    <Card.Text><b>Would you rather?</b></Card.Text>
                    <Card.Text>Option 1: {optionOne.text}</Card.Text>
                    <button className="btn" onClick={() => this.handleVote(id, 'optionOne')}>
                        Choose Option 1
                    </button>
                    <Card.Text><b>or</b></Card.Text>
                    <Card.Text>Option 2: {optionTwo.text}</Card.Text>
                    <button className="btn" onClick={() => this.handleVote(id, 'optionTwo')}>
                    Choose Option 2
                    </button>
                </Card.Body>
            </Card>
        );
    }
}

function mapStateToProps({ users, questions }, {questionId}) {
    const question = questions[questionId];

    return {
        question: question ? question : null,
        user: question ? users[question.author] : null,
    };
}

export default connect(mapStateToProps)(SubmitVote);
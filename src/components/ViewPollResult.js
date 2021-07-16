import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, ProgressBar } from 'react-bootstrap';
import PageNotFound from './PageNotFound';
import { formatDate } from '../utils/helpers';

class ViewPollResult extends Component {
    render() {
        const { authUser, question, user } = this.props;

        if(question === null)
            return <PageNotFound />

        const { timestamp, optionOne, optionTwo } = question;
        const { name, avatarURL } = user;

        const totalVoteCount = optionOne.votes.length + optionTwo.votes.length;
        const optionOnePercentage = Math.round(( optionOne.votes.length / totalVoteCount ) * 100);
        const optionTwoPercentage = Math.round(( optionTwo.votes.length / totalVoteCount ) * 100);

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
                    Asked by <b>{name}</b> @ {formatDate(timestamp)}
                </Card.Header>
                <Card.Body>
                    <Card.Text>Option 1: <b>{optionOne.text}</b></Card.Text>
                    <Card.Text>
                        Received {optionOne.votes.length} out of total {totalVoteCount} votes
                        { optionOne.votes.includes(authUser) ? <b> [ You Voted for this option ]</b> : null }
                    </Card.Text>
                    <ProgressBar
                            now={optionOnePercentage}
                            label={`${optionOnePercentage}%`}
                            variant='success'
                            animated
                    />
                    <Card.Text>Option 2: <b>{optionTwo.text}</b></Card.Text>
                    <Card.Text>
                        Received {optionTwo.votes.length} out of total {totalVoteCount} votes
                        { optionTwo.votes.includes(authUser) ? <b> [ You Voted for this option ]</b> : null }
                    </Card.Text>
                    <ProgressBar
                            now={optionTwoPercentage}
                            label={`${optionTwoPercentage}%`}
                            variant='success'
                            animated
                    />
                </Card.Body>
            </Card>
        );
    }
}

function mapStateToProps({ authUser, users, questions }, {questionId}) {
    const question = questions[questionId];

    return {
        authUser,
        question: question ? question : null,
        user: question ? users[question.author] : null,
    };
}

export default connect(mapStateToProps)(ViewPollResult);
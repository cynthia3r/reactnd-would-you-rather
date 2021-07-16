import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { formatDate } from '../utils/helpers';

class QuestionCard extends Component {
    render() {
        const { question, user } = this.props;
        const { id, timestamp, optionOne, optionTwo } = question;
        const { name, avatarURL } = user;

        return (
            <Fragment>
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
                        <br />
                        Would you rather?
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{optionOne.text.slice(0, 80)}... or</Card.Text>
                        <Card.Text>{optionTwo.text.slice(0, 80)}...</Card.Text>
                        <Link to={`questions/${id}`}>
                            <Button>View Poll</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Fragment>
            
        );
    }
}

function mapStateToProps({ users, questions }, {id}) {
    const question = questions[id];

    return {
        question: question ? question : null,
        user: question ? users[question.author] : null,
    };
}

export default connect(mapStateToProps)(QuestionCard);
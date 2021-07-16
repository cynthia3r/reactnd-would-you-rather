import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
class UserScoreCard extends Component {
    render() {
        const { user } = this.props;
        const { name, avatarURL, answers, questions } = user;

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
                    {name}
                    <br />
                    <b>Score: {Object.keys(answers).length + questions.length}</b>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Answered Questions: {Object.keys(answers).length}
                        <br />
                        Created Questions: {questions.length}
                    </Card.Text>   
                </Card.Body>
            </Card>
        );
    }
}

function mapStateToProps({ users }, { id }) {
    return {
        user: users[id],
    };
}

export default connect(mapStateToProps)(UserScoreCard);
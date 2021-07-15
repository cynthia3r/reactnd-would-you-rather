import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserScoreCard from './UserScoreCard';

class LeaderBoard extends Component {
    render() {
        const { userIds } = this.props;
        return (
            <div>
                {userIds.map((userId) => (
                    <UserScoreCard key={userId} id={userId} />
                ))}
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    // users are sorted in descending order based on the sum of number of
    // questions they've answered and the number of questions they've asked
    const sortedUserIds = Object.keys(users).sort((a, b) => {
        const scoreUserA = Object.keys(users[a].answers).length +
                            users[a].questions.length;
        const scoreUserB = Object.keys(users[b].answers).length +
                            users[b].questions.length;

        return scoreUserB - scoreUserA;
    });

    return {
        userIds: sortedUserIds,
    };
}

export default connect(mapStateToProps)(LeaderBoard);
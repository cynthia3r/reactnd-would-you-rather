import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import QuestionList from './QuestionList';

class Home extends Component {
    render() {
        const { unansweredQuestionIds, answeredQuestionIds } = this.props;
        return (
            <Fragment>
                <Tabs id='home-page-tabs'>
                    <Tab eventKey='unanswered' title='Unanswered Questions'>
                        <QuestionList
                            questionIds={unansweredQuestionIds} 
                            emptyListText='No Unanswered Questions available'
                        />
                    </Tab>
                    <Tab eventKey='answered' title='Answered Questions'>
                        <QuestionList
                            questionIds={answeredQuestionIds}
                            emptyListText='You have not answered any question'
                        />
                    </Tab>
                </Tabs>
            </Fragment>
        );
    }
}

function mapStateToProps({ authUser, users, questions }) {

    const answers = Object.keys(users[authUser].answers);

    const unansweredQuestionIds = Object.keys(questions)
        .filter((questionId) => !answers.includes(questionId))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    const answeredQuestionIds = Object.keys(questions)
        .filter((questionId) => answers.includes(questionId))
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
        unansweredQuestionIds,
        answeredQuestionIds,
    };
}

export default connect(mapStateToProps)(Home);
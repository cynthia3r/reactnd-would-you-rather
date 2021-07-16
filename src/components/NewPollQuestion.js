import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { handleAddQuestion } from '../actions/questions';

class NewPollQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        redirectToHome: false,
    }

    handleChange = (e) => {
        const text = e.target.value;
        const name = e.target.name;

        this.setState(() => ({
            [name]: text,
        }));

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { optionOneText, optionTwoText } = this.state;
        const { dispatch } = this.props;

        dispatch(handleAddQuestion(optionOneText, optionTwoText))
            .then(() => 
                this.setState(() => ({
                        optionOneText: '',
                        optionTwoText: '',
                        redirectToHome: true,
                }))
            );
    }

    render() {
        const { optionOneText, optionTwoText, redirectToHome } = this.state;
        const buttonStatus = optionOneText === '' || optionTwoText === '';

        if( redirectToHome) {
            return <Redirect to='/home' />
        }

        return (
            <Fragment>
                <Card>
                    <Card.Header>
                        <b>Create New Question</b>
                        <br/>
                        Would you rather...
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    placeholder='Option One'
                                    onChange={this.handleChange}
                                    value={optionOneText}
                                    name='optionOneText'
                                />
                                <br/><br/>
                                <input
                                    placeholder='Option Two'
                                    onChange={this.handleChange}
                                    value={optionTwoText}
                                    name='optionTwoText'
                                />
                                <br/>
                                <button 
                                    type='submit'
                                    className='btn'
                                    disabled={buttonStatus}>
                                        Submit
                                </button>
                            </form>
                        </Card.Text> 
                    </Card.Body>
                </Card>
            </Fragment>
        );
    }
}

export default connect()(NewPollQuestion);
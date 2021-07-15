import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
            <div>
                <h2>Create New Question</h2>
                <h3>Would you rather...</h3>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Option One'
                        onChange={this.handleChange}
                        value={optionOneText}
                        name='optionOneText'
                    />
                    <br/>
                    <label>OR</label>
                    <br/>
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
            </div>
        );
    }
}

export default connect()(NewPollQuestion);
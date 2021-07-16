import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';
import logo from '../logo.svg';

class Login extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        
        const userId = this.userId.value;
        const { dispatch } = this.props;

        if(userId !== '') {
            dispatch(setAuthUser(userId));
        }
    }

    render() {
        const { userIds, users } = this.props;

        return (
            <div className='center'>
                <h3 className='center'>Welcome to the Would You Rather App!</h3>
                <h4 className='center'>Please Sign in to continue...</h4>
                <header className='App-header'>
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div>
                    <form onSubmit={this.handleSubmit} className='center'>
                        <label >Select Login User:</label>
                        <br/>
                        <select ref={(id) => (this.userId = id)}>
                            {
                                userIds.map((id) => (
                                    <option value={id} key={id}>
                                        {users[id].name}
                                    </option>
                                ))
                            }
                        </select>
                        <br/>
                        <button type='submit' className='btn'>
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
        users,
    };
}

export default connect(mapStateToProps)(Login);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthUser } from '../actions/authUser';

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        
        const userId = this.userId.value;
        const { dispatch } = this.props;

        if(userId !== '')
            dispatch(setAuthUser(userId));
    }

    render() {
        const { userIds } = this.props;
        return (
            <div>
                <h3 className='center'>Please Login to play Would You Rather Game</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Select Login User:</label>
                    <select ref={(id) => (this.userId = id)}>
                        {
                            userIds.map((id) => (
                                <option value={id} key={id}>
                                    {id}
                                </option>
                            ))
                        }
                    </select>
                    <br/>
                    <button type='submit'>
                        Login
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ users }) {
    return {
        userIds: Object.keys(users),
    };
}

export default connect(mapStateToProps)(Login);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthUser } from '../actions/authUser';


class Logout extends Component {
    componentDidMount() {
        this.props.dispatch(setAuthUser(null));
    }
    render() {
        return <Redirect to='/' />
    }
}

export default connect()(Logout);
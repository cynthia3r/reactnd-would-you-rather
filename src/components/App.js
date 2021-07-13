import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <div>
                Starter Code
            </div>
        )
    }
}

// using connect() function to upgrade the component to a container
// so that the container can read state from the store and dispatch actions
export default connect()(App)

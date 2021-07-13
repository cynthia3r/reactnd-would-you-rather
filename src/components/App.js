import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../App.css'
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Home from './Home';
import NewPollQuestion from './NewPollQuestion';
import LeaderBoard from './LeaderBoard';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }

    render() {
        return (
            <Router>
                <div className='container'>
                    <Nav />
                    {this.props.loading === true
                        ? null
                        : <div>
                            <Route path='/' exact component={Home} />
                            <Route path='/add' exact component={NewPollQuestion} />
                            <Route path='/leaderboard' exact component={LeaderBoard} />
                        </div>}
                </div>
            </Router>
        );
    }
}

function mapStateToProps({ authUser }) {
    return {
        // loading: authUser === null
        loading: false
    };
}

// using connect() function to upgrade the component to a container
// so that the container can read state from the store and dispatch actions
export default connect(mapStateToProps)(App);

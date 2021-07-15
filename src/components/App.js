import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Home from './Home';
import NewPollQuestion from './NewPollQuestion';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Logout from './Logout';
import '../App.css'
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
                        ? <div>
                            <Route path='/' exact component={Login} />
                        </div>
                        : <div>
                            <Route path='/home' exact component={Home} />
                            <Route path='/add' exact component={NewPollQuestion} />
                            <Route path='/leaderboard' exact component={LeaderBoard} />
                            <Route path='/logout' exact component={Logout} />
                        </div>}
                </div>
            </Router>
        );
    }
}

function mapStateToProps({ authUser }) {
    return {
        loading: authUser === null,
    };
}

// using connect() function to upgrade the component to a container
// so that the container can read state from the store and dispatch actions
export default connect(mapStateToProps)(App);

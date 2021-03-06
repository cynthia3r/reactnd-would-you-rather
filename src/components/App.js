import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';
import Home from './Home';
import NewPollQuestion from './NewPollQuestion';
import LeaderBoard from './LeaderBoard';
import ViewQuestion from './ViewQuestion';
import Login from './Login';
import Logout from './Logout';
import '../App.css'
import PageNotFound from './PageNotFound';
class App extends Component {
    componentDidMount() {
        this.props.handleInitialData();
    }

    render() {
        return (
            <Router>
                <Fragment>
                <div className='container'>
                    {this.props.loading === true
                        ? <div>
                            <Login />
                        </div>
                        : <div>
                            <Nav />
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/add' exact component={NewPollQuestion} />
                                <Route path='/questions/:id' exact component={ViewQuestion} />
                                <Route path='/leaderboard' exact component={LeaderBoard} />
                                <Route path='/logout' exact component={Logout} />
                                <Route component={PageNotFound} />
                            </Switch>                          
                        </div>}
                </div>
                </Fragment>
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
export default connect(mapStateToProps, { handleInitialData })(App);
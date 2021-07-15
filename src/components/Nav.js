import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Nav extends Component {
    render() {
        const { authUser, users } = this.props;
        return (
            <nav className='nav'>
            { authUser ? (
                <ul>
                    <li>
                        <NavLink to='/home' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/add' exact activeClassName='active'>
                            New Question
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/leaderboard' exact activeClassName='active'>
                            Leader Board
                        </NavLink>
                    </li>
                    <li>
                        <div className='author'>
                            [ Hello, {users[authUser].name}  ]
                        </div>
                    </li>
                    <li>
                        <span>
                            <img 
                                src={users[authUser].avatarURL}
                                alt={`$users[authUser].avatarURL`}
                                className='avatar'
                            />
                        </span>
                    </li>
                    <li>
                        <NavLink to='/logout' exact activeClassName='active'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
                ) : (
                <ul>
                    <li>
                        <NavLink to='/' exact activeClassName='active'>
                            {/* Sign-In Page */}
                        </NavLink>
                    </li>
                </ul>
            )}
            </nav>
        );
    }
}

function mapStateToProps({ users, authUser }) {
    return {
        authUser,
        users,
    };
}

export default connect(mapStateToProps)(Nav);

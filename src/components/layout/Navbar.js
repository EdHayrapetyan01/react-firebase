import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';


class Navbar extends React.Component {
  state = {
    isAuthenticated: false
  }
  static getDerivedStateFromProps (props) {
    const { auth } = props;
    if (auth.uid) {
      return { isAuthenticated: true }
    } else {
      return { isAuthenticated: false }
    }
  }

  onLogOut = (e) => {
    e.preventDefault();
    const { firebase } = this.props;
    firebase.logout()
  }
  render () {
    const { isAuthenticated } = this.state;
    return (
      <nav
        className="navbar navbar-expand-sm   bg-dark mb-4">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img className='logo' src="https://pngimage.net/wp-content/uploads/2018/06/flower-logo-png-2.png" alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {isAuthenticated ? (
                <div>
                 <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/add/client">
                      Client
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button className='logout' onClick={this.onLogOut}>logout</button>
                  </li>
                  </ul>
                </div>

              ) :
                <div>
                 <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-in">
                      Login
                </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">
                      Register
                </Link>
                  </li>
                  </ul>
                </div>
              }
            </ul>
          </div>
        </div>
      </nav>
    );
  }
};


export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
  }))
)(Navbar);
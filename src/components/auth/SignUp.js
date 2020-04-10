import React, { Component } from 'react';
// import {compose } from 'redux';
// import {connect } from 'react-redux';
import {  firebaseConnect } from 'react-redux-firebase';

 class SignIn extends Component {
   state ={
     email: '',
     password: '',
     name: '',
   }
   onSubmit = (e) => {
    e.preventDefault();
     const { firebase } = this.props;
     const { email , password} = this.state;
     firebase.createUser({
        email,password
     }).catch(err => alert('That user already exists'))
    
  }
   onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
   }
  
  render() {
    return (
      <div>
         <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center pb-4 pt-3">
                <span className="text-dark">
                  <img style={{width : '34px'}} src="https://cdn0.iconfinder.com/data/icons/superuser-web-kit/512/686909-user_people_man_human_head_person-512.png" alt=""/> sign up
                </span>
              </h1>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  />
                  </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    value={this.state.password}
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="btn btn-primary btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default firebaseConnect()(SignIn);
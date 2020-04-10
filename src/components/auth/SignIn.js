import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';

class SignIn extends Component {
  state = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  }
  validate = () => {
    let emailError = "";
    let passwordError = "";

    if (!this.state.email.includes("@")) {
      emailError = "Cannot be blank must contain @ character";
    }
    if (this.state.password.length < 5) {
      passwordError = "Must be 5+ character";
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    // validation
    const isValid = this.validate();
    if (isValid) {
      const { firebase } = this.props;
      const { email, password } = this.state;
      firebase.login({
        email, password
      }).catch(err => alert('invalid'))
    }


  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <h1 className="text-center pb-4 pt-3">
                  <span className="text-dark">
                    <img style={{ width: '33px' }} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/login-250-1180105.png" alt="" /> sign in
                </span>
                </h1>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='errorMsg' style={{ fontSize: 12, color: "red" }}>
                    {this.state.emailError}
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"

                      value={this.state.password}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className='errorMsg' style={{ fontSize: 12, color: "red" }}>
                    {this.state.passwordError}
                  </div>
                  <input
                    type="submit"
                    value="Login"
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
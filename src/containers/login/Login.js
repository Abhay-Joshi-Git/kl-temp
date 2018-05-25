import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import authActions from '../authentication/_store/actions';

class Login extends Component {

  onSignIn = () => {
    this.props.setLogedIn(true);
  };

  render() {
    return (
      <div className="page-home">
        <div>
          <input
            onChange={this.onEmailIdChange}
            placeholder="Email ID"
          />
        </div>
        <div>
          <input
            type="password"
            onChange={this.onPasswordChange}
            placeholder="Password"
          />
        </div>
        <button onClick={this.onSignIn}>
          Sign In
        </button>
      </div>
    );
  }
}
Login.propTypes = {
  setLogedIn: PropTypes.func.isRequired
};

export default connect(null, { ...authActions })(Login);

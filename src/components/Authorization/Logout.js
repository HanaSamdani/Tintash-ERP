import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Logout } from '../../styles/Dashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../actions/index.js';

const mapDispatchToProps = dispatch => {
  return {
    logout: user => dispatch(logout(user))
  };
};

class Logoutdiv extends Component {
  _logout = () => {
    this.setState({
      token: "",
      first_name: "",
      last_name: "",
      full_name: "",
      email: "",
      imageUrl: "",
      googleId: ""
    });
    this.props.logout(this.state);
    this.props.history.push("/");
  }
  
  render() {
    return(
        <Logout onClick={this._logout}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Logout>
    );
  }
}
const LogoutUser = connect(null, mapDispatchToProps)(Logoutdiv);

export default withRouter(LogoutUser);

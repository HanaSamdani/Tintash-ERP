import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.json';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/index.js';
import { Container, LoginDiv, H2, H4 } from '../../styles/Login';


const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};

class Userlogin extends Component {
  constructor() {
    super();
    this.state = { token: ''};
  }
    
  onFailure = (error) => {
    alert(error);
  }
  
  googleResponse = (response) => { 
    var clientId = config.CLIENT_ID;
    var clientSecret = config.CLIENT_SECRET;
      axios({
        method: 'post',
        url: 'http://tintasherp1.herokuapp.com/auth/convert-token',
        data: {
          "grant_type": "convert_token",
          "client_id": clientId,
          "client_secret": clientSecret,
          "backend": "google-oauth2",
          "token": response.accessToken
        }
      }).then((r) => {
        this.setState({
          token: r.data.access_token,
          first_name: response.profileObj.givenName,
          last_name: response.profileObj.familyName,
          full_name: response.profileObj.name,
          email: response.profileObj.email,
          imageUrl: response.profileObj.imageUrl,
          googleId: response.profileObj.googleId
        });
        localStorage.setItem('user', JSON.stringify(this.state));
        // console.log("localStorage: "+localStorage.getItem("user"));
        this.props.login(this.state);
        this.props.history.push("/dashboard");
      });
    };
  
  render() {
        return(
        <Container>
          <LoginDiv>
            <H2>Welcome to Tintash ERP</H2>
            <H4>Please login using your Tintash Account</H4>
            <GoogleLogin
              clientId={config.GOOGLE_CLIENT_ID}
              buttonText="Login with G+"
              onSuccess={this.googleResponse} 
              onFailure={this.onFailure} />
          </LoginDiv>
        </Container>
        );
  }
}

const Login = connect(null, mapDispatchToProps)(Userlogin);
export default withRouter(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Avatar } from '../../styles/Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const mapStateToProps = state => {
  return { user: state.user };
};

let _user = JSON.parse(localStorage.getItem('user'));

class Profile_dash extends Component {
  render(){
   return(
      <Container>
        <Avatar src={ _user.imageUrl } alt="avatar"></Avatar>
        <p><FontAwesomeIcon icon={ faUser } />  { _user.full_name }</p>
        <p><FontAwesomeIcon icon={ faEnvelope } />  { _user.email }</p>
        <p> Designation </p>
      </Container>
    );
  }
}

const DProfile = connect(mapStateToProps)(Profile_dash);

export default DProfile;

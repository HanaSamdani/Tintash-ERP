import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Logodiv, Sidebar } from '../../styles/Dashboard';
import TintashLogo from './../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faLayerGroup, faUserCircle } from '@fortawesome/free-solid-svg-icons';

class Navbar extends Component {
  render() {
    return(
        <Sidebar>
          <Logodiv>
            <img src={TintashLogo} alt="Tintash ERP" className="dib br-100 logo" />
          </Logodiv>
          <Link className="link no-underline pa3 white f6 navbar-links" to="/dashboard"><FontAwesomeIcon icon={faBox} /> Dashboard</Link>
          <Link className="link no-underline pa3 white f6 navbar-links" to="/dashboard/profile"><FontAwesomeIcon icon={faUserCircle} /> Profile</Link>
          <Link className="link no-underline pa3 white f6 navbar-links" to="/dashboard/hourslog"><FontAwesomeIcon icon={faLayerGroup} /> Hours Log</Link>
        </Sidebar>
    );
  }
}

export default Navbar;

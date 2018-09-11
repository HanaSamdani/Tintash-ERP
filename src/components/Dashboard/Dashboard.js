import React, { Component } from 'react';
import Navbar from './Navbar';
import { Wrapper, Nav, MainContainer, } from '../../styles/Dashboard';
import DashboardRoutes from '../../routes/DashboardRoutes';
import Logout from '../Authorization/Logout';

class Dashboard extends Component {
  
  render() {
    return(
      <React.Fragment>
      <Wrapper>
        <Navbar />
        <MainContainer>
          <Nav>
            <Logout />
          </Nav>
          <DashboardRoutes />
        </MainContainer>
      </Wrapper>
      </React.Fragment>
    );
  }
}

export default Dashboard;

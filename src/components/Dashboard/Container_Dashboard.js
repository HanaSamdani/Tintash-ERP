import React, { Component } from 'react';
import DProfile from './Profile_dashboard';
import DProjects from './Projects_dashboard';
import { MainContainer1 } from '../../styles/Dashboard';

class DContainer extends Component{
  render(){
    return(
      <React.Fragment>
        <MainContainer1>
          <DProfile />
          <DProjects />
        </MainContainer1>
      </React.Fragment>
    );
  }
}

export default DContainer;


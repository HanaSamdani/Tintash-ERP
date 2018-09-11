import React, { Component } from 'react';
import HourslogContainer from './Container_hourslog';
import { MainContainer1 } from '../../styles/Dashboard';

class HoursLog extends Component{
  render(){
    return(
      <React.Fragment>
        <MainContainer1>
          <h1>Hours Log Container</h1>
        </MainContainer1>
      </React.Fragment>
    );
  }
}

export default HoursLog;


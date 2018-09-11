import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DContainer from '../components/Dashboard/Container_Dashboard';
import UserProfile from '../components/UserProfile/Userprofile';
import HoursLog from '../components/HoursLog/Hourslog';

class DashboardRoutes extends Component{
  render(){
    return(
        <React.Fragment>
          <Route exact path="/dashboard" component={ DContainer } />
          <Route exact path="/dashboard/profile" component={ UserProfile } />
          <Route exact path="/dashboard/hourslog" component={ HoursLog } />
        </React.Fragment>
    );
  }
}

export default DashboardRoutes;

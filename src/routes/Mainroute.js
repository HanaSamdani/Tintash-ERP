import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from '../components/Authorization/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import HoursLog from '../components/HoursLog/Hourslog';
import UserProfile from '../components/UserProfile/Userprofile';

class Mainroute extends Component{
  render(){
    return(
      <Router>
        <React.Fragment>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={ Dashboard } />
        </React.Fragment>
      </Router>
    )
  }
}
export default Mainroute;

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Overview from './Overview';
import Projects from './Projects';
import Teams from './Teams';
import Employees from './Employees';
import NotFound from './NotFound';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={() => ( /* do not use {} */
            <Overview title="Overview"></Overview>
          )}/>
          <Route exact path="/projects" render={() => (
            <Projects title="Projects"></Projects>
          )}/>
          <Route exact path="/employees" render={() => (
            <Employees title="Employees"></Employees>
          )}/>
          <Route exact path="/teams" render={() => (
            <Teams title="Teams"></Teams>
          )}/>
          <Route exact path="*" render={() => (
            <NotFound title="Not Found"></NotFound>
          )}/>
        </Switch>
      </div>
    )
  }
}
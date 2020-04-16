import React, {Component} from 'react';
import './App.css';
import Homepage from "./components/Homepage/Homepage";
import {BrowserRouter, NavLink, Redirect, Switch} from "react-router-dom";
import {Route} from 'react-router-dom';
import Users from "./containers/Users/Users";
import Courses from "./containers/Courses/Courses";

class App extends Component {

  render() {
    return (
        <BrowserRouter basename={'/index'}>
          <React.Fragment>
            <div className="App">
              <header>
                <nav className='nav-bar'>
                  <ul>
                    <li><NavLink to={'/homepage'}>Homepage</NavLink></li>
                    <li><NavLink to={'/users'}>Users</NavLink></li>
                    <li><NavLink to={'/courses'}>Courses</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Switch>
                <Route exact path={'/homepage'} component={Homepage}/>
                <Route exact path={'/users'} component={Users}/>
                <Route path={'/courses'} component={Courses}/>
                <Redirect exact from='/all-courses' to='/courses'/>
                <Redirect exact from='/' to='/homepage'/>
                <Route render={()=>(<h1>404 - Error</h1>)}/>
              </Switch>
            </div>
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;

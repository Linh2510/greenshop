import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import App from './App';
import List from './List'
import Grid from './Grid'
function Index(){
  return(
  <div>
    <Router>
      <App >
        <Switch>
            <Route path='/list' component ={List} />
            <Route path='/listproduct' component={Grid} />
        </Switch>
      </App>
    </Router>
   
  </div>
  ) 
}
export default Index
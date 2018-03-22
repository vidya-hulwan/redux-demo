import React, { Component } from 'react';
import HomePage from './homepage';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import '../style/App.css';
import '../style/toDo.css';

class App extends Component {
	
  render() {  
    return (
      	<Router> 
      	<div>
		    <Route exact path="/" component={HomePage}  />
	        <Route path="/dashboard" component={Dashboard}/>

		</div>
		</Router>

    );
  }
}


export default (App);

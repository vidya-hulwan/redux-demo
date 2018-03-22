import React, { Component } from 'react';
import Header from './Header';
import Login from './login';
import Registration from './registration';
import { BrowserRouter as Router, Route } from "react-router-dom";

class Homepage extends Component {
  
  render() {
    let homepageTabs = [{title :"login" , path:"login"},{title:"registration", path:"registration"}]
    let {match} = this.props 
    return (
      <Router> 
        <div>
          <Header tabs={homepageTabs} match={match}/>
          <Route exact path="/" component={Login}  />
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
    </div>
    </Router>

    );
  }
}


export default (Homepage);

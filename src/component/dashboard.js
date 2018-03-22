import React, { Component } from 'react';
import Header from './Header';
import ProfilePage from './profilePage';
import EditToDo from './editToDo';
import AddToDo from './addToDo';
import { BrowserRouter as Router, Route } from "react-router-dom";


class Dashboard extends Component {
  
  render() {
    let dashboardTabs = [{title :"Profile Page" , path:"/"},{title:"ToDoList", path:"/AddList"}]
    let logout  = {title :"Logout" , path:"/"}
    let {match} = this.props
    return (
      <Router> 
        <div>
          <Header tabs={dashboardTabs} logout={logout} match={match}/>
          <Route exact path="/dashboard" component={ProfilePage}  />
          <Route path="/dashboard/AddList" component={AddToDo}/>
          <Route path="/dashboard/EditToDo" component={EditToDo}/>
    </div>
    </Router>

    );
  }
}


export default (Dashboard);

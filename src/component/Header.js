import React, { Component } from 'react';
import {Link}  from "react-router-dom";

class Header extends Component {
  render() {
    let {tabs,logout,match} = this.props
    let logoutElement
    if(logout){
        logoutElement = (<ul className="nav navbar-nav navbar-right">
                        <li> <Link to="/">{logout.title}</Link></li>
                    </ul>)
    }
    return (
        <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    </div>
                    <ul className="nav navbar-nav">
                    {tabs.map(tab =>
                        <li key={tab.path}>
                          <Link to={match.url+tab.path}>{tab.title}</Link>
                        </li>
                    )} 
                    </ul>
                    {logoutElement}
                </div>
            </nav>

    );
  }
}

export default Header;


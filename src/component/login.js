import React, { Component } from 'react';

class Login extends Component {
	
  render() {
    return (
        <form id="login_form" method="post" >
            <div className="container">
                <h1>LogIn</h1>
                <div id="Error"></div>
                <hr/>
                <label htmlFor="email"><b>Username</b></label>
                <input id="username" type="text" placeholder="Enter username or email" name="username_or_email" className="form-control" required/>
                <label htmlFor="psw"><b>Password</b></label>
                <input id="password" type="password" placeholder="Enter Password" name="psw" className="form-control" required/>
                <div className="clearfix">
                    <button type="button" className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                </div>
            </div>
        </form>

    );
  }
}


export default Login;

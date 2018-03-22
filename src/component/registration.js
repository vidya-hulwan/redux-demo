import React, { Component } from 'react';
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Registration extends Component {
	constructor(props) {
        super(props);
        this.state = {
           username: "",
           first_name : "",
           last_name : "",
           gender : "",
           address : "",
           userProfile : "",
           file:"",
           password1:"",
           password2:"",
           userRegistered : false

        }
    }


    changeUserName() {
        return function (event) {
            this.setState({...this.state ,username : event.target.value});
        }
    }

    changeFirstName() {
        return function (event) {
            this.setState({...this.state ,first_name : event.target.value});
        }
    }
    changeLastName() {
        return function (event) {
            this.setState({...this.state ,last_name : event.target.value});
        }
    }
    changeAddress() {
        return function (event) {
            this.setState({...this.state ,address : event.target.value});
        }
    }
    changeProfileImage() {
        return function (event) {
            this.setState({...this.state ,userProfile : event.target.files[0].name});
        }
    }
    changeGender() {
        return function (event) {
            this.setState({...this.state ,gender : event.target.value});
        }
    }

    changePassword1() {
        return function (event) {
            this.setState({...this.state ,password1 : event.target.value});
        }
    }

    changePassword2() {
        return function (event) {
            this.setState({...this.state ,password2 : event.target.value});
        }
    }

    _handleImageChange(e) {
	    e.preventDefault();

	    let reader = new FileReader();
	    let file = e.target.files[0];

	    reader.onloadend = () => {
	      this.setState({...this.state ,file:file,userProfile : reader.result});
	    }
	    reader.readAsDataURL(file)
	}

	handleSubmit(getUser,addUser) {

		return function (event) {
             event.preventDefault();
	    if(!this.state.gender){
	    	alert("Please choose gender");
	    	return
	    }

	    if(this.state.password1 !== this.state.password2){
	    	alert("Second password should be same as First one");
	    	return
	    }
	 
	    addUser(
	    	this.state.username,
  			this.state.first_name,
  			this.state.last_name,
  			this.state.gender,
  			this.state.address,
  			this.state.password1,
  			this.state.userProfile
	    	)
	    this.setState({...this.state ,userRegistered:true});
        }
	}


  render() {
  	let {userProfile} = this.state;
  	let {getUser,addUser} = this.props.actions;
  	if(this.state.userRegistered){
  		return <Redirect push to="/login" />;
  	}
    return (

		<form id="registration_form" method="post" onSubmit={this.handleSubmit(getUser,addUser).bind(this)}>
        <div className="container">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr/>
            <label htmlFor="email"><b>Username</b></label>
            <input id="username" type="text" placeholder="Enter username or email" name="username_or_email" className="form-control" onChange={this.changeUserName().bind(this)} required/>
            <label htmlFor="first_name"><b>First name</b></label>
            <input id="first_name" type="text" placeholder="Enter first name" name="first_name" className="form-control" onChange={this.changeFirstName().bind(this)} required/>
            <label htmlFor="last_name"><b>Last name</b></label>
            <input id="last_name" type="text" placeholder="Enter last name" name="last_name" className="form-control" onChange={this.changeLastName().bind(this)} required/>
            <label htmlFor="gender"><b>Gender</b></label>
            <div id="group">
                <input type="radio" value="Male" name="gender" onClick={this.changeGender().bind(this)}/> Male
                <br/>
                <input type="radio" value="Female" name="gender" onClick={this.changeGender().bind(this)}/> Female
                <br/>
                <input type="radio" value="other" name="gender" onClick={this.changeGender().bind(this)}/> Other
            </div>
            <br/>
            <label htmlFor="address"><b>Address</b></label>
            <textarea id="address" name="address" placeholder="Enter your address" rows="4" cols="50" className="form-control" onChange={this.changeAddress().bind(this)} required="required"></textarea>
            <label htmlFor="profile_image"><b>Profile Image</b></label>
            <br/>
            <br/>
            <input id="myimage" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg" onChange={(e)=>this._handleImageChange(e)}  required/>
            <img  alt="" src={userProfile} />
            <br/>
            <br/>
            <label htmlFor="psw"><b>Password</b></label>
            <input id="password1" type="password" className="form-control" placeholder="Enter Password" name="psw" onChange={this.changePassword1().bind(this)} required/>
            <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
            <input id="password2" type="password" className="form-control" placeholder="Repeat Password" name="psw-repeat" onChange={this.changePassword2().bind(this)} required/>
            <div className="clearfix">
                <button type="button" className="cancelbtn">Cancel</button>
                <button type="submit" className="signupbtn">Sign Up</button>
            </div>
        </div>
    </form>
    );
  }
}

Registration.propTypes = {
  users: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Registration)



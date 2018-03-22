import React, { Component } from 'react';

class ProfilePage extends Component {
	constructor(props) {
        super(props);
        this.state = {
           first_name : "",
           last_name : "",
           gender : "",
           address : "",
           userProfile : "",
           file:""

        }
    }


    changeFirstName(fieldName) {
        return function (event) {
            this.setState({...this.state ,first_name : event.target.value});
        }
    }
    changeLastName(fieldName) {
        return function (event) {
            this.setState({...this.state ,last_name : event.target.value});
        }
    }
    changeAddress(fieldName) {
        return function (event) {
            this.setState({...this.state ,address : event.target.value});
        }
    }
    changeProfileImage(fieldName) {
        return function (event) {
            this.setState({...this.state ,userProfile : event.target.files[0].name});
        }
    }
    changeGender(fieldName) {
        return function (event) {
            this.setState({...this.state ,gender : event.target.value});
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

	handleSubmit(event) {
	    event.preventDefault();
	    const form = event.target;
	    const data = new FormData(form);
        for (let name of data.keys()) {
      const input = form.elements[name];
      const parserName = input.value;
        console.log("========"+name+":")
        console.log(parserName)
          }

	}


  render() {
  	console.log(this.state)
  	let {userProfile} = this.state;
    return (

		<div className="container">
        	<div className="row">
	            <div className="col-md-9 col-md-offset-1">
                    <form method="post" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="first_name"><b>First name</b></label> 
                            <input id="first_name" type="text" placeholder="Enter first name" name="first_name" onChange={this.changeFirstName('name').bind(this)} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name"><b>Last name</b></label>
                            <input id="last_name" type="text" placeholder="Enter last name" name="last_name" onChange={this.changeLastName('name').bind(this)} className="form-control" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender"><b>Gender</b></label>
                            <div id="gender_group">
                                <input type="radio" id="Male" value="Male" onClick={this.changeGender('name').bind(this)} name="gender"/> Male
                                <br/>
                                <input type="radio" id="Female" value="Female" onClick={this.changeGender('name').bind(this)} name="gender"/> Female
                                <br/>

                                <input type="radio" id="other" value="other" onClick={this.changeGender('name').bind(this)} name="gender"/> Other
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address"><b>Address</b></label>
                            <textarea id="address" name="address" placeholder="Enter your address" rows="4" cols="50" onChange={this.changeAddress('name').bind(this)} className="form-control" required="required"></textarea>
                        </div>
                        <div className="form-group">
                        	<label htmlFor="profile_image"><b>Profile Image</b></label>
	                        <br/>
	                        <img id="userProfile" src={userProfile} alt="" className="img-rounded img-responsive" />
	                        <br/>
	                        <input id="myimage" type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg"onChange={(e)=>this._handleImageChange(e)} required/>
	                        <br/>
	                        <br/>
                        </div>
                        <div className="btn-group btn-group-justified" role="group" aria-label="group button">
		                    <div className="btn-group" >
		                        <button type="submit" className="btn btn-default btn-hover-green "  >Save</button>
		                    </div>
		                    <div className="btn-group" >
		                        <button type="button" className="btn btn-default btn-hover-green "  >Cancle</button>
		                    </div>
		                </div>
                    </form>
		        </div>
	        </div>
	    </div>
    );
  }
}


export default ProfilePage;

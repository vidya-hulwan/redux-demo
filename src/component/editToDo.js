import React, { Component } from 'react';
import AddEditForms from './formAddEdit';

class EditToDo extends Component {
	
  render() {
  
    return (
        <div className="container">
        	<div className="row">
            <div className="col-md-9 col-md-offset-1"> 
	      			<AddEditForms form="editForm"/>
	      		</div>
	      	</div>
		</div>

    );
  }
}


export default EditToDo;

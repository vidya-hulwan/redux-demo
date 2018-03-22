import React, { Component } from 'react';
import AddEditForms from './formAddEdit';
import ToDoList from './toDoList';

class HomePage extends Component {
	
  render() {
    return (
        <div className="container">
        	<div className="row">
            <div className="col-md-9 col-md-offset-1"> 
	      			<AddEditForms form="addForm"/>
	      			<ToDoList/>
	      		</div>
	      	</div>
		</div>

    );
  }
}


export default HomePage;

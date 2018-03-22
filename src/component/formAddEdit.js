import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router';

class AddToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : "",
            form : props.form
        }
    }
    setForm(formType){
       return function (event) {
            this.setState({...this.state , form: formType});
        } 
    }
    onFieldChange(fieldName) {
        return function (event) {
            this.setState({value: event.target.value});
        }
    }
    onEditFormSubmit(id,value,editTodo) {
        return function (event) {
                event.preventDefault()
                
                if (!value) {
                  alert("Please choose item to Edit")
                  return
                }

                event.target.querySelector('input').value = ""
                editTodo(id,value)
                this.setState({value: "",form:""});              
    
              }
    }
    onAddFormSubmit(addTodo) {
    
        return function (event) {
                event.preventDefault()
                if (!event.target.querySelector('input').value.trim()) {
                  return
                }
                addTodo(event.target.querySelector('input').value)
                event.target.querySelector('input').value = "";
                this.setState({value: ""});
              }
    }       
render() {
    
    let onsubmit , inputValue,h1Element   
    const { formType, actions } = this.props
    this.setForm(formType.type)
    if (!this.state.form){
        return <Redirect push to="/dashboard/AddList" />
    }

    if(this.state.form === "editForm"){
        
        if (this.state.value){
            inputValue = this.state.value
        }else{
            inputValue = formType.text
        }
        onsubmit = this.onEditFormSubmit(formType.id,inputValue,actions.editTodo,actions.addForm).bind(this)
        h1Element = (<h1>Edit Item</h1>)

    }else{
        onsubmit = this.onAddFormSubmit(actions.addTodo).bind(this)
        h1Element = (<h1>Add Item</h1>)
    }
        return (
            <form method="post" onSubmit={onsubmit}>
                {h1Element}
                <hr/>
                <div className="form-group">
                    <label htmlFor="itemContent"><h3>Item : </h3></label>&nbsp;&nbsp; 
                    <input name="name" value={inputValue} onChange={this.onFieldChange('name').bind(this)} />
                </div>
                <div className="btn-group btn-group-justified" role="group" aria-label="group button">
                    <div className="btn-group" >
                        <button type="submit" className="btn btn-default btn-hover-green" data-action="save" >Save</button>
                    </div>
                </div>
            </form>)       
    }    
    
}

AddToDo.propTypes = {
  formType: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  formType: state.forms
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo)

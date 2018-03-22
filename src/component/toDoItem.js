import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
  }

  constructor(props) {
        super(props);
        this.state = {
            redirect : false
        }
  }

  handleOnClick(id,text,editForm){
    return function () {
      this.setState({redirect: true});
      editForm(id,text);
    }
    
  }

  render() {
    if (this.state.redirect === true) {
        return <Redirect push to="/dashboard/EditToDo" />;
    }
    const { todo, deleteTodo ,editForm} = this.props
    return (
      <li>
        <span className="handle ui-sortable-handle">
            <a href=""><i className="fa fa-ellipsis-v"></i></a>
            <i className="fa fa-ellipsis-v"></i>
        </span>
        <input type="checkbox" value="" name=""/>
        <span className="text">{todo.text}</span>
        <div className="tools">
            <a  onClick={this.handleOnClick(todo.id,todo.text,editForm).bind(this)}><i className="fa fa-edit"></i></a>&nbsp;&nbsp;
            <a  onClick={() => deleteTodo(todo.id)}><i className="fa fa-trash-o"></i></a>
        </div>
     </li>
    )
  }
}


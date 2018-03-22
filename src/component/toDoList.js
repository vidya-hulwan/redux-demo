import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ToDoItem from './toDoItem';
import * as TodoActions from '../actions'
import { bindActionCreators } from 'redux'

const TodoList = ({todos,actions}) => (
  <ul className="todo-list ui-sortable">
  	<h1>ToDo List</h1>
	  {todos.map(todo =>
	      <ToDoItem 
	      	key={todo.id}
	      	todo={todo}
	      	id = {todo.id}
	      	{...actions}
	      />
	    )}    
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
   mapDispatchToProps
)(TodoList)

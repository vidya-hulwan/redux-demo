let nextTodoId = 1;


export const addTodo = text => ({
  type: 'add',
  id: nextTodoId++,
  text
})

export const editTodo = (id,text )=> ({
  type: 'edit',
  id,
  text
})

export const deleteTodo = id => ({
  type: 'delete',
  id
})

export const editForm = (id,text) => ({
  type: 'editForm',
  id,
  text
})
export const addForm = () => ({
  type: 'addForm'
})

export const addUser = (username,first_name,last_name,gender,address,password,image)  => ({
  type: 'addUser',
  username,
  first_name,
  last_name,
  gender,
  address,
  password,
  image
})

export const getUser = () => ({
  type: 'getUser'
})
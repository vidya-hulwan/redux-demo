const initialState = [
  {
    text: 'Use Redux',
    id: 0
  }
]
const todos = (state = initialState,action)=> {

	if(action.type === "add"){
		return [
			 ...state,
	        {
	          id: action.id,
	          text: action.text
	        }
		]
	}

	if(action.type === "edit"){
		return state.map(todo =>
        todo.id === action.id ?
          { ...todo, text: action.text } :
          todo
      )
	}

	if(action.type === "delete"){

		return state.filter(todo =>
        todo.id !== action.id
      )
	}
	
	return state;
}

export default todos
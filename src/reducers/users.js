const initialState = {
    	username: "vidyahulwan", 
    	first_name: "vidya", 
    	last_name: "hulwan", 
    	gender: "Female", 
    	address: "kondhwa", 
    	password: "edx", 
    	image: ""    
}


const users = (state = initialState,action)=> {

	if(action.type === "addUser"){
		return { 
			    	username: action.username, 
			    	first_name: action.first_name, 
			    	last_name: action.last_name, 
			    	gender: action.gender, 
			    	address: action.address, 
			    	password: action.password, 
			    	image: action.image
	        }
		
	}

	if(action.type === "getUser"){
		return state
	}
	
	return state;
}

export default users
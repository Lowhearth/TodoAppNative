let nextId = 0
const todos = (state = [], action) => {
  switch(action.type){
    case 'ADD_TODO':

    return[...state,
            {id: nextId ++,
              text : action.text,
              completed:false}]

    case 'TOGGLE_TODO' : console.log("toggled")
    return state.map(todo => (todo.id === action.id ? {...todo, completed : !todo.completed} : todo))
  }
  return state
}

export default todos

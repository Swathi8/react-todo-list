function getIdOfTodo(todos) {

  let id = todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1)

  return id + 1

}

export default function reducer (state, action) {
  switch (action.type) {
    case 'ADD_TODO':

        let todos = Object.assign({}, state, {
          todos: [{
            text: action.text,
            completed: false,
            id: getIdOfTodo(state.todos),
          }, ...state.todos]
        });
        console.log(todos);
        return todos;
      break;
    default:
      return state;
  }
}

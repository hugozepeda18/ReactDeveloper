import { 
        CREATE_TODO, 
        MARK_TODO_AS_COMPLETED, 
        REMOVE_TODO,
        LOAD_TODOS_FAILURE,
        LOAD_TODOS_IN_PROGRESS,
        LOAD_TODOS_SUCCESS
    } from "./actions"

export const isLoading = (state = false, action) => {
    const { type } = action
    switch(type) {
        case LOAD_TODOS_IN_PROGRESS:
            return true
        case LOAD_TODOS_FAILURE:
        case LOAD_TODOS_SUCCESS: 
            return false
        default:
            return state
    }
}

export const todos = (state = [], action) => {
    const { type, payload } = action
    switch(type){
        case CREATE_TODO: {
            const { todo } = payload
            return state.concat(todo) //IMPORTANT: NEVER MUTATE THE VALUE OF A STATE!!!
        }
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload
            return state.filter(todo => todo.id !== todoToRemove.id)
        }
        case MARK_TODO_AS_COMPLETED: {
            const { todo: updatedTodo } = payload
            return state.map(todo => {
                if(todo.id === updatedTodo.id){
                    return updatedTodo
                }
                return todo
            })
        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload
            return todos
        }
        case LOAD_TODOS_IN_PROGRESS:
        case LOAD_TODOS_FAILURE:
        default: 
            return state
    }
} //REDUCERS TAKE THE ACTION AND DECIDE WHAT THE NEXT STATE IS GOING TO BE
// REDUX ACTIONS OUTSIDE OF REDUCERS AND NO ASYNC OPS
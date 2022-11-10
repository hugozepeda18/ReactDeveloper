import React, {useState} from 'react'
import { connect } from 'react-redux' //connect is a higher order function
import './NewTodoForm.css'
import { addTodoRequest } from './thunks'

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('')

    return (
        <div className='new-todo-form'>
            <input 
                className='new-todo-input' 
                type="text" 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}/>
            <button
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue)
                    if(!isDuplicateText){
                        onCreatePressed(inputValue)
                        setInputValue('')
                    }
                }}
                className='new-todo-button'>
                Create Todo
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos
})  //ENTIRE REDUX STATE 
    //ACCESS TO THE PROPERTIES THE COMPONENT NEEDS

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(addTodoRequest(text))
}) //TRIGGERS ACTIONS OUR REDUX STORE WILL REACT TO

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm) //CONNECTS THE COMPONENT TO REDUX STORE
import React, { useReducer, useState } from 'react';
import './App.css';

import { initialState, reducer} from './reducers/todoReducer'

const App = () => {
  const [task, setTask] = useState('')
  // const [task, setTask] = useState({
  //   item: '',
  //   id: Date.now(),
  //   completed: false
  // }
  //);
  const [state, dispatch] =  useReducer(reducer, initialState)
  //const [newState, setNewState] = useState(state)

  const handlechange = e => {
    setTask(e.target.value);
  }

  const onSubmit = e => {
      e.preventDefault();
      dispatch({type:"ADD_TODO", payload:task})
      setTask('')
  }

  const toggleTask = (id) =>{
    dispatch({type:"TASK_TOGGLED", payload: id})
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type:"CLEAR_COMPLETED",})
  }

  // useEffect(() => {
  //   setNewState(state)
  // }, [state])


  return (
    <div className="App">
      <h1>Sam's Todo List</h1>
      <form>
        <input
        type="text"
        value={task}
        name='item'
        onChange={handlechange}
        />
        <button onClick={onSubmit}>Add Todo</button>
      </form>
      <div>
            {state.map(todo => (
              <div
              className={`${todo.completed ? 'completed' : ''}`}
              onClick={() => toggleTask(todo.id)}
              >
                  <p>{todo.item}</p>
              </div>
            ))}
            <button className="clearBtn" onClick={clearCompleted}>Clear Completed Tasks</button>
        </div>
    </div>
  );
}

export default App;

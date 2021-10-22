import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './pages/TodoList';
import DoneList from './pages/DoneList';
import { store } from './store/index'
import { sendAction, addDone, removeItem ,cancelDone} from './action/index'
function App() {
  const [value, setValue] = useState('')
  const [todoArr, setTodoArr] = useState([])
  const [doneArr, setDoneArr] = useState([])
  const handleAddTodo = (e) => {
    if (e.nativeEvent.keyCode === 13) { //e.nativeEvent 
      store.dispatch(sendAction(value))
      setValue('')
    }
  }
  const handleChangeValue = (e) => {
    setValue(e.target.value)
  }
  useEffect(() => {
    store.subscribe(() => {
      setTodoArr([...store.getState().todoArr])
      setDoneArr([...store.getState().doneArr])
    })
  }, [])
  const handleChange = (index) => {
    store.dispatch(addDone(index))
  }
  const handleCancel = (index) => {
    store.dispatch(cancelDone(index))
  }
  const remove = (index) => {
    store.dispatch(removeItem(index, 0))
  }
  const dele = (index) => {
    store.dispatch(removeItem(index, 1))
  }
  return (
    <div className="App">
      <header>
        <section>
          <label>ToDoList</label>
          <input placeholder="Add Todo" onKeyPress={handleAddTodo} value={value} onChange={handleChangeValue} />
        </section>
      </header>
      <main>
        <section>
          <h2>ToDo:
            <span>{todoArr.length}</span>
          </h2>
          <TodoList arr={todoArr} handleChange={handleChange} remove={remove} />
          <h2>Done:
          <span>{doneArr.length}</span>
          </h2>
          <DoneList arr={doneArr}  handleChange={handleCancel} remove={dele} />
        </section>
      </main>
    </div>
  );
}

export default App;

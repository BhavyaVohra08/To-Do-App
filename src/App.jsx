import { useEffect, useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import './App.css'

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (newTask) => {
    setTodos(prevTodo => {
      const updatedTodos = [...prevTodo];
      updatedTodos.push({id: crypto.randomUUID(), text: newTask});
      return updatedTodos;
    })
  }

  const onDeleteTask = todoId => {
    setTodos(prevTodos => {
      const updatedTodos = prevTodos.filter(todo => todo.id !== todoId);
      return updatedTodos;
    })    
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  let content = (
    <p style={{textAlign: 'center', fontSize: '1.75rem', fontFamily: 'sans-serif'}} >No tasks found.</p>
  )

  if(todos.length > 0) {
    content = (
      <TodoList tasks={todos} deleteTask={onDeleteTask} />
    )
  }

  return (
    <div>
      <section className='task-form'>
        <TodoInput onAddNewTask={addTask} />
      </section>
      
      {/* <TodoList tasks={todos} deleteTask={onDeleteTask} /> */}
      <section className='task'>
        {content}
      </section>
      
    </div>
  )
}

export default App

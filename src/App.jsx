import { TodoForm } from './components/TodoForm'
import styles from './App.module.css'
import { useState } from 'react'
import { TodoList } from './components/TodoList';

const TODOS_DEFAULT = [
  {
    id: "1",
    name: "Sell Old Macbook Pro 2023",
    description: "Try to sell it on OLX",
    deadline: "2025-05-27",
    priority: "high",
    completed: false,
  },
  {
    id: "2",
    name: "Buy an Ice Cream",
    description: "The white one with chocolate",
    deadline: "2025-05-29",
    priority: "low",
    completed: true,
  },
  {
    id: "3",
    name: "Charge Powerbank",
    description: "For the next travelling",
    deadline: "2025-05-31",
    priority: "medium",
    completed: true,
  },
];
function App() {
  const [todos, setTodos] = useState(TODOS_DEFAULT);  
  function handleCreate(newTodo) {
    setTodos((prevTodos) => [...prevTodos, {id: `${prevTodos.length+1}`,...newTodo}]);
  }
  
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='/to-do-list.png'/>
        <h2 className={styles.Title}>Todo App</h2>
      </header>
    
      <div className={styles.AppContainer}><TodoForm onCreate={handleCreate}/> 
      <TodoList
        todos={todos}
      /> 
      
      </div>
    </div>
  )             
}

export default App








import { TodoForm } from "./components/TodoForm";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters";
import { COMPLETED_FILTERS, PRIORITY_FILTERS } from "./Constants/Filters";

/*const TODOS_DEFAULT = [
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
*/
function App() {
 // const [todos, setTodos] = useState(TODOS_DEFAULT);
 const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState({});
  function fetchTodos(){
     fetch(`${import.meta.env.VITE_MOCKAPI_BASE_URL}/todos`, {
  method: 'GET',
  headers: {
    'content-type': 'application/json'
  },
})
  .then((response) => !!response.ok && response.json() )
  .then((todos)=>setTodos(todos));
  }
  useEffect(()=>{
     fetchTodos();
  },[]);
  function handleCreate(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: `${prevTodos.length + 1}`, ...newTodo },
    ]);
  }

function filterTodos(todo) {
  const { completeFilter, priorityFilter } = filter;

  const completeMatch =
    !completeFilter || completeFilter === "all"
      ? true
      : completeFilter === "completed"
      ? todo.completed === true
      : todo.completed === false;

  const priorityMatch =
    !priorityFilter || priorityFilter === "all"
      ? true
      : todo.priority === PRIORITY_FILTERS[priorityFilter].value;

  return completeMatch && priorityMatch;
}


  function handleDelete(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function handleToggleComplete(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/to-do-list.png" alt="Logo" />
        <h2 className={styles.Title}>Todo App</h2>
      </header>

      <div className={styles.AppContainer}>
        <TodoForm onCreate={handleCreate} />
        <TodoFilters onFilter={setFilter} />
        <TodoList
          todos={todos.filter(filterTodos)}
          onToggleComplete={handleToggleComplete}
          onUpdate={(id, updatedTodo) => {
            setTodos((prevTodos) =>
              prevTodos.map((todo) =>
                todo.id === id ? { ...todo, ...updatedTodo } : todo
              )
            );
          }}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;

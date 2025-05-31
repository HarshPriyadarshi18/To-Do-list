import styles from './TodoList.module.css';
import { PRIORITIES,Priority_Default } from '../Constants/priority';
import { TodoListItem } from './TodoListItem';
export function TodoList({ todos, onToggleComplete, onUpdate, onDelete }) {
  return (
    <section>
      <h3>To-Do List</h3>
      {todos.length === 0 && (
        <p className={styles.EmptyMessage}>No tasks available. Add a new task!</p>
      )}

      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onUpdate={onUpdate} 
            onDelete={onDelete}
           
          />  
        ))}
      </ul>
    </section>
  );
}

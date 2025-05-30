import styles from './TodoList.module.css';
import { PRIORITIES,Priority_Default } from '../Constants/priority';
import { TodoListItem } from './TodoListItem';
export function TodoList({ todos, onToggleComplete, onUpdate }) {
  return (
    <section>
      <h2>To-Do List</h2>
      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onUpdate={onUpdate} 
          />  
        ))}
      </ul>
    </section>
  );
}

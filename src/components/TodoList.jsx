import styles from './TodoList.module.css';
import { PRIORITIES,Priority_Default } from '../Constants/priority';
export function TodoList({ todos, onToggleComplete }) {
  return (
    <section>
      <h2>To-Do List</h2>
      <ul className={styles.TodoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`${styles.TodoListItem} ${todo.completed ? styles.Completed : ''}`}
          >
            <div className={styles.Content}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggleComplete(todo.id)}
                className={styles.Status}
              />
              <div className={styles.Info}>
                <h3>{todo.name}</h3>
                {todo.description && (
                  <span className={styles.description}>{todo.description}</span>
                )}
                <div className={styles.AdditionalInfo}>
                  {todo.deadline}{" "}
                  {todo.priority !== "none" && (
                    <span style={{ color: PRIORITIES[todo.priority]?.color }}>
                      {PRIORITIES[todo.priority]?.label}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

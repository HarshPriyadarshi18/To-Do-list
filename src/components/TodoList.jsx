import styles from './TodoList.module.css';
export function TodoList({ todos}) {
    return (
        <section>
            <h2>To-Do List</h2>
            <ul className={styles.TodoList}>
                {todos.map((todo) => (
                    <li key={todo.id} className={styles.TodoListItem} data-completed={todo.completed}>
                         <div className={styles.Content}>
                        <input
                            type="checkbox"
                            name="completed"
                            defaultChecked={todo.completed}
                        />
                        <div className={styles.Info}>
                        <h3>{todo.name}</h3>
                        {todo.description && <p>{todo.description}</p>}
                        {todo.deadline && <p>Deadline: {new Date(todo.deadline).toLocaleDateString()}</p>}
                        {todo.priority && <p>Priority: {todo.priority}</p>}
                        </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
    }
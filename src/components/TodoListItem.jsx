import { PRIORITIES,Priority_Default } from '../Constants/priority';
import { useForm } from 'react-hook-form';
import {TodoFormField} from './TodoFormField';
import styles from "./TodoListItem.module.css";
import { useState } from 'react';
import { getTodoSchema } from "../Schemas/Todo";
import { yupResolver } from "@hookform/resolvers/yup";


export function TodoListItem({todo, onToggleComplete,onUpdate,onDelete}) {
    const[isEditing, setIsEditing] = useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm({ resolver:yupResolver(getTodoSchema()),defaultValues:todo});
    

    function handleEdit(data) {
     /*    event.preventDefault();
    const {elements} = event.target;
    if(elements.name.value === "") {
      
      return;
    }*/
    onUpdate(todo.id, /*{     
      name: elements.name.value,
      description: elements.description.value,
      deadline: elements.deadline.value,
      priority: elements.priority.value,
      completed: todo.completed,
    }*/data);
    setIsEditing(false);
    }
    
    const ViewingTemplate=(  <div className={styles.Content}>
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
              <div className={styles.Actions}>
                <button onClick={() => setIsEditing(true)}>📝</button>
                <button onClick={()=>onDelete(todo.id)}>🗑️</button>
              </div>
            </div>);
     const EditingTemplate=
     <form   className={styles.Content} onReset={() => setIsEditing(false)} onSubmit={handleSubmit(handleEdit)}>
        <TodoFormField todo={todo} register={register} errors={errors}/>
        <div className='Actions'>
            <input type="submit" value="✅" />
            <input type="reset" value="🔄"/>
        </div>
     </form>
    return( 
     
          <li       
            className={`${styles.TodoListItem} ${todo.completed ? styles.Completed : ''}`}
          >
          {isEditing ? EditingTemplate : ViewingTemplate}
          
          </li>
    );
}
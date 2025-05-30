import { PRIORITIES, Priority_Default } from "../Constants/priority";
import styles from "./TodoFormField.module.css";
export function TodoFormField({todo={},showAllFields=true }) {
  return (
       <div className={styles.FormFields}>
             <div className={styles.FormField}>
            <input 
  type="text"
  aria-label="Name*"
  placeholder="Name*"
  name="name" 
  autoComplete="off"
  defaultValue={todo.name}
/>

               </div>
             {showAllFields && (<><div className={styles.FormField}>
            <textarea
                aria-label="Description"
                placeholder="Description"
                name="description"
                autoComplete="off"   
                rows="3"
                defaultValue={todo.description}
            />
            </div>  
        <div className={styles.FormGroup}>
            <div className={styles.FormField}>
            <label htmlFor="deadline">Deadline</label>
            <input 
                type="date"
                name="deadline"
                id="deadline"
                aria-label="Deadline"
                defaultValue={todo.deadline}
                />

            </div>
          <div className={styles.FormField}>
  <label htmlFor="priority">Priority</label>    
  <select defaultValue={todo.priority??Priority_Default} name="priority" id="priority">
    {Object.entries(PRIORITIES).map(([key, value]) => (
      <option key={key} value={key} style={{ color: value.color }}>
        {value.label}
      </option>
    ))}
 
  </select>
</div>
            </div>
             </>)}
            </div>
  );
}
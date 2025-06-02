import { PRIORITIES, Priority_Default } from "../Constants/priority";
import styles from "./TodoFormField.module.css";
export function TodoFormField({todo={},showAllFields=true,register }) {
  return (
       <div className={styles.FormFields}>
             <div className={styles.FormField}>
            <input 
  type="text"
  aria-label="Name*"
  placeholder="Name*"
 // name="name" 
  autoComplete="off"
  defaultValue={todo.name}
 required
  minLength={3}
  maxLength={50}
 {...register("name",{required:true,minLength:3,maxLength:50})}
/>

               </div>
             {showAllFields && (<><div className={styles.FormField}>
            <textarea
                aria-label="Description"
                placeholder="Description"
             //   name="description"
                autoComplete="off"   
                rows="3"
                defaultValue={todo.description}
              maxLength={200}
              {...register("description",{maxLength:200})}
            />
            </div>  
        <div className={styles.FormGroup}>
            <div className={styles.FormField}>
            <label htmlFor="deadline">Deadline</label>
            <input 
                type="date"
               // name="deadline"
                id="deadline"
                aria-label="Deadline"
                defaultValue={todo.deadline}
               min={new Date().toISOString().split("T")[0]}
                {...register("deadline",{min:new Date().toISOString().split("T")[0]})}
                
                />

            </div>
          <div className={styles.FormField}>
  <label htmlFor="priority">Priority</label>    
  <select
   defaultValue={todo.priority??Priority_Default}
   name="priority"
    id="priority"
    {...register("priority")}
    >
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
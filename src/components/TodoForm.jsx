import styles from "./TodoForm.module.css";
export function TodoForm() {
  return(
    <section>
      <h3 className={styles.Title} >New-To-Do</h3>
        <form className={styles.Form}>
            <div className={styles.FormFields}>
             <div className={styles.FormField}>
            <input 
                type="text"
               aria-label="Name*"
               placeholder="Name*"
               name=" name"
               autoComplete="off"
               />
               </div>
              <div className={styles.FormField}>
            <textarea
                aria-label="Description"
                placeholder="Description"
                name="description"
                autoComplete="off"   
                rows="3"
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
                />
            </div>
          <label htmlfor="priority">Priority</label>    
            <select defaultValue="none" name="priority" id="priority">
                <option value="none" disabled>-- Select Priority --</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>      
            </div>
            </div>
           <input type="submit" value="Add"  />
        </form>
    </section>
  )
}





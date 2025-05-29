import styles from "./TodoForm.module.css";
import { useState } from "react";
import { PRIORITIES, Priority_Default } from "../Constants/priority";
export function TodoForm({onCreate}) { 
  const [showAllFields, setShowAllFields] = useState(false);  
  function handleSubmit(event) {
    event.preventDefault();
    const {elements} = event.target
    if(elements.name.value === "") {
      alert("Name is required");
      return;
    }
    onCreate({   
      name: elements.name.value,
      description: elements.description?.value??"",
      deadline: elements.deadline?.value??"",
      priority: elements.priority?.value?? Priority_Default,
      completed: false,
    });
    event.target.reset();
  }
  return(
    <section>
      <h3 className={styles.Title} >New-To-Do
        <button onClick={()=>setShowAllFields(!showAllFields)}>{showAllFields?'Hide':'show'} all fields</button>
      </h3>
        <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.FormFields}>
             <div className={styles.FormField}>
            <input 
  type="text"
  aria-label="Name*"
  placeholder="Name*"
  name="name" 
  autoComplete="off"
/>

               </div>
             {showAllFields && (<><div className={styles.FormField}>
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
          <div className={styles.FormField}>
  <label htmlFor="priority">Priority</label>    
  <select defaultValue={Priority_Default} name="priority" id="priority">
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
           <input type="submit" value="Add"  />
        </form>
    </section>
  )
}





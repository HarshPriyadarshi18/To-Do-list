import styles from "./TodoForm.module.css";
import { useState } from "react";
import { Priority_Default } from "../Constants/priority";
import { TodoFormField } from "./TodoFormField";
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
         <TodoFormField
          showAllFields={showAllFields} 
          />
           <input type="submit" value="Add"  />
        </form>
    </section>
  )
}





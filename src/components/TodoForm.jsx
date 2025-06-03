import styles from "./TodoForm.module.css";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Priority_Default } from "../Constants/priority";
import { TodoFormField } from "./TodoFormField";
import { getTodoSchema } from "../Schemas/Todo";
import { yupResolver } from "@hookform/resolvers/yup";
export function TodoForm({onCreate}) { 
  const [showAllFields, setShowAllFields] = useState(false);  
  const { register,handleSubmit,reset,formState:{errors}}=useForm({
    resolver:yupResolver(getTodoSchema()),
     defaultValues:{
      description:"",
      deadline:"",
      priority:Priority_Default,
      completed:false
     }
  });
  function handleCreate(data) {
   // event.preventDefault();
   // const {elements} = event.target
   // if(elements.name.value === "") {
     // alert("Name is required");
      //return;
    //}
    onCreate(/*{   
      name: elements.name.value,
      description: elements.description?.value??"",
      deadline: elements.deadline?.value??"",
      priority: elements.priority?.value?? Priority_Default,
      completed: false,
    }*/
   data);
   reset();
   // event.target.reset();
  }
  return(
    <section>
      <h3 className={styles.Title} >New-To-Do
        <button onClick={()=>setShowAllFields(!showAllFields)}>{showAllFields?'Hide':'show'} all fields</button>
      </h3>
        <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
         <TodoFormField
          showAllFields={showAllFields} register={register} errors={errors}
          />
          
           <input type="submit" value="Add"  />
        </form>
    </section>
  )
}





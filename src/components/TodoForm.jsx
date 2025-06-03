import styles from "./TodoForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Priority_Default } from "../Constants/priority";
import { TodoFormField } from "./TodoFormField";

export function TodoForm({ onCreate }) {
  const [showAllFields, setShowAllFields] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      deadline: "",
      priority: Priority_Default,
      completed: false,
    },
  });

  function handleCreate(data) {
    onCreate(data);
    reset();
  }

  return (
    <section>
      <h3 className={styles.Title}>
        New To-Do
        <button
          type="button"
          onClick={() => setShowAllFields((prev) => !prev)}
          className={styles.ToggleButton}
        >
          {showAllFields ? "Hide" : "Show"} all fields
        </button>
      </h3>

      <form className={styles.Form} onSubmit={handleSubmit(handleCreate)}>
        <TodoFormField
          showAllFields={showAllFields}
          register={register}
          errors={errors}
        />
        <input type="submit" value="Add" className={styles.SubmitButton} />
      </form>
    </section>
  );
}

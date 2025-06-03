import { PRIORITIES, Priority_Default } from "../Constants/priority";
import styles from "./TodoFormField.module.css";

export function TodoFormField({ todo = {}, showAllFields = true, register, errors = {} }) {
  const minDate = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.FormFields}>
      {/* Name Field */}
      <div className={styles.FormField}>
        <label htmlFor="name">Name*</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name*"
          autoComplete="off"
          defaultValue={todo.name ?? ""}
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be of minimum length 3",
            },
            maxLength: {
              value: 50,
              message: "Name should be of maximum length 50",
            },
          })}
        />
        {errors.name && <p className={styles.Error}>{errors.name.message}</p>}
      </div>

      {/* Optional Fields */}
      {showAllFields && (
        <>
          {/* Description */}
          <div className={styles.FormField}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              rows="3"
              defaultValue={todo.description ?? ""}
              {...register("description", {
                maxLength: {
                  value: 200,
                  message: "Description should be of maximum length 200",
                },
              })}
            />
            {errors.description && <p className={styles.Error}>{errors.description.message}</p>}
          </div>

          <div className={styles.FormGroup}>
            {/* Deadline */}
            <div className={styles.FormField}>
              <label htmlFor="deadline">Deadline</label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                defaultValue={todo.deadline ?? ""}
                min={minDate}
                {...register("deadline", {
                  ...( !todo.id && {
                    min: {
                      value: minDate,
                      message: "Deadline can't be in the past",
                    },
                  }),
                })}
              />
              {errors.deadline && <p className={styles.Error}>{errors.deadline.message}</p>}
            </div>

            {/* Priority */}
            <div className={styles.FormField}>
              <label htmlFor="priority">Priority</label>
              <select
                id="priority"
                name="priority"
                defaultValue={todo.priority ?? Priority_Default}
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
        </>
      )}
    </div>
  );
}

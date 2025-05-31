import styles from "./TodoFilters.module.css";
import { useEffect, useState } from "react";
import { COMPLETED_FILTERS, PRIORITY_FILTERS } from "../Constants/Filters";

export function TodoFilters({ onFilter }) {
  const [completeFilter, setCompleteFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  useEffect(() => {
    const filters = {
      completeFilter: completeFilter,
      priorityFilter: priorityFilter,
    };
    onFilter(filters);
  }, [completeFilter, priorityFilter, onFilter]);

  return (
    <section>
      <h3>Filter Tasks</h3>
      <div className={styles.Filters}>
        <label htmlFor="completed">Completed</label>
        <select
          id="completed"
          value={completeFilter}
          onChange={(e) => setCompleteFilter(e.target.value)}
        >
          {Object.entries(COMPLETED_FILTERS).map(([key, value]) => (
            <option key={key} value={key} style={{ color: value.color }}>
              {value.label}
            </option>
          ))}
        </select>

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          {Object.entries(PRIORITY_FILTERS).map(([key, value]) => (
            <option key={key} value={key} style={{ color: value.color }}>
              {value.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

import { TodoForm } from './components/TodoForm'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src='/to-do-list.png'/>
        <h2 className={styles.Title}>Todo App</h2>
      </header>
   
      <div className={styles.AppContainer}><TodoForm/></div>
    </div>
  )
}

export default App

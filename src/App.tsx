import './global.css';

import styles from './App.module.css'
import { Header } from './components/Header';
import { SearchToDo } from './components/SearchToDo';

export function App() {

  return (
    <>
      <Header />
      <div className={styles.container}>
        <SearchToDo />
      </div>
    </>
  )
}
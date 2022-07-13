import React from 'react'
import ListItem from './ListItem'
import styles from './Todos.module.css'

import Todo from './models/todo'

const Todos: React.FC<{items: Todo[], deleteTodo: (id: string) => void}>  = (props) => {

  function inputSubmitHandler(id: string) {
    props.deleteTodo(id)
  }

  return (
    <div className={styles.todos}>
        {props.items.map(item => <ListItem key={item.id} item={item} inputSubmitHandler={inputSubmitHandler} />)}
    </div>
  )
}

export default Todos
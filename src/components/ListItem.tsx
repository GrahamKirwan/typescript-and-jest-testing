import React from 'react'
import Todo from './models/todo'

import styles from './ListItem.module.css'

const ListItem: React.FC<{item: Todo, inputSubmitHandler: (id: string) => void}> = (props) => {

    function todoClickHandler() {
        props.inputSubmitHandler(props.item.id)
    }

  return (
    <li className={styles.item} onClick={todoClickHandler}>{props.item.text}</li>
  )
}

export default ListItem
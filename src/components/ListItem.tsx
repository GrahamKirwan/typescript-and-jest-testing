import React from 'react'
import Todo from './models/todo'

const ListItem: React.FC<{item: Todo}> = (props) => {
  return (
    <li>{props.item.text}</li>
  )
}

export default ListItem
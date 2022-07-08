import React from 'react'
import ListItem from './ListItem'

import Todo from './models/todo'

const Todos: React.FC<{items: Todo[]}>  = (props) => {
  return (
    <div>
        {props.items.map(item => <ListItem key={item.id} item={item} />)}
    </div>
  )
}

export default Todos
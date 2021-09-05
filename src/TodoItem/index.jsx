import React from 'react'

const TodoItem = ({ item, onClickRemove }) => {
  return (
    <div>
      {item} <button onClick={() => onClickRemove(item)}>x</button>
    </div>
  )
}

export default TodoItem
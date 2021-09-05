import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

const TodoInput = ({ addItem }) => {
  const [value, setValue] = useState('')

  const onSubmit = useCallback(e => {
    e.preventDefault()
    addItem(value)
    setValue('')
  }, [setValue, addItem, value])

  return (
    <form onSubmit={onSubmit}>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button>Agregar item</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) =>{
  return { 
    addItem: value => dispatch({ type: 'ADD_ITEM', payload: { item: value } })
  }
}

export default connect(null, mapDispatchToProps)(TodoInput)
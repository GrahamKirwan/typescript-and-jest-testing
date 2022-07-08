import React from 'react'

const NewTodo = () => {

    function formSubmitHandler(e: React.FormEvent) {
        e.preventDefault();
    }

  return (
    <form onSubmit={formSubmitHandler}>
        <label htmlFor='text'>New Todo</label>
        <input type='text' id='text'/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
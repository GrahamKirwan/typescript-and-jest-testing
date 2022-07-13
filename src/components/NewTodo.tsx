import React from 'react'
import { useRef } from 'react';

import styles from './NewTodo.module.css'

const NewTodo: React.FC<{inputSubmitHandler: (text: string) => void}> = (props) => {

    const inputValueRef = useRef<HTMLInputElement>(null);

    function formSubmitHandler(e: React.FormEvent) {
        e.preventDefault();

        const inputText = inputValueRef.current!.value;

        if (inputText.length === 0) {
            return
        }
        
        props.inputSubmitHandler(inputText)
    }

  return (
    <form onSubmit={formSubmitHandler} className={styles.form}>
        <label htmlFor='text'>New Todo</label>
        <input type='text' id='text' ref={inputValueRef}/>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
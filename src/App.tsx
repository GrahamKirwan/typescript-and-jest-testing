import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todos  from './components/Todos';

import Todo from './components/models/todo';
import NewTodo from './components/NewTodo';

function App() {

  let items: string[];

  items = ['Breathing', 'Reading', 'Smoothie'];

  // Typescript example
  let number: number | undefined;

  function addNums(a:number, b:number) {
    return a + b;
  }

  number = addNums(4, 5)

  // Type Alias
  type Person = {
    name: string;
    age: number;
  }

  let person: Person;

  person = {
    name: 'graham',
    age: 1
  }


  const [todos, setTodos] = useState<Todo[]>([])

  function inputSubmitHandler (text: string) {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  function deleteTodoHandler(id: string) {

    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div className="App">
    
      <NewTodo inputSubmitHandler={inputSubmitHandler} />
      <Todos items={todos} deleteTodo={deleteTodoHandler}/>
    </div>
  );
}

export default App;

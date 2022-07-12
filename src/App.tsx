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


  // let todoArray = [new Todo('Eat breakfast'), new Todo('Workout')]

  const [todos, setTodos] = useState<Todo[]>([])

  function inputSubmitHandler (text: string) {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {number}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Todos items={todos} />
      <NewTodo inputSubmitHandler={inputSubmitHandler} />
    </div>
  );
}

export default App;

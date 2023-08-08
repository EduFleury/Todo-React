import './App.css';
import React, { useState } from 'react';
import {MdDelete} from 'react-icons/md';
const App = () => {

  const initialTodos = [
    {id: 1, title: "Estudar react", checked: false},
    {id: 2, title: "Estudar ingles", checked: true},
    {id: 3, title: "Estudar js", checked: false},
    {id: 4, title: "Estudar guitarra", checked: true}
  ]

  const [todos, ] = useState(initialTodos);
  const [value, setValue] = useState("");
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  
  const erase = () => {
    setValue("");
  }

  const Submit = () =>{
    console.log("Submit", value);
    erase();
  }

  const onChange = (event) => {
    setValue(event.target.value);
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) { // Verifica se a tecla pressionada é Enter (código 13)
      Submit();
    } else if (event.which === ESCAPE_KEY) { // Verifica se a tecla pressionada é Esc (código 27)
      erase();
    }
  }

  return (
    <section id="app" className="container">
      <header>
        <h1 className="title">Todo</h1>
      </header>

      <section className="main">
        <input
          className="new-todo"
          placeholder="O que precisa ser feito?"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        ></input>

        <ul className="todo-list">
          {
            todos.map((todo) => (
              <li key={todo.id.toString()}>
                <span className='todo'>{todo.title}</span>
                <button className='remove' type="button">
                  <MdDelete size={28}/>
                </button>
                </li>
            ))
          }
        </ul>
      </section>
    </section>
  );
}

export default App;

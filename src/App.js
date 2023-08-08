import './App.css';
import React, { useState } from 'react';
import {MdDelete} from 'react-icons/md';
const App = () => {

  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  
  const erase = () => {
    setValue("");
  }

  const Submit = () =>{
    console.log("Submit", value);
    setTodos([...todos, {id: new Date().getTime(), title: value, checked: false}]);
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

  const onToggle = (todo) =>{
  setTodos(todos.map((obj)=>(obj.id === todo.id?{...obj, checked: !todo.checked}:obj)));
};

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
                  <span 
                    className={['todo', todo.checked? "checked" : ""].join(" ")}
                    onClick={() => onToggle(todo)}
                    onKeyDown={() => onToggle(todo)}
                    role="button"
                    tabIndex={0}>
                    {todo.title}
                  </span>

                  <button 
                  className='remove' 
                  type="button">
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

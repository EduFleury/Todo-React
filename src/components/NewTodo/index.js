import React, {useState} from 'react';
import PropTypes  from 'prop-types';
import "./styles.css"

const NewTodo = ({onNewTodo}) =>{
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;
    
    const [value, setValue] = useState("");

    const erase = () => {
        setValue("");
    }

    const Submit = () =>{
        console.log("Submit", value);
        if(onNewTodo){
            onNewTodo(value);
            erase();
        }
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

    return(
        <input
        className="new-todo"
        placeholder="O que precisa ser feito?"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      ></input>
    );
}

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = ({setTodos}) => {
    const [input, setInput] = useState("");
    const [id, setId] = useState(null);

    useEffect( () => {
        getIdLocalStorage();
    },[]);

    const changeHandler = (e) => {
        setInput(e.target.value);
        //console.log(input);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setId( prev => prev + 1 );
        localStorage.setItem("id", JSON.stringify(id));
        //console.log(id);
        setTodos(prev => {
            return (
                [...prev, { text: input, id: id, completed: false}]
            );
        })
        setInput("");
    }

    const getIdLocalStorage = () => {
        if ( id === null && !JSON.parse(localStorage.getItem("id"))){
        setId(1);
      }
        else {
          setId(1 + JSON.parse(localStorage.getItem("id")));
        };
    
      }

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={submitHandler}>
                <input  value={input} onChange={changeHandler} className="new-todo" placeholder="What needs to be done?" autoFocus/>
            </form>
	    </header>
    )
}

Header.propTypes = {
    setTodos: PropTypes.func
}

export default Header;
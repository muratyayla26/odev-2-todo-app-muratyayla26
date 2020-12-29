import { useState } from "react";

const Header = ({setTodos}) => {
    const [input, setInput] = useState("");

    const changeHandler = (e) => {
        setInput(e.target.value);
        //console.log(input);
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos(prev => {
            return (
                [...prev, { text: input, id: Math.random()*1000, completed: false}]
            );
        })
        setInput("");
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

export default Header;
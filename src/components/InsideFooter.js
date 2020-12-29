import { useState, useEffect } from "react"

const InsideFooter = ({ todos, setTodos, setStatus, status }) => {
    const [uncompletedNumber, setUncompletedNumber] = useState(0);
    const [completedNumber, setCompletedNumber] = useState(0);

    const statusHandlerAll = () => {
        setStatus("all");
    }
    const statusHandlerActive = () => {
        setStatus("active");
    }
    const statusHandlerCompleted = () => {
        setStatus("completed");
    }
    const clearHandler = () => {
        setTodos(todos.filter(item => item.completed !== true))
    }

    useEffect(()=>{
        let holder = todos.filter(item => {
            if(!item.completed){
                return item;
            }
        })
        setUncompletedNumber(holder.length);
        setCompletedNumber(todos.length-holder.length);
    },[todos]);

    return(
        <footer className="footer">
            <span className="todo-count">
                <strong>{`${uncompletedNumber} `}</strong>
                items left
            </span>
            <ul className="filters">
                <li>
                    <a className={ status === "all" ? "selected" : "" } onClick={statusHandlerAll}>All</a>
                </li>
                <li>
                    <a className={ status === "active" ? "selected" : "" } onClick={statusHandlerActive}>Active</a>
                </li>
                <li>
                    <a className={ status === "completed" ? "selected" : "" } onClick={statusHandlerCompleted}>Completed</a>
                </li>
            </ul>
            {
                completedNumber > 0 ?
                <button onClick={clearHandler} className="clear-completed">
                Clear completed
                </button> : null
            }
        </footer>
    );
};

export default InsideFooter;
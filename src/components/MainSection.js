import { useState, useEffect } from "react";
import Todo from "./Todo";

const MainSection = ({filteredTodos, todos, setTodos}) => {
    const [initStatus, setInitStatus] = useState(false);

    const allCompletedHandler= () => {
        setTodos(todos.map(item=>{
            return { ...item, completed: !initStatus};
        }))
        setInitStatus(!initStatus);
    }
    
    useEffect(()=>{
        if(todos.length === 0){
            setInitStatus(false);
        }
        if( todos.length > 0 && (todos.every(item => item.completed === true))){
            setInitStatus(true);
        }else {
            setInitStatus(false);
        }
    },[todos])

    return (
        <div>
            { todos.length > 0 ?
                <div onClick={allCompletedHandler} className = {initStatus ? "toggle-all clicked" : "toggle-all"}>{'❯'}</div>
            : null }
            <ul className="todo-list">{
                filteredTodos.map(todo => {
                    return (
                            <Todo setInitStatus={setInitStatus} todos={todos} setTodos={setTodos} key={todo.id} todoContent={todo} />
                    );
                })
                }
            </ul>
        </div>
    );
};

export default MainSection;
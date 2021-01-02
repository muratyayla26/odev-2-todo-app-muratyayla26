import PropTypes from "prop-types";

const Todo = ({todoContent, todos, setTodos}) => {
    const completedHandler = () => {
        setTodos(todos.map(item=>{
            if(item.id===todoContent.id){
                return {...item, completed: !item.completed};
            } else{
                return item;
            }
        }));
    }

    const destroyHandler = () => {
        setTodos(todos.filter(item => {
            if(item.id !== todoContent.id){
                return item;
            }
        }));
    }

    return (
        <li className = {todoContent.completed ? "completed": ""}>
            <div className="view">
                <input onClick={completedHandler} className = {todoContent.completed ? "toggle toggleHolder" : "toggle" } type="checkbox"/>
                <label>{todoContent.text}</label>
                <button onClick={destroyHandler} className="destroy"></button>
            </div>
        </li>
    )
}

Todo.propTypes = {
    todos: PropTypes.array,
    setTodos: PropTypes.func,
    todoContent: PropTypes.object
}

export default Todo;
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import InsideFooter from "./components/InsideFooter";
import './App.css';
import { useState, useEffect} from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  const filterTodos = () => {
    switch (status) {
      case "active":
        setFilteredTodos(todos.filter(todo => todo.completed === false ));
        break;
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "all":
        setFilteredTodos(todos);
    }
  }
  
  useEffect(() => {
    getLocalStorage();
  },[]);

  useEffect( () => {
    filterTodos();
    saveLocalStorage();
  },[todos, status]);

  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    }
    const firstLocalTodos = JSON.parse(localStorage.getItem("todos"));
    setTodos(firstLocalTodos);
  }
 
  return (
    <div>
      <section className="todoapp">
        <Header setTodos={setTodos}/>
        <MainSection todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} className="mainSection"/>
        { todos.length > 0 ?
        <InsideFooter todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}/>
        : null }
      </section>
      <Footer/>
    </div>
  );
}

export default App;

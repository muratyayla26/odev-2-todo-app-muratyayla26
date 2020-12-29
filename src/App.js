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
  
  useEffect( () => {
    filterTodos();
  },[todos, status]);

  return (
    <div>
      <section className="todoapp">
        <Header todos={todos} setTodos={setTodos}/>
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

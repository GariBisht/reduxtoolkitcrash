//import logo from './logo.svg';
import './App.css';
import Todos from './app/components/Todos';
import AddTodo from './app/components/AddTodo';
function App() {
  return (
    <div className="App">
   
    <AddTodo />
    <Todos />
    </div>
  );
}

export default App;

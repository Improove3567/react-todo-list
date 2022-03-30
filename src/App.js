import './App.css';
import Header from './components/header/Header';
import CreateTodo from './components/create-todo/Create-todo';

function App() {
  return (
    <div className="App">
      <div className='todo-wrapper'>
        <Header count={5} />
        <CreateTodo  />
      </div>
      <div className='todo-container'>
       
      </div>
    </div>
  );
}

export default App;

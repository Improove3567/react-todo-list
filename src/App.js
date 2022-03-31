import Header  from './components/header/Header';
import Input from './components/input/Input';
import './App.css';
import CreateTodo from './components/create-todo/Create-todo';
import Todo from './components/todo/Todo';

function App() {
  return (
    <div className="App">
      <div className='todo-wrapper'>
        <Header count= {5} />
        <div className='p-3'>
          <CreateTodo />
          <div className='mt-2 todo-list'>
              {
                [1,2,3].map((todo)=><Todo text = {todo}/>) 
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

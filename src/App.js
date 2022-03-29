import Header  from './components/header/Header';
import Input from './components/input/Input';
import './App.css';
import CreateTodo from './components/create-todo/Create-todo';

function App() {
  return (
    <div className="App">
      <div className='todo-wrapper'>
        <Header count= {5} />

        <div className='input'>
        <Input/>

        <CreateTodo task="walk the dog"/>
        <CreateTodo task="vailid with passport -js"/>
        <CreateTodo/>
      </div>
      </div>
      
    </div>
  );
}

export default App;

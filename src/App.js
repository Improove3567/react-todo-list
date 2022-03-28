import Header  from './components/header/Header';
import Input from './components/input/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='todo-wrapper'>
        <Header count= {5} />

        <div className='input'>
        <Input/>
      </div>
      </div>
      
    </div>
  );
}

export default App;

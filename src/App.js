import Header  from './components/header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='todo-wrapper'>
        <Header count= {5} />
      </div>
    </div>
  );
}

export default App;

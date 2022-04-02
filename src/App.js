import React from 'react';
import Header  from './components/header/Header';
import Input from './components/input/Input';
import './App.css';
import CreateTodo from './components/create-todo/Create-todo';
import Todo from './components/todo/Todo';


class App extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    todolist:[
      {
        id:1,
        text:"сделать домашнее задание ",
        status: false
      },
      {
        id:2,
        text:"купить сахар ",
        status: true
      },
      {
        id:3,
        text:"купить соль ",
        status: false
      },
    ]
    
  }
  this.createTodo = this.createTodo.bind(this)
  }

  createTodo(str){
    this.setState({todolist: []})
  }


    render(){
      return(
        <div className="App">
        <div className='todo-wrapper'>
          <Header count= {5} />
          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo}/>
            <div className='mt-2 todo-list'>
              
                {
                  
                  this.state.todolist.map((todo)=>
                  <Todo text = {todo.text} status={todo.status}/>
                  
                 
                  )  
                }
            </div>
          </div>
        </div>
      </div>
      )
      }
    
  }
  
  // function App() {
  //   return (
  //     <div className="App">
  //       <div className='todo-wrapper'>
  //         <Header count= {5} />
  //         <div className='p-3'>
  //           <CreateTodo />
  //           <div className='mt-2 todo-list'>
              
  //               {
                  
  //                 ["1","h1","hello"].map((todo)=>
  //                 <Todo text = {todo} />
                  
                 
  //                 )  
  //               }
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  
  export default App;
  
  
  
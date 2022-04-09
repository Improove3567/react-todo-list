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
    todolist:[],
    isLoading: true
    
  }
  this.createTodo = this.createTodo.bind(this)
  this.changeStatus = this.changeStatus.bind(this)
  this.deleteTodo = this.deleteTodo.bind(this)
  this.onEdit = this.onEdit.bind(this)
  }

  componentDidMount(){
    const data = JSON.parse(localStorage.getItem("todo")) || []
    this.setState({todolist: data})
    
    setTimeout(() => {
      this.setState({isLoading: false})
    }, 2500)
  }

  componentDidUpdate(){
    localStorage.setItem("todo", JSON.stringify(this.state.todolist))
  }

  componentWillUnmount(){
    console.log("Will unmount")
  }

  createTodo(str){
    this.setState({todolist: [ ...this.state.todolist, {id: Math.random(), text:str, status:false}]})
  }
  changeStatus(id) {
    const newArr = this.state.todolist.map((item) => {
    if (item.id === id){
        const newObj = {...item, status: !item.status}
        return newObj
      }
      return item
    });
    this.setState({todolist: newArr})
  }

  deleteTodo(id){
    const newArr = this.state.todolist.filter((todo) => todo.id !== id)
    this.setState({todolist: newArr})
    // this.setState(({todolist}) => {
    //   const findIndex = this.todolist.findIndex(elem => elem.id === id)
    //   const before = todolist.slice(0, findIndex)
    //   const after = todolist.slice(findIndex, +1)
    //   const newArr = [...before, ...after]
    //   return {
    //     todolist: newArr
    //   }
    // })
  }

  onEdit(id,newText){
    const newArr = this.state.todolist.map((item) => {
      if (item.id === id){
          const textEdit = {...item, text: newText}
          return textEdit
        }
        return item
      });
      this.setState({todolist: newArr})

  }


    render(){
      if(this.state.isLoading){
        return <div className='loader'>
          <img src='https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif'/>
        </div>
      }
      
      return(
        <div className="App">
        <div className='todo-wrapper'>
          <Header count= {this.state.todolist.length} />
          <div className='p-3'>
            <CreateTodo createTodo={this.createTodo}/>
            <div className='mt-2 todo-list'>
              
                {
                  
                  this.state.todolist.map((todo)=>
                  <Todo
                  onEdit={this.onEdit}
                  deleteTodo={this.deleteTodo}
                  key={todo.id}
                  changeStatus = {this.changeStatus} 
                  id = {todo.id}
                  text = {todo.text} 
                  status={todo.status}
            
                  />
                  
                 
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
  
  
  
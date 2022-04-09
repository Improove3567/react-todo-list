import React from "react"
import css from "./Todo.module.css"

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      todoValue: props.text
    }
this.submit = this.submit.bind(this)
  }
  submit(e) {
    e.preventDefault();
    this.props.onEdit(this.props.id, this.state.todoValue)
    this.setState({todoValue: this.props.text}) 
    this.setState({ isEdit: false })
  }

  handleChange(e){
    this.setState({todoValue: e.target.value})
    
}

  render() {
    return (
      <div className="items d-flex p-3 align-items: center ; justify-content-between">
        {
          this.state.isEdit
            ? <form onSubmit={this.submit} className="input-group">
              <input
                value={this.state.todoValue}
                onChange={(e) => this.handleChange(e)}
                type="text"
                className="form-control"
                placeholder="Enter your Todo" 
                
                />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            : <div>
              <input
                type="checkbox"
                checked={this.props.status} className="m-2"
                onChange={() => this.props.changeStatus(this.props.id)}

              />
              <span className={this.props.status ? css.done : ""}>{this.props.text}</span>
            </div>
        }

        <div>
          <img style={{ width: "30px", height: "30px" }}
            src="https://cdn-icons-png.flaticon.com/128/3208/3208615.png" alt=""
            onClick={() => this.setState({ isEdit: !this.state.isEdit })}
          />
          <img style={{ width: "30px", height: "30px" }}
            src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png"
            alt=""
            onClick={() => this.props.deleteTodo(this.props.id)}
          />
        </div>
      </div>
    )
  }
}
export default Todo


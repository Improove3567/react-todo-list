
import css from "./Todo.module.css"
export default function Todo(props) {
 
  return (
    <div className="items d-flex p-3 align-items: center ; justify-content-between">
        <div>
        <input type="checkbox"  checked={props.status}className="m-2"  />
        <span className={props.status ? css.done : ""}>{props.text}</span>
        {
          
        }
        </div>
        <div>
            <img style={{width:"30px" ,height:"30px"}} src="https://cdn-icons-png.flaticon.com/128/3208/3208615.png" alt="" />
            <img style={{width:"30px" ,height:"30px"}} src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" alt="" />
        </div>
    </div>
  )
  
}


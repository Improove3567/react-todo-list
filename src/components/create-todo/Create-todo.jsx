import React from 'react';


const CreateTodo = (props) => {
    return (
        <div className='todo d-flex align-items-center justify-content-between '>
        <div className='tasks'>
        <input type="checkbox"/> {" "}
        {props.task}
        </div>

        <div className="imgs ">
            <img style={{width:"30px", height:"30px" }} src="https://cdn3.iconfinder.com/data/icons/it-workplace-1-1/66/41-128.png" alt="" />
            {' '}
            <img style={{width:"30px", height:"30px"}} src="https://cdn4.iconfinder.com/data/icons/eon-ecommerce-i-1/32/trashcan_delete_remove-128.png" alt="" />
        </div>
        </div>
    );
}

export default CreateTodo;

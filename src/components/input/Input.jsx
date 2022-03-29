import React from 'react';

const Input = () => {
    return (
        <form className=" d-flex justify-content-center mb-4 mt-4"> 
       
        <div className=" p-0  "> 
          <label for="inputPassword2" className="visually-hidden">Password</label> 
          <input type="text" className="form-control "  placeholder="Enter todo here"/> 
        </div> 

        <div className=" p-0 "> 
          <button type="submit" className="btn btn-primary  ">Submit</button> 
        </div> 
      </form>
    );
}

export default Input;

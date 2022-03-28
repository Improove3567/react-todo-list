import React from 'react';

const Input = () => {
    return (
        <form className="row g-3"> 
       
        <div className="col p-0 "> 
          <label for="inputPassword2" className="visually-hidden">Password</label> 
          <input type="text" className="form-control "  placeholder="Enter todo here"/> 
        </div> 
        <div className="col p-0"> 
          <button type="submit" className="btn btn-primary mb-3 ">Submit</button> 
        </div> 
      </form>
    );
}

export default Input;

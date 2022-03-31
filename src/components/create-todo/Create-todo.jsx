import css from "./CreateTodo.module.css"

const CreateTodo = () => {
    return (
        <form className="input-group">
            <input type="text" class="form-control" placeholder="Enter todo hear"/>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    );
}

export default CreateTodo;

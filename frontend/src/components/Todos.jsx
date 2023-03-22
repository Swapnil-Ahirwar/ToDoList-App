import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions";
import { Todo } from "./Todo";




export const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    return (
        <article>
            <ul>
                {
                    todos.map(todo => (
                        // <li key={todo._id}>{todo.data}</li>
                        <Todo 
                            key={todo._id}
                            todo={todo}
                        />
                    ))
                }
            </ul>
        </article>
    )
}


export default Todos;
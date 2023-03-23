import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "../redux/actions";
import { Todo } from "./Todo";
import '../App.css';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from "../redux/actions/typeConstant";
import Tabs from "./Tabs";




export const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() => {
        dispatch(getAllTodos());
    }, []);

    const getTodos = () => {
        if(currentTab === ALL_TODOS){
            return todos;
        }else if(currentTab === ACTIVE_TODOS){
            return todos.filter(todo => !todo.done);
        }else if(currentTab === DONE_TODOS){
            return todos.filter(todo => todo.done);
        }
    }

    return (
        <article>
            <div>
                <Tabs currentTab={currentTab} />
            </div>
            <ul>
                {
                    getTodos().map(todo => (
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
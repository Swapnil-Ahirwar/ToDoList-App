import axios from 'axios';
import { ADDNEW_TODO, GETALL_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './typeConstant';

const API_URL = 'http://localhost:8000';


export const addNewTodo = (data)=> async(dispatch) => {
    try{
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    }catch(error){
        console.log('Error while calling addNewTodo Api: ', error.message);
    }
}

export const getAllTodos = () => async(dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({ type: GETALL_TODOS, payload: res.data });
    }catch(error){
        console.log('Error while calling getAllTodos Api: ', error.message);
    }
}

export const toggleTodo = (id) => async(dispatch) => {
    try{
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TOGGLE_TODO, payload: res.data });
    }catch(error){
        console.log('Error while calling toggleTodo Api: ', error.message);
    }
}

export const updateTodo = (id, data) => async(dispatch) => {
    try{
        const res = await axios.put(`${API_URL}/todos/${id}`, { data });
        dispatch({ type: UPDATE_TODO, payload: res.data });
    }catch(error){
        console.log('Error while calling updateTodo Api: ', error.message);
    }
}

export const deleteTodo = (id) => async(dispatch) => {
    try{
        const res = await axios.delete(`${API_URL}/todos/${id}`);
        dispatch({ type: DELETE_TODO, payload: res.data });
    }catch(error){
        console.log('Error while calling deleteTodo Api: ', error.message);
    }
}
import axios from 'axios';
import { ADDNEW_TODO } from './typeConstant';

const API_URL = 'http://localhost:8000';


export const addNewTodo = (data)=> async(dispatch) => {
    try{
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADDNEW_TODO, payload: res.data });
    }catch(error){
        console.log('Error while calling addNewTodo Api: ', error.message);
    }
}
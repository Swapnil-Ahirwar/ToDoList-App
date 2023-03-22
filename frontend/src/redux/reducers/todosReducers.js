import * as actionTypes from '../actions/typeConstant.js'




export const todosReducers = (state = [], action) => {

    switch(action.type){
        case actionTypes.ADDNEW_TODO: 
            return [ action.payload, ...state]; 

        case actionTypes.GETALL_TODOS:
            return action.payload;
    
        default:
            return state;
    }
}
import { ButtonState, ADD_TASK, REMOVE_TASK, ToDoActionType } from '../types';

const initialState: ButtonState = {
    text : 'Enter a task',
}

export function AddReducer (state = initialState, action: ToDoActionType) : ButtonState {

    switch(action.type) {
    case ADD_TASK:
        return {
                ...state, 
                text: action.payload
                } 
    
    case REMOVE_TASK:
        return {
                ...state, 
                text: action.payload
                }   
        default:
            return state;       
    }   
}



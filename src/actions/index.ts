import { ADD_TASK_LIST, REMOVE_TASK_LIST, ToDoActionType } from '../types'

export function ADD_TASK (text: string): ToDoActionType {
    return {
        type: ADD_TASK_LIST,
        payload: text
    }   
}

export function REMOVE_TASK (text: string): ToDoActionType {
    return {
        type: REMOVE_TASK_LIST,
        payload: text
    }   
}


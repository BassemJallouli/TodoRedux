
// Action Type Definitions
export const ADD_TASK_LIST = 'ADD_TASK_LIST'
export const REMOVE_TASK_LIST = 'REMOVE_TASK_LIST'

// Model Type Definitions
export interface ButtonState {
    text : string,
        
}
// Action Definitions
export interface ADD_TASK {
    type: typeof ADD_TASK_LIST
    payload: string
}
export interface REMOVE_TASK {
    type: typeof REMOVE_TASK_LIST
    payload: string
}
export type ToDoActionType = ADD_TASK | REMOVE_TASK 


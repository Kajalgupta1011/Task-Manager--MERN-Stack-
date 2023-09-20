import * as actionTypes from "../Actions/type";

export const todosReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_TODO:
            
            return[action.payload, ...state];
            
        case actionTypes.GET_ALL_TODO:
            
            return action.payload;

        case actionTypes.TODO_TOGGLE:
            return state.map(task => (
                task._id === action.payload._id ? {...task, done: !task.done} : task
            )) 

        default:
            return state;
    }
}

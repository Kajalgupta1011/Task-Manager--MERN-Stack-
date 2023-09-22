import * as actionTypes from "../Actions/type";

export const todosReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_TODO:
            
            return[action.payload, ...state];
            
        case actionTypes.GET_ALL_TODO:
            
            return action.payload;

        case actionTypes.TODO_TOGGLE:
            return state.map(task => (
                task._id === action.payload._id ? { ...task, status: !task.status } : task
            ));

        case actionTypes.UPDATE_TODO:
            return state.map(task => (
                task._id === action.payload._id ? {...task, data: action.payload.data} : task
            )) ;
        case actionTypes.DELETE_TODO:
        return state.filter(task=>task._id !== action.payload._id);

        default:
            return state;
    }
}

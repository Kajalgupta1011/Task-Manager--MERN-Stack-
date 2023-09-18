import * as actionTypes from "../Actions/type";

export const todosReducers = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_NEW_TODO:
            
            return[action.payload, ...state];
            
        case actionTypes.GET_ALL_TODO:
            
            return action.payload;

        default:
            return state;
    }
}

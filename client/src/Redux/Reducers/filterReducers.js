import * as actionTypes from '../Actions/type';

export const filterReducers = (state = actionTypes.ALL_TODOS, action) => {
    switch (action.type){
        case actionTypes.FILTER_TOGGLE:
            return action.selected;
        default:
            return state;
    }
}
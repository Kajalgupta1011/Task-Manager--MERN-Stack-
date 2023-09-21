import axios from 'axios';
import { ADD_NEW_TODO, GET_ALL_TODO, TODO_TOGGLE, UPDATE_TODO, DELETE_TODO, FILTER_TOGGLE } from './type';


const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADD_NEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling api add todo', error.message);
    }
}

export const getAllTodo = () => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos`);
        dispatch({ type: GET_ALL_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling get all todos', error.message);
    }
}
export const todoToggle = (id) => async (dispatch) => {
    try {
        const res = await axios.get(`${API_URL}/todos/${id}`);
        dispatch({ type: TODO_TOGGLE, payload: res.data })
    } catch (error) {
        console.log('Error while calling editing todos', error.message);
    }
}
export const updateTask = (id, data) => async (dispatch) => {
    try {
        const res = await axios.put(`${API_URL}/todos/${id}`, {data});        
        dispatch({ type: UPDATE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling update todos', error.message);
    }
}

export const deleteTask = (id) => async (dispatch) => {
    try {
        const res = await axios.delete(`${API_URL}/todos/${id}`);    

        dispatch({ type: DELETE_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling delete todos', error.message);
    }
}

export const filterToggle = (filter) => async (dispatch) => {
  dispatch({type: FILTER_TOGGLE, selected: filter});
}
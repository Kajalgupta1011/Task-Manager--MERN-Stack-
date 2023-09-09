import axios from 'axios';
import { ADD_NEW_TODO } from './type';


const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
    try {
        const res = await axios.post(`${API_URL}/todos`, { data });
        dispatch({ type: ADD_NEW_TODO, payload: res.data })
    } catch (error) {
        console.log('Error while calling api', error.message);
    }
}
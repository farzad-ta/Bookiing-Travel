// src/redux/actions/userActions.ts
import { Dispatch } from 'redux';
import axios from 'axios';
import { FETCH_USER_DATA, UserActionTypes } from '../types';

export const fetchUserData = () => {
  return async (dispatch: Dispatch<UserActionTypes>) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      const userData = response.data;

      dispatch({
        type: FETCH_USER_DATA,
        payload: userData,
      });
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
};

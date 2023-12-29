// src/redux/types.ts
export interface User {
    name: string;
    email: string;
  }
  
  export interface RootState {
    user: User;
  }
  
  export const FETCH_USER_DATA = 'FETCH_USER_DATA';
  
  interface FetchUserDataAction {
    type: typeof FETCH_USER_DATA;
    payload: User;
  }
  
  export type UserActionTypes = FetchUserDataAction;
  
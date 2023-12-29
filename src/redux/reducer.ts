export interface initialStateType {
  Flights: any[];
  softwaresData: any[];
}

const initialState: initialStateType = {
  Flights: [],
  softwaresData: [],

};

 const rootReducer = (state: initialStateType = initialState, action: any): initialStateType => {
  switch (action.type) {
    case "SET-Flights":
      return { ...state, Flights: action.payload };
    case "SET-SOFTWARES":
      return { ...state, softwaresData: action.payload }
    default:
      return state;
  }
};
export default  rootReducer 
  
  
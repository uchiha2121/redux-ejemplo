const userReducer = (state= {
  name: "hola",
  age: 30
}, action) => {
  switch(action.type){
      case "SET_NAME":
          state= {
              ...state,
              name: action.payload
          };
          break;
      case "SET_AGE":
          state= {
              age: action.payload
          }; 
          break;
  }
  return state;
}

export default userReducer;
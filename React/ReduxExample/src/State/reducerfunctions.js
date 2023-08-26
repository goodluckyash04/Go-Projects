//reducer function also use creater reducer
import data from '../data.json'
const initialState = {
  cart: 0,
  balance: 0,
  products:data.products,
  notes:data.notes
};
export const updatecart = (state = initialState.cart, action) => {
  if (action.type === "increase") {
    return state + action.payload;
  } else if (action.type === "decrease") {
    if (state !== 0) {
      return state - action.payload;
    }
  } else {
    return state;
  }
};
export const updatebalance = (state = initialState.balance, action) => {
  if (action.type === "deposite") {
    return state + action.payload;
  } else if (action.type === "withdraw") {
    if (state !== 0 && action.payload < state) {
      return state - action.payload;
    } else if (action.payload > state) {
      alert("Insufficiant Balance.");
    }
  } else {
    return state;
  }
};

export const product = (state = initialState.products, action) => {
  if (action.type === "add") {
    return state.concat(action.payload);
  }
  if (action.type === "edit") {
    const index = state.findIndex((object) => {
      return object.id === action.payload.id;
    });
    console.log(index);
    state.splice(index, 1, action.payload);
    console.log(state)
    return state;
  }
  if (action.type === "del") {
    return state.filter((item) => item.id !== action.payload);
  }
  return state;
};

export const note = (state = initialState.notes, action)=>{
  return state
}
import { configureStore } from "@reduxjs/toolkit";
import {note, product, updatebalance, updatecart} from "../reducerfunctions";

const rootReducer=()=>({    //combined reducer
    cart:updatecart,
    balance:updatebalance,
    product:product,
    notes:note
})

export const store=configureStore({reducer:rootReducer()})

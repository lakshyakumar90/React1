import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action)=> {
            //In older redux -> dont mutate state -> returnuing is mandatory

            //in redux toolkit -> you have to mutate the state -> returning is not mandatory -> redux takes care of it automatically
            //But behind the scenes redux toolkit still works like previous old redux and it uses IMMER LIBRARY to mutate the state
            //mutating the state over here
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state, action) => {
            state.items = []; 
            // or state.items.length = 0
            //or return {items: []};
            // it is correct or just return {items: []}; beacuse RTK says either mutate the existing state or return a new state

            //state = []; is not correct beacuse it is not actually mutating the state it is just adding the reference to it. Beacuse the local state variable is only changing and not the originalState variable is mutating or changing
        }
    }
})

export const{addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
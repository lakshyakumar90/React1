const { configureStore } = require("@reduxjs/toolkit");
import cartReducer from "./cartSlice";

const appStore = configureStore({
    reducer:{ /* This is the main reducer and it contains all the small small which are for each slice reducers */
        cart: cartReducer,
    },
});

export default appStore;
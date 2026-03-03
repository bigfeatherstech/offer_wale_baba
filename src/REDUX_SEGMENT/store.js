import { configureStore } from "@reduxjs/toolkit";
import appReducer from './wishlistSlice'; // Import the app reducer from your slice file

const store = configureStore({
  reducer: {
    app: appReducer, // This matches the state structure (state.app.wishlist, state.app.cart, etc.)
    // You can add other reducers here if needed
  },
});

export default store;
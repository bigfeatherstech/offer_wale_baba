import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../REDUX_SLICES/authSlice";
import adminProductCreateReducer from "../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/adminProductCreateSlice";
import adminGetProductsReducer from "../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/adminGetProductsSlice";
import adminArchivedReducer from "../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/adminArchivedSlice"
import adminEditProductReducer from "../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/adminEditProductSlice";
import categoriesReducer from "../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/categoriesSlice";
import adminBulkUploadReducer from "../../ADMIN_SEGMENT/ADMIN_REDUX_MANAGEMENT/bulkUploadSlice";

// USER REDUCER 
import userProductsReducer from "../REDUX_SLICES/userProductsSlice";
import userCategoriesReducer from "../REDUX_SLICES/userCategoriesSlice";
import userWishlistReducer from '../REDUX_SLICES/userWishlistSlice';
import userCartReducer from '../REDUX_SLICES/userCartSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
    adminProductCreate: adminProductCreateReducer,
    adminGetProducts: adminGetProductsReducer,
    adminEditProduct: adminEditProductReducer,
    adminArchived: adminArchivedReducer,
    categories: categoriesReducer,
    adminBulkUpload: adminBulkUploadReducer,



    // USER REDUCER 
    userProducts: userProductsReducer,
    userCategories: userCategoriesReducer,
    userWishlist: userWishlistReducer,
    userCart: userCartReducer
  },
  devTools: import.meta.env.MODE !== "production", // Redux DevTools only in dev
});

export default store;

// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     // Add your reducers here
//   },
// });

// export default store;
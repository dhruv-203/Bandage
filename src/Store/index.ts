import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./Slices/Api";
import { authReducer } from "./Slices/authSlice";
import {
  filterByBrands,
  filterByCategory,
  filterByPrice,
  initializeCategoryList,
  initializeProducts,
  productReducer,
  sortBy,
} from "./Slices/productsSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    [Api.reducerPath]: Api.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export {
  filterByBrands,
  filterByCategory,
  filterByPrice,
  initializeCategoryList,
  initializeProducts,
  sortBy,
  store,
};
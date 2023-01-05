import { configureStore } from "@reduxjs/toolkit";
import CarsReducer from "../Feature/CarsSlice";

const store = configureStore({
    reducer: {
        carsReducer: CarsReducer
    }
})
export default store;
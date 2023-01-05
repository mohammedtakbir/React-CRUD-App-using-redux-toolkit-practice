import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';


const initialCars = {
    cars: [
        { id: uuidv4(), brandName: 'Porche', modelName: '911 Turbo S', year: 2019 },
        { id: uuidv4(), brandName: 'Audi', modelName: 'RS7', year: 2018 }
    ]
}

const carsSlice = createSlice({
    name: 'cars',
    initialState: initialCars,
    reducers: {
        showCars: (state) => state,
        addCar: (state, action) => {
            state.cars.push(action.payload)
        }
    }
})

export const { showCars, addCar } = carsSlice.actions;
export default carsSlice.reducer;
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
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload)
        },
        updateCar: (state, action) => {
            const { id, brandName, modelName, year } = action.payload;
            const isExist = state.cars.filter(car => car.id === id);
            if (isExist) {
                isExist[0].modelName = modelName;
                isExist[0].brandName = brandName;
                isExist[0].year = year;
            }
        }
    }
})

export const { showCars, addCar, deleteCar, updateCar } = carsSlice.actions;
export default carsSlice.reducer;
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCar } from '../Feature/CarsSlice';

const ShowCars = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.carsReducer.cars);

    const handleDeleteCar = (id) => {
        dispatch(deleteCar(id))
    }

    return (
        <div>
            <h1 className='text-center text-2xl font-semibold'>Show All Cars</h1>
            <div className='mt-5'>
                <div className="overflow-x-auto">
                    <table className="table w-[600px] mx-auto border rounded">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Brand</th>
                                <th>Name</th>
                                <th>Year</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cars.map((car, i) => (
                                    <tr key={car.id}>
                                        <th>{i + 1}</th>
                                        <td>{car.brandName}</td>
                                        <td>{car.modelName}</td>
                                        <td>{car.year}</td>
                                        <td>
                                            <Link
                                                to='/edit-car'
                                                state={{ id: car.id, brandName: car.brandName, modelName: car.modelName, year: car.year }}
                                                className='text-blue-500 underline mr-3 active:text-green-500'
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDeleteCar(car.id)}
                                                className='text-red-500 underline active:text-green-500'
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ShowCars;
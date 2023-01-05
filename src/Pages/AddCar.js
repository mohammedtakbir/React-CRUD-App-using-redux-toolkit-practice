import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addCar } from '../Feature/CarsSlice';

const AddCar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const handleAddCar = (data) => {
        const car = { id: uuidv4(), ...data }
        dispatch(addCar(car));
        navigate('/show-cars');
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>Add a Car</h2>
            <div className=''>
                <form onSubmit={handleSubmit(handleAddCar)} className='mt-10 max-w-[350px] mx-auto border shadow-md rounded-md p-5'>
                    <div onSubmit={handleSubmit(handleAddCar)} className='mb-3'>
                        <label className='text-sm font-medium'>Brand</label>
                        <input
                            {...register('brandName', { required: true })}
                            type="text"
                            placeholder="Brand Name"
                            className="input input-bordered w-full !h-10 text-sm"
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='text-sm font-medium'>Model</label>
                        <input
                            {...register('modelName', { required: true })}
                            type="text"
                            placeholder="Model Name"
                            className="input input-bordered w-full !h-10 text-sm"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='text-sm font-medium'>Year</label>
                        <input
                            {...register('year', { required: true })}
                            type='text'
                            placeholder="Year..."
                            className="input input-bordered w-full !h-10 text-sm"
                        />
                    </div>
                    <div>
                        <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full">Add Car</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
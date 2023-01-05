import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateCar } from '../Feature/CarsSlice';

const EditCar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const car = location.state;
    const { brandName, modelName, year, id } = car;

    const { register, handleSubmit } = useForm();

    const handleCarUpdate = (date, e) => {
        const car = { id, ...date };
        dispatch(updateCar(car));
        e.target.reset();
        navigate('/show-cars', { replace: true });
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-medium mt-6'>Edit a Car</h2>
            <form onSubmit={handleSubmit(handleCarUpdate)} className='mt-5 max-w-[350px] mx-auto border shadow-md rounded-md p-5'>
                <div className='mb-3'>
                    <label className='text-sm font-medium'>Brand</label>
                    <input
                        {...register('brandName', { required: true })}
                        defaultValue={brandName}
                        type="text"
                        placeholder="Brand Name"
                        className="input input-bordered w-full !h-10 text-sm"
                    />
                </div>
                <div className='mb-3'>
                    <label className='text-sm font-medium'>Model</label>
                    <input
                        {...register('modelName', { required: true })}
                        defaultValue={modelName}
                        type="text"
                        placeholder="Model Name"
                        className="input input-bordered w-full !h-10 text-sm"
                    />
                </div>
                <div className='mb-4'>
                    <label className='text-sm font-medium'>Year</label>
                    <input
                        {...register('year', { required: true })}
                        defaultValue={year}
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
    );
};

export default EditCar;
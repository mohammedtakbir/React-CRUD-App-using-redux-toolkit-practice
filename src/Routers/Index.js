import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCar from '../Pages/AddCar';
import EditCar from '../Pages/EditCar';
import Error from '../Pages/Error';
import Home from '../Pages/Home';
import Navbar from '../Pages/Navbar';
import ShowCars from '../Pages/ShowCars';

const Index = () => {
    return (
        <BrowserRouter>
            <main className='max-w-[800px] mx-auto'>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/show-cars' element={<ShowCars />}></Route>
                    <Route path='/add-car' element={<AddCar />}></Route>
                    <Route path='/edit-car' element={<EditCar />}></Route>
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Index;
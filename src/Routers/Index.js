import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from '../Pages/Error';
import Home from '../Pages/Home';

const Index = () => {
    return (
        <BrowserRouter>
            <main className='max-w-[800px] mx-auto'>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='*' element={<Error />}></Route>
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default Index;
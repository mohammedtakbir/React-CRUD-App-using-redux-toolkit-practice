import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <h1 className='text-3xl'>Page Not Found 404</h1>
            <Link to='/' className='mt-3 text-blue-500 underline'>Back Home Page</Link>
        </div>
    );
};

export default Error;
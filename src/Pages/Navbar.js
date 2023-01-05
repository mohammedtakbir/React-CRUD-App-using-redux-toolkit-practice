import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='text-center py-3'>
            <Link to='/' className='mx-2 font-medium text-sm hover:underline'>Home</Link>
            <Link to='/show-cars' className='mx-2 font-medium text-sm hover:underline'>Show Cars</Link>
            <Link to='/add-car' className='mx-2 font-medium text-sm hover:underline'>Add car</Link>
        </nav>
    );
};

export default Navbar;
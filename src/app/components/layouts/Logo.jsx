import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={'/'} className='flex items-center  gap-1'>
            <img width={70} height={60} src={'/assets/logo.png'} alt="logo-hero-kidz" />
            <h1 className='text-xl font-bold'>Hero <span className='text-primary'>Kidz</span></h1>
        </Link>
    );
};

export default Logo;
"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const navigate = useRouter();

    const loggedIn = true;
    const handleAddress = () => {
        if (loggedIn) {
            navigate.push('/about/address')
        }
        else {
            navigate.push('/')
        }
    }
    return (
        <div>
            <h2 className='text-4xl font-bold'>This is the about page</h2>
            <button className='btn btn-active' type='button' onClick={handleAddress}>Go to the Address</button>
        </div>
    );
};

export default AboutPage;
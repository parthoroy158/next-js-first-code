import React from 'react';

const Dashboard = ({ children }) => {


    return (
        <div className='grid grid-cols-12 text-center'>
            {/* this is the  */}
            <div className='col-span-3 mt-10'>
                <h2>this is the menu</h2>
                <h2>this is the menu</h2>
                <h2>this is the menu</h2>
            </div>
            {/* This is the dashboard content */}
            <div className='col-span-9'>
                {children}
            </div>
        </div>

    );
};

export default Dashboard;
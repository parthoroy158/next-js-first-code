import React from 'react';

const page = async({ params }) => {
   const paramsRes = await params;
   console.log(paramsRes)
    return (
        <div>
            <h2>About slug pages</h2>
        </div>
    );
};

export default page;
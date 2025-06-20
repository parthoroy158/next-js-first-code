import React from 'react';

const LicheeProducts = async () => {
    const res = await fetch('http://localhost:3000/api/items')
    const data = await res.json()

 
    return (
        <div className='grid grid-cols-3 gap-5 mt-5 min-h-screen max-w-7xl mx-auto'>
            {
                data.map(item => {
                    return (
                        <div key={item._id} className="card bg-base-100 w-96 shadow-sm">
                            <figure className="px-10 pt-10">
                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="rounded-xl w-60 h-50" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Card Title</h2>
                                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Update</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default LicheeProducts;
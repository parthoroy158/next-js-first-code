import React from 'react';

const page = ({ params }) => {
    const _id = params?.id
    const Data = [
        {
            "_id": "1",
            "name": "Alice Thompson",
            "image": "https://randomuser.me/api/portraits/women/45.jpg",
            "details": "Data analyst with 5 years of experience in predictive modeling and machine learning.",
            "isFake": false
        },
        {
            "_id": "2",
            "name": "Brian Carter",
            "image": "https://thispersondoesnotexist.com/",
            "details": "Freelance graphic designer specializing in brand identity and digital illustrations.",
            "isFake": true
        },
        {
            "_id": "3",
            "name": "Charlotte Lee",
            "image": "https://randomuser.me/api/portraits/women/32.jpg",
            "details": "Marketing manager with a focus on social media campaigns and SEO strategy.",
            "isFake": false
        },
        {
            "_id": "4",
            "name": "David Zhao",
            "image": "https://thispersondoesnotexist.com/",
            "details": "AI researcher exploring natural language processing and generative models.",
            "isFake": true
        },
        {
            "_id": "5",
            "name": "Emily Nguyen",
            "image": "https://randomuser.me/api/portraits/women/19.jpg",
            "details": "Frontend developer passionate about accessible and user-friendly design.",
            "isFake": false
        }
    ]

    const singleData = Data?.find(d => d._id == _id)
    console.log(singleData)

    return (
        <div>
            <h1 className='font-bold'>Service Details Page:</h1>
            <p className='font-bold'>ID:{_id}</p>
            <div className='flex gap-5 mt-5'>
                <img className='w-50 rounded' src={singleData.image} alt="" />
                <div>
                    <p className='font-bold'>Name:{singleData.name}</p>
                    <p>Details:{singleData.details}</p>
                </div>
            </div>

        </div>
    );
};

export default page;
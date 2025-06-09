import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {

    const data = [
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

    return (
        <div>
            <h2 className='text-4xl font-bold'>This is the services page</h2>

            {
                data.map(item =>
                    <div key={item._id}>
                        <Link  href={`/services/${item._id}`}>
                            <img className='w-10 m-3 rounded' src={item.image} alt="" />
                        </Link>
                    </div>)
            }

        </div >
    );
};

export default ServicesPage;
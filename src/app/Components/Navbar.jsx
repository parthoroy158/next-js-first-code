"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';



const Navbar = () => {
    const pathname = usePathname()
    const noNav = pathname.includes('userDashboard') || pathname.includes('adminDashboard')
    console.log(noNav)

    return (
        <div>
            {
                noNav ?
                    ''
                    :

                    <nav className='flex justify-center '>
                        <ul className='flex justify-between gap-10 bg-purple-300 p-2 rounded-xl mt-2'>
                            <Link href='/'>
                                <li>Home</li>
                            </Link>
                            <Link href='/services'>
                                <li>Services</li>
                            </Link>
                            <Link href='/about'>
                                <li>About</li>
                            </Link>
                        </ul>
                    </nav>

            }
        </div >
    );
};

export default Navbar;
import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {

    const currentCookies = request.cookies.get('nextjs-token')
    console.log(currentCookies.value)
    const dummyUserData = {
        role: 'user',
        email: 'admin123@gmail.com'
    }

    let isServices = request.nextUrl.pathname.startsWith('/services')
    let isAdmin = dummyUserData.role === 'admin'
    if (!isAdmin && isServices) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next()
}


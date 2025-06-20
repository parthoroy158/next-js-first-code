

export async function GET() {

    const data = {
        name: "This is my practice projects"
    }


    return Response.json({ data })
}

export async function POST(req) {

    
    const postData = await req.json();


    return Response.json({ postData})
}
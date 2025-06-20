import dbConnect from "@/lib/dbConnet";


export async function GET() {

    const data = await (await dbConnect("lichee_collection")).find({}).toArray()

    return Response.json(data)
}



export async function POST(req) {

    const postData = await req.json()

    return Response.json({postData })
}
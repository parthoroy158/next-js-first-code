import dbConnect from "@/lib/dbConnet"
import { ObjectId } from "mongodb"



export async function GET(req, { params }) {
    const id = await params.id
    console.log("This is the id params",id)
    const query = { _id: new ObjectId(id) }
    const data = await (await dbConnect("cart_collection")).findOne(query)
    return Response.json(data)
}



// export async function DELETE(req, { params }) {
//     const p = await params
//     return Response.json({ params })
// }


// export async function PATCH(req, { params }) {
//     const id = await params
//     const query = { _id: new ObjectId(id) }
//     const result = (await dbConnect("cart_collection")).updateOne(query, {$set:})
//     return Response.json(result)
// }
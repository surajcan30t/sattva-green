import connect from "@/utils/connect";
import Consult from "@/models/Consult";
import { NextResponse } from "next/server";



export async function POST(req, res) {
    await connect();
    try {

        const body = await req.json();

        const nv = await Consult.create(body);

        return NextResponse.json(nv,{
            message:"Message sent successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        console.log("the possible error is",e)
        return NextResponse.json(
            { message: e.message },
            { status: 500 }
        )
    }
}
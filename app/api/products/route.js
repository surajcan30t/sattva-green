import fs from 'fs/promises';
import path from 'path';



import { NextResponse } from "next/server";


export async function GET(req) {
    try {
        const filePath = path.join(process.cwd(), 'productdata', 'products.json');
        const jsonData = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return NextResponse.json(data, {
            status: 200
        })

    } catch (e) {
        console.log("the possible error is", e)
        return NextResponse.json(
            { message: e.message },
            { status: 500 }
        )
    }
}
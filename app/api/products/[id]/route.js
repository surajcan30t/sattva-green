import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from "next/server";


export const GET = async (req, { params: { id } }) => {
    try {
        const post = await Revs.findById(id);
        const filePath = path.join(process.cwd(), 'productdata', 'products.json');
        const jsonData = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(jsonData);
        return NextResponse.json(data, {
            status: 200
        })
        return NextResponse.json(post, { success: true })
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong" }, { success: false })
    }
}
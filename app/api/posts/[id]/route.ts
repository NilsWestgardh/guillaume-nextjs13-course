import { NextResponse } from 'next/server';

const post: any = [
    {
        id: 12,
        title: "Hello",
        description: "This is a description",
    },
];

export async function GET(request: Request, context: any) {
    const { params } = context;
    return NextResponse.json({
        post: post.find((post: any) => post.id.toString() === params.id),
    });
}
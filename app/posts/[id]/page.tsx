CLIENT SIDE DATA FETCHING

'use client';

import { useEffect, useState } from "react";

type Post = {
    title?: string;
    description?: string;
}

export default function PostID({ params }: any) {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getPostByID = async () => {
        try {
            setLoading(true);
            const response = await fetch(`http://localhost:3000//api/posts/${params.id}`, {
                method: 'GET',
                next: {
                    revalidate: 5000,
                }
            });

            await new Promise(resolve => setTimeout(resolve, 2000));

            if (response) {
                const { post } = await response.json();
                if (post) setPost(post);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        getPostByID();
    }, []);

    return (
        <main>
            {loading && <div>loading..</div>}
            {!loading && <div>
                {post && <h1>{post.title}</h1>}
                {post && <h2>Post #: {params.id}</h2>}
                {post && <p>{post.description}</p>}
            </div>}
        </main>
    )
}

// SERVER SIDE DATA FETCHING

// async function getPostByID(postID: string) {
//     const response = await fetch(`http://localhost:3000//api/posts/${postID}`, {
//         method: 'GET',
//     });

//     const { post } = await response.json();
//     return post;
// }

// export default async function PostID({ params }: any) {
//     const post = await getPostByID(params.id);

//     console.log(post);

//     return (
//         <main>
//             <h1>{post.title}</h1>
//             <h2>Post #: {params.id}</h2>
//             <p>{post.description}</p>
//         </main>
//     )
// }
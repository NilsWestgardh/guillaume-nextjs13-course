const fetchPost = async (postID: string) => {
    // This function fetches a post from the server based on the provided postID.
    // It uses the fetch API to make an HTTP GET request to the server.
    const post = await fetch(
        `https://guillaume-nextjs13-course.vercel.app//api/posts/${postID}`, {
        method: 'GET',
    });
    // The response from the server is returned as a Promise.
    // We use the .json() method to parse the response body as JSON.
    return post.json();
}

export async function generateMetadata({ params }: any) {
    // This function generates metadata for a post based on the provided params.
    // It expects the params object to contain an 'id' property.
    // It calls the fetchPost function to fetch the post data from the server.
    const { post } = await fetchPost(params.id);

    // The post data is an array, and we assume it contains at least one element.
    // We extract the title and description properties from the first element of the array.
    return {
        title: post[0].title,
        description: post[0].description,
    }
}

export default function PostID({ params }: any) {
    // This is a React functional component that renders the post ID.
    // It expects the params object to contain an 'id' property.
    // The post ID is displayed within a <main> element.
    return (
        <main>Post ID: {params.id}</main>
    )
}
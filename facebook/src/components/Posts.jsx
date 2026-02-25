import Post from "./Post";

function Posts({ posts }) {
    return (
        <>
            <h1>Posts</h1>

            {
                posts.map((p) => (
                    <>
                        <Post p={p} />
                    </>
                ))  
            }
        </>
    );
};

export default Posts;
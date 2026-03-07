import Post from "./Post";

function Posts({ posts }) {
  return (
    <>
      <h1>Posts</h1>

      {posts.map((p) => (
        <div>
          <Post p={p} />
        </div>
      ))}
    </>
  );
}

export default Posts;

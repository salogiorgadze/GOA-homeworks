import Title from "./Title";

const Post = ({ p }) => {
  return (
    <div>
      <Title p={p} />
      <h3>Author: {p.author}</h3>
      <p>Type: {p.type}</p>
      <p>Content: {p.content}</p>
      {p.tags.map((tag, index) => {
        return (
          <div key={index}>
            <p>Tags: {tag}</p>
          </div>
        );
      })}
      <p>Date: {p.date}</p>

      <p>Likes: {p.likes}</p>
      <p>Shres: {p.shares}</p>

      <h2>Comments</h2>

      {p.comments.map((c, index) => {
        return (
          <div key={index}>
            <p>User name: {c.user}</p>
            <p>User comment: {c.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Post;

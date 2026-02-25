function Title({ p }) {
  if (p.likes > 170) {
    return <h2>Post Title: Most popular</h2>
};
  if (p.shares > 80) {
    return <h2>Post Title: Most shared Post</h2>
};
  if (p.comments.length > 2) {
    return <h2>Post Title: Most commented</h2>
};
  return <h2>Normal Post</h2>;
}

export default Title;
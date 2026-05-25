const express = require("express");
const { readFile, writeFile } = require("./utils/fs.util");

const app = express();

const FILE_URL = "/Users/salogiorgadze/EXPRESS/server/database/posts.json";

app.use(express.json());

app.get("/posts", (req, res) => {
  const posts = readFile(FILE_URL);

  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const posts = readFile(FILE_URL);
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "bad request",
    });
  }

  const post = posts.find((p) => p.id == id);

  if (!post) {
    return res.status(404).json({
      message: "product not found",
    });
  }
  return res.json(post);
});

app.post("/posts", express.json(), (req, res) => {
  const posts = readFile(FILE_URL);
  const { title, content } = req.body;

  const post = { title, content, id: Date.now() };

  posts.push(post);
  writeFile(FILE_URL, JSON.stringify(posts));

  return res.json(post);
});

app.delete('/posts/:id', (req, res) => {
    const posts = readFile(FILE_URL);
    const {id} = req.params;

    if (!id) {
    return res.status(400).json({
      message: "bad request",
    });
  }

    const filtered = posts.filter(p => p.id != id);

    writeFile(FILE_URL, JSON.stringify(filtered));

    return res.json({
        message: 'post deleted successfully'
    });
});

app.put('/posts/:id', (req, res) => {
    const posts = readFile(FILE_URL);
    const { id } = req.params;
    const { title, content } = req.body;

    const index = posts.findIndex(p => p.id == id);

    if (index === -1) {
        return res.status(404).json({
            message: 'post not found'
        });
    }

    posts[index] = {
        ...posts[index],
        title: title || posts[index].title,
        content: content || posts[index].content
    };

    writeFile(FILE_URL, JSON.stringify(posts));

    return res.json(posts[index]);
})

app.listen(3000, () => {
  console.log("Server is running!");
});

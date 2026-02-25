import Songs  from "./components/Songs";
function App() {
const songs = [
  {
    id: 0,
    title: "Apocalypse",
    artist: "Cigarettes After Sex",
    year: 2017,
    image : "https://i.pinimg.com/736x/2f/b9/d1/2fb9d1458144251f7a12a0284e8fda36.jpg",
    width : 300
  },
  {
    id : 1,
    title: "Sweet",
    artist: "Cigarettes After Sex",
    year: 2017,
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0fM1QSUxUXuGa5wEK62IaTVPYU7cLV3OeFA&s",
    width : 300
  },
  {
    id : 2,
    title: "Nothing's Gonna Hurt You Baby",
    artist: "Cigarettes After Sex",
    year: 2012,
    image : "https://i1.sndcdn.com/artworks-000182720824-4jzxti-t1080x1080.jpg",
    width : 300
  },
  {
    id : 3,
    title: "Heavenly",
    artist: "Cigarettes After Sex",
    year: 2017,
    image : "https://i.scdn.co/image/ab67616d0000b273ced182a9a86195e9ba2a5183",
    width : 300
  },
  {
    id : 4,
    title: "Cry",
    artist: "Cigarettes After Sex",
    year: 2019,
    image : "https://i.scdn.co/image/ab67616d0000b273ced182a9a86195e9ba2a5183",
    width : 300
  }
];

  return (
    <main>
      <Songs songs = {songs}/>
    </main>
  )
}
export default App

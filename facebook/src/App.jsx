import Movies from "./components/Movies";
function App() {
 const movies = [
  {
    id: 1,
    name: "Harry Potter and the Sorcerer's Stone",
    description: "A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry.",
    rating: 8.1,
    image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Sorcerer%27s_Stone_poster.jpg"
  },
  {
    id: 2,
    name: "10 Things I Hate About You",
    description: "A modern adaptation of Shakespeare's 'The Taming of the Shrew', set in an American high school.",
    rating: 7.3,
    image: "https://upload.wikimedia.org/wikipedia/en/7/71/10thingsihateaboutyou.jpg"
  },
  {
    id: 3,
    name: "The Devil Wears Prada",
    description: "A young woman lands a job at a prestigious fashion magazine, working for a demanding editor.",
    rating: 6.9,
    image: "https://upload.wikimedia.org/wikipedia/en/e/e0/The_Devil_Wears_Prada.jpg"
  },
  {
    id: 4,
    name: "Mean Girls",
    description: "A teenager navigates the social hierarchy of a high school dominated by a popular clique.",
    rating: 7.0,
    image: "https://upload.wikimedia.org/wikipedia/en/7/76/Mean_Girls_film_poster.jpg"
  },
  {
    id: 5,
    name: "Legally Blonde",
    description: "A sorority girl goes to Harvard Law School to win back her ex-boyfriend, discovering her potential along the way.",
    rating: 6.3,
    image: "https://upload.wikimedia.org/wikipedia/en/2/25/Legally_Blonde.jpg"
  }
];
  return (
    <main>
      <Movies movies={movies}/>
    </main>
  )
}
export default App

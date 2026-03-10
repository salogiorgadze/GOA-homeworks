import logo from "./images/Logo_3.png"
import { useState, useEffect } from "react";

function App() {
  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.log(err))
  }, [input]);

console.log(movies)
  return(
    <div>
      <header className="bg-black flex justify-center">
        <img src={logo} alt="" width={200} />
         <div className="relative w-1/3 mt-2 ml-5">
       <div className="absolute inset-y-0 left-2 flex items-center mb-1.5">
          <svg
            className="h-5 w-5 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 21 21"
          >
            <path d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58 0 4.747 4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z" />
          </svg>
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Search Movie"
          className="bg-white h-9 w-full pl-9 pr-2 rounded outline-none border border-gray-300 focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button className="text-white bg-black ml-3 font-sans">Watchlist</button>
      <button className="text-white bg-black ml-3 font-sans">Sign In</button>
      </header>
      <div className="bg-[url(./images/collage.png)] bg-cover min-w-screen">
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
        <h1>F</h1>
      </div>
      <main className="bg-white">
        <div className="mt-[1%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

        {
          movies.map((movie,index) => {
            return(
              <div key={index} className="bg-neutral-900 font-serif flex flex-col justify-center">
                <h1>{movie.show.name}</h1>
                <img src={movie.show.image ? movie.show.image.medium : "https://via.placeholder.com/210x295"} alt="" width={300}/>
              </div>
            )
          })
        }
        </div>
      </main>
    </div>
  )
}

export default App

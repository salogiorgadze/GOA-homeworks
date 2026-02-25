function Movies({movies}){
    return (
        <div>
            <h1>Movie</h1>
            <div>
               {movies.map(mov => {
                return (
                    <div key={mov.id}>
                        <h2>{mov.name}</h2>
                        <img src="{mov.image}" alt="" />
                        <p>{mov.desc}</p>
                    </div>
                )
               })}
            </div>
        </div>
    )
}
export default Movies
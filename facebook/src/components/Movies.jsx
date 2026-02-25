function Movies({movies}){
    return (
        <div>
            <h1>Favorite Movies</h1>
            <div>
                {movies.map(mov => {
                    return (
                        <div key={mov.id}>
                            <h1>{mov.name}</h1>
                            <p><b>{mov.description}</b></p>
                            <h2><b><i>{mov.rating}</i></b></h2>
                            <img src={mov.image} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Movies

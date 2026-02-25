function Songs({songs}){
    return (
        <div>
            <h1>Songs</h1>
            <div>
                {songs.map(song => {
                    return (
                        <div key={song.id}>
                            <h2>{song.title}</h2>
                            <h2><b>{song.artist}</b></h2>
                            <h2><i>{song.year}</i></h2>
                            <img src={song.image} alt="" width={song.width}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Songs
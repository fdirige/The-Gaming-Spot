const GameDetail = (props) => {
    const { game } = props.location.gameProps

    return (
        <div>
            <h1>{game.name}</h1>
            <p>Release: {game.released}</p>
            <p>Rating: {game.rating}</p>
            <h3>Genres:</h3>
            {
                game.generes.map(g => `${g.name} | `)
            }

            <h3>Platforms:</h3>
            {
                game.platforms.map(p => `${p.platform.name} | `)
            }

            <ul>
                {
                    game.short_screenshots.map(ss => <li><img src={ss.image} alt='screenshot'></img></li>)
                }
            </ul>
        </div>
    );
}

export default GameDetail;
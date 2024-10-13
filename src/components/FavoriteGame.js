export default function FavoriteGame(props) {
    return (
        <div key={(props.game.id) ? props.game.id : props.index} className="basis-1/6 bg-gray-600 rounded-xl items-center relative fav_game_cover">
            {/* <div className="flex z-10 w-full h-full absolute justify-center fav_game_cover rounded-xl">
                <p className="opacity-100" style={{fontFamily:"K2D"}}>{props.game.name}</p>
            </div> */}
            <img className="rounded-xl h-full w-full object-cover " src={props.game.cover?.url.replace("t_thumb", "t_cover_big")}/>
        </div>
    )
}

export default function SearchItem(props) {
    return (
        <div className="flex flex-row p-2 bg-emerald-900 mb-2 rounded-md border-4 border-green-950">
            <div style={{width: '10%'}}>
                <img className="h-full w-full object-contain rounded-md border-4 border-green-950" src={props.game.cover?.url.replace("t_thumb", "t_cover_big")}/>
            </div>
            <div className="flex flex-col p-2 basis-4/6">
                <div>{props.game.name}</div>
                <div>Description</div>
            </div>
            <div className="flex flex-col basis-1/6">
                <div className="basis-1/2">Score</div>
                <div className="flex flex-row basis-1/2">
                    <div></div>
                    <div className="flex flex-col">
                        <div>Dropdown</div>
                        <button>Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
{/* <p>{props.game.name}</p> */}
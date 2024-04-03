
export default function SearchItem(props) {
    return (
        <div className="relative flex flex-row p-2">
            <div style={{width: '10%'}}>
                <img className="h-full w-full object-contain" src={props.game.cover?.url.replace("t_thumb", "t_cover_big")}/>
            </div>
            <div className="flex flex-col p-2" style={{width:'70%'}}>
                <div>{props.game.name}</div>
                <div>Description</div>
            </div>
            <div className="flex flex-col w-1/6" style={{width:'20%'}}>
                <div className="basis-1/2">Score</div>
                <div className="flex flex-row basis-1/2">
                    <div><input defaultValue={0}/></div>
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
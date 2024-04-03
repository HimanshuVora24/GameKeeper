
export default function SearchItem(props) {
    return (
        <div className="flex flex-row h-1/6">
            <div className="flex flex-col basis-1/5">
                <img src={props.game.cover?.url}/>
            </div>
            <div className="flex flex-col basis-3/5">
                <div>{props.game.name}</div>
                <div>Description</div>
            </div>
            <div className="flex flex-col basis-1/5">
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
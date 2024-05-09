
export default function SearchItem(props) {
    return (
        <div className="flex flex-row p-2 border-black mb-2 rounded-md border-2" style={{backgroundImage: "linear-gradient(to right, #148C19, #052607)"}}>
            <div style={{width: '10%', aspectRatio: '1/1'}}>
                <img className="h-full w-full object-cover rounded-md border-2 border-black" src={props.game.cover?.url.replace("t_thumb", "t_cover_big")}/>
            </div>
            <div className="flex flex-col pl-2 pr-2 basis-3/4">
                <div className="flex border-2 mb-2 basis-1/3 pl-2 border-black rounded-sm items-center"
                    style={{backgroundImage: "linear-gradient(81deg, #45D765, #56BD6C, #42A457)"}}>
                        <p style={{fontFamily: "K2D", fontSize:"1.25rem", color:"#000000"}}>{props.game.name}</p>
                    </div>
                <div className="basis-2/3 pl-1">
                    <p style={{fontFamily: "Inter", textShadow:"1px 1px black, -1px 1 black, 1px -1px black, -1px -1px black"}}>
                        {props.game.description}    
                    </p>
                </div>
            </div>
            <div className="flex flex-row basis-1/6">
                <div className="flex flex-col basis-1/2 mr-2">
                    <div className="flex flex-col basis-3/4 items-center justify-center rounded-md border-2 border-black" style={{background:"#33C24A"}}>
                        <p style={{fontFamily: "Inter", fontSize:"2.5rem", color:"black", fontWeight:"600"}}>9</p>
                        <p style={{fontFamily: "Inter", color:"black", fontWeight:"600"}}>Amazing</p>
                    </div>
                    <div className="flex basis-1/4 items-center justify-center rounded-md mt-2 border-black bg-blue-600"
                        style={{boxShadow: "inset -1px 1px 5px black"}}>
                        Completed
                    </div>
                </div>
                <div className="flex flex-col basis-1/2 rounded-md border-black border-2 items-center"
                style={{backgroundImage: "linear-gradient(180deg, #21612B, #36E333)"}}>
                    <p className="basis-3/5" style={{fontFamily: "Inter", fontSize:"2.5rem", color:"black", fontWeight:"600"}}>9</p>
                    <div className="flex h-full w-full items-center justify-center">
                        Dist
                    </div>
                </div>
            </div>
        </div>
    );
}
{/* <p>{props.game.name}</p> */}



//textShadow:"0 0 5px black, 0 0 5px black, 0 0 5px black"
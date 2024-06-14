
const ratingColors = [
    "D6D6D6",
    "D72020",
    "C72C2C",
    "CB702E",
    "8D962A",
    "BECB2E",
    "B8F632",
    "6ACB2E",
    "71DC4B",
    "36E333",
    "1EFF0B"
]

const ratingStrings = [
    "N/A",
    "Appalling",
    "Terrible",
    "Bad",
    "Boring",
    "Mid",
    "Okay",
    "Good",
    "Great",
    "Amazing",
    "G.0.A.T"
]

const niceGreen = "#33C24A"
const greenGradient = "linear-gradient(to right, #148C19, #052607)";
const grayGradient = "linear-gradient(to right, #565656, #232323)"
const greenGradientName = "linear-gradient(81deg, #45D765, #56BD6C, #42A457)";
const grayGradientName = "linear-gradient(81deg, #BCBCBC, #9A9A9A, #787878)";

export default function SearchItem(props) {
    const openPanel = () => {
        props.setCurrentGame(props.game);
        props.setAddPanelOpen(true);
    }

    return (
        <div className="flex flex-row p-2 border-black mb-2 rounded-md border-2" style={{backgroundImage: grayGradient, height:"10rem"}}>
            <div style={{aspectRatio: '1/1'}}>
                <img className="h-full w-full object-cover rounded-md border-2 border-black" src={props.game.cover?.url.replace("t_thumb", "t_cover_big")}/>
            </div>
            <div className="flex flex-col pl-2 pr-2 basis-3/4 ">
                <div className="flex border-2 mb-2 basis-1/3 pl-2 border-black rounded-md items-center"
                    style={{backgroundImage: grayGradientName}}>
                        <p style={{fontFamily: "K2D", fontSize:"1.25rem", color:"#000000"}}>{props.game.name}</p>
                    </div>
                <div className="basis-2/3 pl-1 rounded-md overflow-hidden" style={{}}>
                    <p style={{fontFamily: "Inter", textShadow:"1px 1px black, -1px 1 black, 1px -1px black, -1px -1px black", 
                        textOverflow:"ellipsis",
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        overflow: 'hidden'}}>
                        {props.game.description}    
                    </p>
                </div>
            </div>
            <div className="flex flex-row basis-1/6">
                <div className="flex flex-col basis-1/2 mr-2">
                    <div className="flex flex-col basis-3/4 items-center justify-center rounded-md border-2 border-black" 
                        style={{background:`#${ratingColors[props.game.userScore]}`, boxShadow: "inset -1px -1px 0px black"}}>
                        <p style={{fontFamily: "Inter", fontSize:"2.5rem", color:"black", fontWeight:"600"}}>{props.game.userScore ? props.game.userScore : "- -"}</p>
                        <p style={{fontFamily: "Inter", color:"black", fontWeight:"600"}}>{ratingStrings[props.game.userScore]}</p>
                    </div>
                    <button className="flex basis-1/4 items-center justify-center rounded-md mt-2 border-black border-2"
                        style={{boxShadow: "inset -1px -1px 5px black", backgroundColor:"#232323", fontFamily:"K2D"}}
                        onClick={()=>openPanel()}>
                        Add
                    </button>
                </div>
                <div className="flex flex-col basis-1/2 rounded-md border-black border-2 items-center"
                style={{backgroundImage: `linear-gradient(0deg, #252525, 45%, #${ratingColors[props.game.avgScore]})`}}>
                {/* style={{backgroundColor: "#21612B"}}> */}
                    <p className="basis-3/5" 
                        style={{fontFamily: "Inter", fontSize:"2.5rem", color:"black", fontWeight:"600", textShadow:"0px 0px 3px white"}}>
                        {props.game.avgScore}
                    </p>
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
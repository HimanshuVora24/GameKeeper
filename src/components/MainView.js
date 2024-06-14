import searchGame from "@/utils/IGDBRequest";
import { useEffect, useState } from "react";
import AddPanel from "./AddPanel";

function MainView() {
    const [t_5, setT_5] = useState([{},{},{},{},{}]);
    // useEffect(()=>{
    //     searchGame("Yakuza").then((res)=>{
    //         setT_5(res);
    //     });
    // },[]);

    var t_5Elem = t_5.map((game, index) => {
        return (
            <div key={(game.id) ? game.id : index} className="flex basis-1/6 bg-gray-600 rounded-xl items-center border-black border-2">
                {/* <img className="rounded-xl object-cover h-full w-full" src={game.cover?.url.replace("t_thumb", "t_cover_big")}/> */}
            </div>
        )
    });

    return (
        <div className="flex min-h-full p-4 pl-0" style={{background:"linear-gradient(73deg, #252525 49%, #4B4B4B)"}}>
            <div className="flex-1 flex flex-col rounded-xl p-4">
            {/* <AddPanel/> */}
                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/5 flex flex-col items-center">
                        <div className="p-2 pt-0">
                            <img className="h-full w-full object-cover border-2 border-black rounded-md" src="/ayanokoji_pfp.jpg"/>
                        </div>
                        <div style={{color:"white", background:"#4C4C4C"}} className="pl-2 border-2 pr-2 rounded-md border-black">Joined: 19th May 2020</div>
                    </div>
                    <div className="basis-4/6 flex flex-col pl-4">
                        <div style={{flexBasis:"12%", background:"linear-gradient(to right, #E3E3E3,#A5A5A5,#5F5E5E)", color:"#000000", fontSize:"1.75em"}} 
                            className="border-2 text-5xl p-2 w-3/5 border-black rounded-md">Name</div>
                        <div style={{flexBasis:"10%"}} className="flex flex-row mt-1">
                            <div style={{flexBasis:"5%", padding:".25rem", background:"#4C4C4C"}} className="border-2 border-black rounded-md">
                                <img src="/xboxicon.png"></img>
                            </div>
                        </div>
                        <div style={{flexBasis:"48%", background:"#676767"}} className="border-2 text-md p-2 mt-1 border-black rounded-md">
                            Bio: Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est 
                            laborum.
                        </div>
                        <div style={{flexBasis:"30%", fontFamily:"K2D"}} className="flex flex-row h-full pt-3">
                            <div className="flex flex-row basis-1/4 h-full">
                                <div style={{color:"#000000", background:"#45D877",fontSize:"3em"}} className="flex flex-col basis-1/2 h-full border-2 rounded-l-md border-black items-center justify-center">
                                    <div>9</div>
                                    <div style={{fontSize:".25em"}}>Average</div>
                                </div>
                                <div className="basis-1/2 h-full border-black rounded-r-md border-2 border-l-0"
                                    style={{background:"linear-gradient(180deg, #D9D9D9, #858585)"}}></div>
                            </div>
                            <div className="flex flex-row basis-3/4 h-full justify-end">
                                <div className="flex flex-col basis-3/4 h-full">
                                    <div style={{background:"#676767"}} className="basis-1/5 flex items-center justify-center border-2 border-r-0 rounded-tl-md border-black">Games</div>
                                    <div style={{fontFamily:"K2D",color:"black"}} className="basis-5/6 flex flex-row">
                                        <div style={{background:"#FCD928"}} className="flex flex-col basis-1/6 items-center justify-center border-l-2 border-b-2 border-black rounded-bl-md">
                                            <div>10000</div>
                                            <div style={{fontSize:".75em"}}>Completed</div>
                                        </div>
                                        <div style={{background:"#2D58F3"}} className="flex flex-col basis-1/6 items-center justify-center border-b-2 border-black">
                                            <div>10000</div>
                                            <div style={{fontSize:".75em"}}>Finished</div>
                                        </div>
                                        <div style={{background:"#45D877"}} className="flex flex-col basis-1/6 items-center justify-center border-b-2 border-black">
                                            <div>10000</div>
                                            <div style={{fontSize:".75em"}}>Ongoing</div>
                                        </div>
                                        <div style={{background:"#731DFF"}} className="flex flex-col basis-1/6 items-center justify-center border-b-2 border-black">
                                            <div>10000</div>
                                            <div style={{fontSize:".75em"}}>Backlog</div>
                                        </div>
                                        <div style={{background:"#D52626"}} className="flex flex-col basis-1/6 items-center justify-center border-b-2 border-black">
                                            <div>10000</div>
                                            <div style={{fontSize:".75em"}}>Dropped</div>
                                        </div>
                                        <div style={{background:"#466355"}} className="flex flex-col basis-1/6 items-center justify-center border-b-2 border-black">
                                            <div>10000</div>
                                            <div style={{fontSize:".75em"}}>Wishlist</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="basis-1/6 h-full border-2 rounded-tr-md rounded-br-md border-black "
                                    style={{background:"linear-gradient(180deg, #D9D9D9, #858585)"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex basis-1/2 mt-8 pl-2" style={{width:"85%"}}>
                    <div className="flex flex-row  rounded-xl space-x-2 p-2" style={{width:"100%"}}>
                        <div className="basis-1/6"></div>
                        {t_5Elem}
                    </div>
                </div>
                {/* <div className="flex basis-2/5 bg-white"></div> */}
            </div>
        </div>
    )
}

/* <div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div> */
export default MainView;